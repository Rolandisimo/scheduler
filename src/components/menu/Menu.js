import {
    Text,
    View,
    Dimensions,
    Animated,
    Button,
} from "react-native";
import React, { PropTypes } from "react";
import { connect } from "react-redux";
import FAIcon from "react-native-vector-icons/FontAwesome";

import {
    getMenuState,
    toggleMenu,
} from "../../ducks/common";
import styles from "./styles";

// TODO: Move device dimensions to state
const deviceWidth = Dimensions.get("window").width;
let offset = new Animated.Value(deviceWidth);

export class Menu extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string,
    };
    render() {
        Animated.timing(
            offset,
            {
                toValue: this.props.isOpen ? 0 : deviceWidth,
                duration: 500,
            }
        ).start();

        const combinedStyles = [
            styles.container,
            { transform: [{ translateX: offset }] },
        ];
        
        return (
            // TODO: Add navigation 
            <Animated.View
                style={combinedStyles}
            >
                <FAIcon
                    style={{ position: "absolute", top: 0, right: 0, padding: 10 }}
                    color="rgba(255, 255, 255, .7)"
                    name="times"
                    size={30}
                    onPress={this.props.toggleMenu}
                />
                <Text style={styles.item}>Home</Text>
                <Text style={styles.item}>Posts</Text>
                <Text style={styles.item}>Profile</Text>
                <Text style={styles.item}>Statistics</Text>
            </Animated.View>
        );
    }
}

const mapStateToProps = state => ({
    isOpen: getMenuState(state),
})
const mapDispatchToProps = {
    toggleMenu,
}

export const MenuConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Menu); 
