import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function setLight(props) {
    const stylesButtons = [styles.button];
    if (props.operation) {
        stylesButtons.push(styles.buttonSpecials)
    };
    if (props.cleaner) {
        stylesButtons.push(styles.buttonSpecials)
    };
    if (props.backspace) {
        stylesButtons.push(styles.buttonSpecials)
    }
    if (props.equal) {
        stylesButtons.push(styles.buttonEqual)
    };
    if (props.double) {
        stylesButtons.push(styles.buttonDouble)
    };

    return (
        <TouchableOpacity onPress={props.click}>
            <Text style={stylesButtons}>{props.label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 5,
        width: Dimensions.get('window').width / 4,
        padding: 12,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 0.5,
        borderColor: 'rgb(248, 248, 248)',
        textAlign: 'center',
        borderRadius: 7,
    },
    buttonSpecials: {
        backgroundColor: 'rgb(168, 211, 255)',
    },
    buttonEqual: {
        backgroundColor: 'rgb(255, 155, 55)',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) / 2,
        paddingLeft: 0,
        paddingRight: 0,
    }
});