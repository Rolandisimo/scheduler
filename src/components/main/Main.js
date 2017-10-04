import React from 'react';
import {
    Text,
    View,
    ScrollView, // Should be FlatList for perf
    Dimensions,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import { Post } from "../post/Post";
import styles from "./styles";

const logo = require("../../assets/images/logo.png");
const posts = require("../../data/images.json");

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.renderPosts = this.renderPosts.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
    }
    state = {
        posts,
    };
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Logo</Text>
                <FAIcon
                    color="#1abc9c"
                    name="bars"
                    size={40}
                    onPress={this.toggleOpen}
                />
            </View>
            <ScrollView style={{ flexDirection: "column"}}>
                {this.renderPosts(this.state.posts)}
            </ScrollView>
        </View>
        );
    }
    /**
     * 
     * @param {{ url: string, author: string, avatar: string, date: string, caption: string, ready: boolean, }[]} posts 
     */
    renderPosts(posts) {
        return posts.map((post, i) => {       
            return <Post key={i} post={post} handlePublish={() => this.handlePublish(i)}/>
        });
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
