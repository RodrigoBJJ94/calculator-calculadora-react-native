import React from 'react';
import Styles from './Styles';
import { Text, TouchableOpacity } from 'react-native';

export default function setLight({ operation, cleaner, backspace, equal, double, click, label }) {
    const stylesButtons = [Styles.button];

    if (operation || cleaner || backspace) {
        stylesButtons.push(Styles.buttonSpecials)
    };

    if (equal) {
        stylesButtons.push(Styles.buttonEqual)
    };

    if (double) {
        stylesButtons.push(Styles.buttonDouble)
    };

    return (
        <TouchableOpacity onPress={click}>
            <Text style={stylesButtons}>{label}</Text>
        </TouchableOpacity>
    );
};
