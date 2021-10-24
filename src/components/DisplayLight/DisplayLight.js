import React from 'react';
import Styles from './Styles';
import { View, Text } from 'react-native';

export default function DisplayLight({ value, result }) {
    return (
        <View style={Styles.display}>
            <Text style={Styles.textOperation} numberOfLines={1}>{value}</Text>
            <Text style={Styles.textResult} numberOfLines={1}>{result}</Text>
        </View>
    );
};
