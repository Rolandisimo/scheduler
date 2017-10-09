import React  from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome"
import { connect } from "react-redux";

import { setCurrentlyEditingIndex } from "../../../../ducks/common";
import { PostStatus } from "../postStatus/PostStatus";
import { PostImageConnected } from "../postImage/PostImage";
import { PostBody } from "../postBody/PostBody";
import styles from "./styles";
  
export class Post extends React.Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        post: PropTypes.shape({
            url: PropTypes.string,
            avatar: PropTypes.string,
            date: PropTypes.string,
            caption: PropTypes.string,
            author: PropTypes.string,
            ready: PropTypes.bool,
        }),
        handlePublish: PropTypes.func,
    };
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }
    shouldComponentUpdate(nextProps) {
        const postOld = this.props.post;
        const postNew = nextProps.post;
        return false
            || postOld.url !== postNew.url
            || postOld.date !== postNew.date
            || postOld.caption !== postNew.caption
            || postOld.ready !== postNew.ready
        ;
    }
    render() {
        const { navigation: { state: { params } } } = this.props
        const post = params || this.props.post;

        return (
            <TouchableOpacity
                style={styles.post}
                activeOpacity={.8}
                onPress={this.onPress}
            >
                <PostStatus
                    postReady={post.ready}
                    handlePublish={this.props.handlePublish}
                />
                <PostImageConnected postUrl={post.url} />
                <PostBody
                    postAvatar={post.avatar}
                    postAuthor={post.author}
                    postDate={post.date}
                    postCaption={post.caption}
                />
            </TouchableOpacity>
        );
    }
    onPress() {
        this.props.setCurrentlyEditingIndex(this.props.index);
        this.props.navigation.navigate(
            "EditPost",
            this.props.navigation.state.params || this.props.post,
        );
    }
}

const mapDispatchToProps = {
    setCurrentlyEditingIndex,
};

export const PostConnected = connect(
    undefined,
    mapDispatchToProps,
)(Post);
