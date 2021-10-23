import React from 'react';
import Styles from './Styles';
import { View, Text } from 'react-native';

export default function DisplayDark(props) {
    return (
        <View style={Styles.display}>
            <Text style={Styles.textOperation} numberOfLines={1}>{props.value}</Text>
            <Text style={Styles.textResult} numberOfLines={1}>{props.result}</Text>
        </View>
    );
};
