import React, { PropTypes } from "react";
import {
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import FAIcon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";
import { generalStyles } from "../../../../../AppStyles";

export class PostStatus extends React.PureComponent {
    static propTypes = {
        postReady: PropTypes.bool,
        handlePublish: PropTypes.func,
    };
    render() {
        const { postReady } = this.props;
        const buttonOpacity = postReady ? 1 : .2;
        return (
            <View style={styles.postStatus}>
                <Text style={generalStyles.smallTitle}>
                    Status:
                    {" "}
                    <FAIcon
                        color={ postReady ? "#1abc9c" : "#f39c12" }
                        name={ postReady ? "check" : "close" }
                        size={22}
                    />
                </Text>
                <TouchableOpacity
                    style={[generalStyles.buttonMain, { opacity: buttonOpacity}]}
                    onPress={postReady ? this.props.handlePublish : null}
                >
                    <Text>Publish post</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
