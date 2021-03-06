import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 5,
        width: Dimensions.get('window').width / 4,
        padding: 15,
        backgroundColor: '#000',
        color: '#fff',
        borderWidth: 0.5,
        borderColor: 'rgb(35, 35, 35)',
        textAlign: 'center',
        borderRadius: 7,
    },
    buttonSpecials: {
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
