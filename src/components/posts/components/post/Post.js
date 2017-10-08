import React  from "react";
import PropTypes from "prop-types";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome"

import { PostStatus } from "../postStatus/PostStatus";
import { PostImageConnected } from "../postImage/PostImage";
import { PostBody } from "../postBody/PostBody";
import styles from "./styles";
  
export class Post extends React.Component {
    static propTypes = {
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
    render() {
        const { navigation: { state: { params } } } = this.props
        const post = params || this.props.post;

        return (
            <TouchableOpacity
                style={styles.post}
                activeOpacity={.8}
                onPress={() => this.props.navigation.navigate("EditPost", post)}
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
}
