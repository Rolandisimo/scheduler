import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export default StyleSheet.create({
    postImage: {
        flex: 1,
        height: (Dimensions.get("window").height / 1.5),
    },
});