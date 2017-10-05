import React, { PropTypes } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome'

import { PostStatus } from "../postStatus/PostStatus";
import { PostImage } from "../postImage/PostImage";
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
        const {
            post,
            handlePublish,
        } = this.props;
        return (
            <TouchableOpacity
                style={styles.post}
                activeOpacity={.8}
            >
                <PostStatus
                    postReady={post.ready}
                    handlePublish={handlePublish}
                />
                <PostImage postUrl={post.url} />
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
