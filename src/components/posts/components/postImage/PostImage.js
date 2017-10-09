import React from "react";
import PropTypes from "prop-types";
import { Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import FAIcon from "react-native-vector-icons/FontAwesome";

import { getPlaceholder } from "../../../../ducks/common";
import styles from "./styles";

export class PostImage extends React.PureComponent {
    static propTypes = {
        postUrl: PropTypes.string.isRequired,
        placeholder: PropTypes.number.isRequired,
        editIcon: PropTypes.object,
        onPress: PropTypes.func,
    };
    render() {
        const {
            postUrl,
            placeholder,
            editIcon,
            onPress,
        } = this.props;

        if (editIcon) {
            return (
                <TouchableOpacity
                    onPress={onPress ? onPress : null}
                    activeOpacity={.8}
                >
                    { editIcon && editIcon}
                    <Image
                        progressiveRenderingEnabled={true}
                        source={{ uri: postUrl }}
                        resizeMethod="resize"
                        resizeMode="cover"
                        style={[styles.postImage, { height: 200 } ]}
                        defaultSource={placeholder} // TODO: Change to something decent
                    />
                </TouchableOpacity>
            );
        } else {
            return (
                <Image
                    progressiveRenderingEnabled={true}
                    source={{ uri: postUrl }}
                    resizeMethod="resize"
                    resizeMode="cover"
                    style={styles.postImage}
                    defaultSource={placeholder} // TODO: Change to something decent
                />
            );
        }
    }
}

const mapStateToProps = state => ({
    placeholder: getPlaceholder(state),
});

export const PostImageConnected = connect(mapStateToProps)(PostImage);
