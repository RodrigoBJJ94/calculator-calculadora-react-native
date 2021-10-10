import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DisplayLight(props) {
    return (
        <View style={styles.display}>
            <Text
                style={styles.textOperation}
                numberOfLines={1}
            >{props.value}</Text>
            <Text
                style={styles.textResult}
                numberOfLines={1}
            >{props.result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    display: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
        padding: 20,
        width: '100%',
    },
    textResult: {
        fontSize: 50,
        color: '#000',
    },
    textOperation: {
        fontSize: 35,
        color: '#000',
    },
});
