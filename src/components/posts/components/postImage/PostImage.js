import React, { PropTypes } from 'react';
import { Image } from 'react-native';

import styles from "./styles";

export class PostImage extends React.PureComponent {
    static propTypes = {
        postUrl: PropTypes.string,
    };
    render() {
        return (
            <Image
                source={{ uri: this.props.postUrl }}
                resizeMethod="resize"
                resizeMode="cover"
                style={styles.postImage}
            />
        );
    }
}
