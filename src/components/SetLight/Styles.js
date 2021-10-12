import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 5,
        width: Dimensions.get('window').width / 4,
        padding: 12,
        backgroundColor: '#fff',
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
