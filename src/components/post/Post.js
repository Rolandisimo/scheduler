import React, { PropTypes } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome'

import styles from "./styles";

export class Post extends React.Component {
    static propTypes = {
        post: PropTypes.shape({
            url: PropTypes.string,
            avatar: PropTypes.string,
            date: PropTypes.string,
            caption: PropTypes.string,
            author: PropTypes.string,
            ready: PropTypes.bool,
        }),
        handlePublish: PropTypes.func,
    };
    render() {
        const { post } = this.props;
        const buttonOpacity = post.ready ? 1 : .2;
        return (
            <TouchableOpacity
                style={styles.post}
                activeOpacity={.8}
            >
                <View style={styles.postStatus}>
                    <Text style={styles.smallTitle}>
                        Status:
                        {" "}
                        <FAIcon
                            color={ post.ready ? "#1abc9c" : "#f39c12" }
                            name={ post.ready ? "check" : "close" }
                            size={22}
                            onPress={this.toggleOpen}
                        />
                    </Text>
                    <TouchableOpacity
                        style={[styles.buttonMain, { opacity: buttonOpacity}]}
                        onPress={post.ready ? this.props.handlePublish : null}
                    >
                        <Text>Publish post</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={{ uri: post.url }}
                    resizeMethod="resize"
                    resizeMode="cover"
                    style={styles.postImage}
                />
                <View style={styles.infoWrapper}>
                    <View style={styles.infoHeader}>
                        <Image
                            source={{ uri: post.avatar }}
                            resizeMethod="resize"
                            resizeMode="cover"
                            style={styles.avatar}
                        />
                        <Text >{post.author}</Text>
                        <Text>{post.date}</Text>
                    </View>
                    <View
                        style={styles.breakline}
                    />
                    <Text style={styles.infoBody}>{post.caption}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
