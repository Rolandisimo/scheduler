import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/ducks/common";

import Main from "./src/components/main/Main";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
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
