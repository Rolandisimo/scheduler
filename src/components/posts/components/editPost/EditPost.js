import React from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    Switch,
} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome"
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { PostStatus } from "../postStatus/PostStatus";
import { PostImageConnected } from "../postImage/PostImage";
import { PostBody } from "../postBody/PostBody";
import styles from "./styles";
  
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
    };
    state = {
        caption: this.props.navigation.state.params.caption,
        hashtags: "",
        hashtagsAddedToCaption: false,
    };
    constructor(props) {
        super(props);

        this.handleHashtagsEdit = this.handleHashtagsEdit.bind(this);
        this.handleCaptionEdit = this.handleCaptionEdit.bind(this);
        this.handleAddHashtagsToCaption = this.handleAddHashtagsToCaption.bind(this);
    }
    render() {
        const { navigation: { state: { params } } } = this.props
        const EditIcon = (
            <FAIcon
                name="pencil"
                style={styles.editIcon}
                color="rgba(189, 195, 199, .8)"
                size={45}
            />
        ); 

        return (
            <ScrollView style={styles.post}>
                <PostImageConnected
                    postUrl={params.url}
                    editIcon={EditIcon}
                />
                <View style={styles.formGroup}>
                    <Text style={styles.label}>
                        Hashtags
                    </Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={""}
                        placeholder="#wow Amazing hashtag #yolo"
                        onChangeText={this.handleHashtagsEdit}
                        autoCorrect={false}
                        autoCapitalize="none"
                        returnKeyType="done"
                    />
                    <View style={styles.formGroupSub}>
                        <Text style={styles.label}>
                            Append to caption
                            {" "}
                        </Text>
                        <Switch
                            value={this.state.hashtagsAddedToCaption}
                            onValueChange={this.handleAddHashtagsToCaption}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Caption</Text>
                    <TextInput
                        defaultValue={params.caption}
                        placeholder="Posts' caption"
                        onChangeText={this.handleCaptionEdit}
                        autoCorrect={false}
                        multiline={true}
                        style={styles.input}
                        value={this.state.caption}
                    />
                </View>
                <KeyboardSpacer />
            </ScrollView>
        );
    }
    /**
     * 
     * @param {string} caption 
     */
    handleCaptionEdit(caption) {
        this.setState({
            caption,
        })
    }
    /**
     * 
     * @param {string} hashtags 
     */
    handleHashtagsEdit(hashtags) {
        const hashtagList = "#" + hashtags
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
     * 
     * @param {boolean} isAdded 
     */
    handleAddHashtagsToCaption(isAdded) {
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
}
