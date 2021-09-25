import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default props => {
    const stylesButtons = [styles.button];
    if (props.operation) {
        stylesButtons.push(styles.buttonOperation)
    }
    if (props.cleaner) {
        stylesButtons.push(styles.buttonCleaner)
    }
    if (props.backspace) {
        stylesButtons.push(styles.buttonBackspace)
    }
    if (props.equal) {
        stylesButtons.push(styles.buttonEqual)
    }
    if (props.double) {
        stylesButtons.push(styles.buttonDouble)
    }

    return (
        <TouchableOpacity
        onPress={props.click}
        ><Text style={stylesButtons}>{props.label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 5,
        width: Dimensions.get('window').width / 4,
        padding: 12,
        backgroundColor: 'black',
        color: 'white',
        borderWidth: 0.5,
        borderColor: 'rgb(35, 35, 35)',
        textAlign: 'center',
        borderRadius: 7,
    },
    buttonOperation: {
        backgroundColor: 'rgb(134, 38, 230)',
    },
    buttonCleaner: {
        backgroundColor: 'rgb(134, 38, 230)',
    },
    buttonBackspace: {
        backgroundColor: 'rgb(134, 38, 230)',
    },
    buttonEqual: {
        backgroundColor: 'rgb(255, 103, 38)',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) / 2,
        paddingLeft: 0,
        paddingRight: 0,
    }
});