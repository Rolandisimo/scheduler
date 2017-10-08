import React from "react";
import {
    Text,
    View,
    Button,
} from "react-native";
import {
    DrawerNavigator,
    StackNavigator,
} from "react-navigation";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import FAIcon from "react-native-vector-icons/FontAwesome";

import reducer from "./src/ducks/common";
import { PostsConnected } from "./src/components/posts/Posts";
import { Header } from "./src/components/header/Header";
import { EditScreen } from "./src/components/edit-screen/EditScreen";
import styles from "./AppStyles";
import { Post } from "./src/components/posts/components/post/Post";
import { EditPost } from "./src/components/posts/components/editPost/EditPost";

const mapNavigationStateParamsToProps = (SomeComponent) => {
    return class extends React.Component {
        static navigationOptions = SomeComponent.navigationOptions; // better use hoist-non-react-statics
        render() {
            return (
                <View style={styles.container}>
                    <Header navigate={this.props.navigation.navigate} />
                    <SomeComponent {...this.props} />
                </View>
            )
        }
    }
}

const Stacks = StackNavigator({
    Posts: {
        screen: mapNavigationStateParamsToProps(PostsConnected),
        navigationOptions: {
            header: null,
        },
    },
    EditPost: {
        screen: EditPost,
        navigationOptions:  ({ navigation }) => { // For more complex titles, options
            return {
                title: "Edit post",
            };
        },
    },
});

export const Drawer = DrawerNavigator({
    Posts: {
        screen: Stacks,
        navigationOptions: {
            drawerLabel: "Posts",
            drawerIcon: () => <FAIcon name="user" />,
        },
    },
    Edit: {
        screen: mapNavigationStateParamsToProps(EditScreen),
        navigationOptions: {
            drawerLabel: "Edit",
            drawerIcon: () => <FAIcon name="pencil" />,
        },
    },
});

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <Drawer />
            </Provider>
        );
    }
}

