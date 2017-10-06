import React from 'react';
import { VirtualizedList, Text } from 'react-native';
import { connect } from "react-redux";

import { Post } from "./components/post/Post";
import {
    publishPost,
    getPosts,
} from "../../ducks/posts";

import styles from "./styles";

export class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.renderPosts = this.renderPosts.bind(this);
        this.renderPostsKeys = this.renderPostsKeys.bind(this);
        this.getItemCount = this.getItemCount.bind(this);
        this.getItem = this.getItem.bind(this);
    }
    render() {
        // TODO: Fix slow performance with many posts
        return (
            <VirtualizedList
                style={styles.container}
                data={this.props.posts}
                keyExtractor={this.renderPostsKeys}
                renderItem={this.renderPosts}
                getItemCount={this.getItemCount}
                getItem={this.getItem}
            />
        );
    }
    /**
     * 
     * @param {{ url: string, author: string, avatar: string, date: string, caption: string, ready: boolean, }[]} posts 
     */
    renderPosts(item) {
        return <Post post={item.item} handlePublish={() => this.props.handlePublish(item.index)}/>;
    }
    renderPostsKeys(post) {
        return `${post.author}_${post.date}_${Math.random() * 10000}`;
    }
    getItemCount(data) {
        return data.size;
    }
    getItem(data, i) {
        return data.get(i);
    }
}

const mapStateToProps = (state) => ({
    posts: getPosts(state),
});

const mapDispatchToProps = {
    handlePublish: publishPost,
}

export const PostsConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Posts)
