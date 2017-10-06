import React from 'react';
import { View } from 'react-native';

import { PostsConnected } from "../posts/Posts";
import { Header } from "../header/Header";
import styles from "./styles";

export default class Main extends React.PureComponent {
    render() {
        return (
        <View style={styles.container}>
            <Header />
            <PostsConnected />
        </View>
        );
    }
}
