import React from 'react';
import { View } from 'react-native';

import { generalStyles } from "../main/styles";

export class BreakLine extends React.PureComponent {
    render() {
        return (
            <View
                style={generalStyles.breakline}
            />
        );
    }
}
