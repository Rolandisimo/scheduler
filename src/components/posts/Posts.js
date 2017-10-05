import React from 'react';
import { FlatList, Text } from 'react-native';

import { Post } from "./components/post/Post";
import styles from "./styles";

const posts = require("../../data/images.json");

export class Posts extends React.Component {
    constructor(props) {
        super(props);

        this.renderPosts = this.renderPosts.bind(this);
        this.renderPostsKeys = this.renderPostsKeys.bind(this);
        this.handlePublish = this.handlePublish.bind(this);        
    }
    state = {
        posts,
    };
    render() {
        // TODO: Fix slow performance with many posts
        return (
            <FlatList
                style={styles.container}
                data={this.state.posts}
                keyExtractor={this.renderPostsKeys}
                renderItem={this.renderPosts}
            />
        );
    }
    /**
     * 
     * @param {{ url: string, author: string, avatar: string, date: string, caption: string, ready: boolean, }[]} posts 
     */
    renderPosts(item) {
        return <Post post={item.item} handlePublish={() => this.handlePublish(item.index)}/>;
    }
    renderPostsKeys(post) {
        return `${post.author}_${post.date}_${Math.random() * 10000}`;
    }
    /**
     * 
     * @param {number} i 
     */
    handlePublish(i) {
        const newPosts = [
            ...this.state.posts.slice(0, i),
            ...this.state.posts.slice(i+1),
        ];

        this.setState({
            posts: newPosts,
        })
    }
}
