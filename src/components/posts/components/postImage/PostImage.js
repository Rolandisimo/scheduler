import React from "react";
import PropTypes from "prop-types";
import { Image, View } from "react-native";
import { connect } from "react-redux";
import FAIcon from "react-native-vector-icons/FontAwesome";

import { getPlaceholder } from "../../../../ducks/common";
import styles from "./styles";

export class PostImage extends React.PureComponent {
    static propTypes = {
        postUrl: PropTypes.string.isRequired,
        placeholder: PropTypes.number,
        editIcon: PropTypes.object,
    };
    render() {
        return (
            <View>
                { this.props.editIcon && this.props.editIcon}
                <Image
                    progressiveRenderingEnabled={true}
                    source={{ uri: this.props.postUrl }}
                    resizeMethod="resize"
                    resizeMode="cover"
                    style={styles.postImage}
                    defaultSource={this.props.placeholder} // TODO: Change to something decent
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    placeholder: getPlaceholder(state),
});

export const PostImageConnected = connect(mapStateToProps)(PostImage);
