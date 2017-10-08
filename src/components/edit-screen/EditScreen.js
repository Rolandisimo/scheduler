import React from "react";
import {
    View,
    Text,
} from "react-native";

import styles from "./styles";

export class EditScreen extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text>Edit screen</Text>
            </View>
        );
    }
}
