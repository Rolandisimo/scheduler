import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import styles from "./styles";

export class Header extends React.PureComponent {
    render() {
        return (
            <View style={styles.header}>
                <Text>Logo</Text>
                <FAIcon
                    color="#1abc9c"
                    name="bars"
                    size={40}
                />
            </View>
        )
    }
}
