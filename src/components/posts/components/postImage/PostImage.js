import React, { PropTypes } from 'react';
import { Image } from 'react-native';
import { connect } from "react-redux";

import { getPlaceholder } from "../../../../ducks/common";
import styles from "./styles";

export class PostImage extends React.PureComponent {
    static propTypes = {
        postUrl: PropTypes.string,
        placeholder: PropTypes.number,
    };
    render() {
        return (
            <Image
                source={{ uri: this.props.postUrl }}
                resizeMethod="resize"
                resizeMode="cover"
                style={styles.postImage}
                defaultSource={this.props.placeholder} // TODO: Change to something decent
            />
        );
    }
}

const mapStateToProps = state => ({
    placeholder: getPlaceholder(state),
});

export const PostImageConnected = connect(mapStateToProps)(PostImage);
