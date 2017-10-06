import React from "react";
import { View } from "react-native";

import { PostsConnected } from "../posts/Posts";
import { HeaderConnected } from "../header/Header";
import { MenuConnected } from "../menu/Menu";
import styles from "./styles";

export default class Main extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <HeaderConnected />
                <PostsConnected />
                <MenuConnected />
            </View>
        );
    }
}
