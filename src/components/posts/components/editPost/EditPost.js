import React from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    Switch,
    ImagePickerIOS,
    DatePickerIOS,
    DatePickerAndroid,
    Platform,
    Button,
} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome"
import DatePicker from "react-native-datepicker"
import { connect } from "react-redux";

import {
    submitEditPost,
    getCurrentlyEditingIndex,
} from "../../../../ducks/common";
import { PostStatus } from "../postStatus/PostStatus";
import { PostImageConnected } from "../postImage/PostImage";
import { PostBody } from "../postBody/PostBody";
import { formatDate } from "./utils";
import styles, { datePickerCustomStyles } from "./styles";

export class EditPost extends React.Component {
    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            state: PropTypes.shape({
                params: PropTypes.shape({
                    url: PropTypes.string,
                    avatar: PropTypes.string,
                    date: PropTypes.string,
                    caption: PropTypes.string,
                    author: PropTypes.string,
                    ready: PropTypes.bool,
                }),
                routeName: PropTypes.string,
            }),
        }),
        onSubmitEdit: PropTypes.func.isRequired,
    };
    state = {
        caption: this.props.navigation.state.params.caption,
        hashtags: "",
        hashtagsAddedToCaption: false,
        imageUri: "",
        isFocused: false,
        remindDate: "",
    };
    constructor(props) {
        super(props);

        this.onHashtagsEdit = this.onHashtagsEdit.bind(this);
        this.onCaptionEdit = this.onCaptionEdit.bind(this);
        this.onAddHashtagsToCaption = this.onAddHashtagsToCaption.bind(this);
        this.onImageEdit = this.onImageEdit.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onEndEditing = this.onEndEditing.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    scrollViewRef;
    render() {
        const { navigation: { state: { params } } } = this.props
        const EditIcon = (
            <FAIcon
                name="pencil"
                style={styles.editIcon}
                color="rgba(46, 204, 113, .5)"
                size={45}
            />
        );

        const now = new Date();
        const reminderDate = this.state.remindDate ? new Date(this.state.remindDate) : now;
        const DateComponent = <DatePicker
            format="YYYY-MM-DD"
            minDate={now}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={this.onDateChange}
            date={this.state.remindDate || now}
            showIcon={false}
            style={styles.datePicker}
            androidMode="spinner"
            customStyles={datePickerCustomStyles}
            mode="datetime"
        />;

        return (
            <ScrollView style={[styles.post, this.state.isFocused && { marginBottom: 200 }]}>
                <PostImageConnected
                    postUrl={this.state.imageUri || params.url}
                    editIcon={EditIcon}
                    onPress={this.onImageEdit}
                />
                <View style={styles.formGroup}>
                    <Text style={styles.label}>
                        Hashtags
                    </Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={""}
                        placeholder="#wow Amazing hashtag #yolo"
                        onChangeText={this.onHashtagsEdit}
                        autoCorrect={false}
                        autoCapitalize="none"
                        returnKeyType="done"
                        onFocus={this.onFocus}
                        onEndEditing={this.onEndEditing}
                    />
                    <View style={styles.formGroupSub}>
                        <Text style={styles.label}>
                            Append to caption
                            {" "}
                        </Text>
                        <Switch
                            value={this.state.hashtagsAddedToCaption}
                            onValueChange={this.onAddHashtagsToCaption}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Caption</Text>
                    <TextInput
                        defaultValue={params.caption}
                        placeholder="Posts' caption"
                        onChangeText={this.onCaptionEdit}
                        autoCorrect={false}
                        multiline={true}
                        style={styles.input}
                        value={this.state.caption}
                        onFocus={this.onFocus}
                        onEndEditing={this.onEndEditing}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Reminder date</Text>
                    {DateComponent}
                </View>
                <Button
                    onPress={this.onSubmit}
                    title="Submit editing"
                />
                <View style={{height: 20}}/>
            </ScrollView>
        );
    }
    /**
     * 
     * @param {string} caption 
     */
    onCaptionEdit(caption) {
        this.setState({
            caption,
        })
    }
    /**
     * @param {string} hashtags 
     */
    onHashtagsEdit(hashtags) {
        const hashtagList = "#" + hashtags.trim()
            .split(" ")
            .map(h =>  h.trim().replace("#", ""))
            .join(" #")
            .trim()
        ;
        this.setState({
            hashtags: hashtagList,
        })
    }
    /**
     * @param {boolean} isAdded 
     */
    onAddHashtagsToCaption(isAdded) {
        this.setState({
            hashtagsAddedToCaption: isAdded,
        });

        if (isAdded) {
            this.setState({
                caption: `${this.state.caption} ${this.state.hashtags}`,
            })
        } else {
            this.setState({
                caption: this.state.caption.replace(this.state.hashtags, "").trim(),
            })
        }
    }
    onImageEdit() {
        // TODO: Add android support
        ImagePickerIOS.openSelectDialog(
            {},
            imageUri => {
                this.setState({
                    imageUri,
                })
            },
            error => {/**/}
        )
    }
    onFocus() {
        this.setState({isFocused: true});
    }
    onEndEditing() {
        this.setState({ isFocused: false });
    }
    /**
     * @param {string} remindDate 
     */
    onDateChange(remindDate) {
        this.setState({
            remindDate,
        })
    }
    onSubmit() {
        const originalPost = this.props.navigation.state.params;
        /**
         * post: PropTypes.shape({
                url: PropTypes.string,
                avatar: PropTypes.string,
                date: PropTypes.string,
                caption: PropTypes.string,
                author: PropTypes.string,
                ready: PropTypes.bool,
            }),
         */

        const post = {
            url: this.state.imageUri || originalPost.url,
            avatar: originalPost.avatar,
            date: this.state.remindDate ? formatDate(this.state.remindDate) : originalPost.date,
            caption: this.state.caption,
            author: originalPost.author,
            ready: true,
        };

        this.props.onSubmitEdit(post, this.props.index);
        this.props.navigation.goBack()
    }
}

const mapStateToProps = state => ({
    index: getCurrentlyEditingIndex(state),
})

const mapDispatchToProps = {
    onSubmitEdit: submitEditPost,
};

export const EditPostConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditPost);
