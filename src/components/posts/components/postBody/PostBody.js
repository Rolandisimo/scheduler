import React, { PropTypes } from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

import { BreakLine } from "../../../break-line/BreakLine";;

import styles from "./styles";

export class PostBody extends React.PureComponent {
    static propTypes = {
        postAvatar: PropTypes.string,
        postAuthor: PropTypes.string,
        postDate: PropTypes.string,
        postCaption: PropTypes.string,
    };
    render() {
        const {
            postAvatar,
            postAuthor,
            postDate,
            postCaption,
        } = this.props;
        return (
            <View style={styles.infoWrapper}>
                <View style={styles.infoHeader}>
                    <Image
                        source={{ uri: postAvatar }}
                        resizeMethod="resize"
                        resizeMode="cover"
                        style={styles.avatar}
                    />
                    <Text >{postAuthor}</Text>
                    <Text>{postDate}</Text>
                </View>
                <BreakLine />
                <Text style={styles.infoBody}>{postCaption}</Text>
            </View>
        );
    }
}
