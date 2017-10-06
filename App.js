import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Map, List } from "immutable";

import Main from "./src/components/main/Main";

const initialState = Map({
    posts: List(require("./src/data/images.json")),
});

const posts = (state = initialState, action) => {
    switch (action.type) {
        case "POST_PUBLISH":
            return state.set("posts", List([
                ...state.get("posts").slice(0, action.payload),
                ...state.get("posts").slice(action.payload + 1),
            ]));
        default:
            return state
    }
}

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(posts)}>
                <Main />
            </Provider>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
