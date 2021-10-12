import React from 'react';
import Styles from './Styles';
import { Text, TouchableOpacity } from 'react-native';

export default function setDark(props) {
    const stylesButtons = [Styles.button];
    if (props.operation) {
        stylesButtons.push(Styles.buttonSpecials)
    };
    if (props.cleaner) {
        stylesButtons.push(Styles.buttonSpecials)
    };
    if (props.backspace) {
        stylesButtons.push(Styles.buttonSpecials)
    };
    if (props.equal) {
        stylesButtons.push(Styles.buttonEqual)
    };
    if (props.double) {
        stylesButtons.push(Styles.buttonDouble)
    };

    return (
        <TouchableOpacity onPress={props.click}>
            <Text style={stylesButtons}>{props.label}</Text>
        </TouchableOpacity>
    );
};
