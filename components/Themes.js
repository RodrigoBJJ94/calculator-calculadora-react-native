import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

export default function Themes(props) {
    return (
        <View style={props.color ? styles.selectTheme : styles.selectThemeLight}>
        <StatusBar backgroundColor="#000" />
        <TouchableOpacity
          onPress={() => props.setColor(true)}
        >
          <Text style={{ fontSize: 24, color: 'grey', marginRight: 250 }}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.setColor(false)}
        >
          <Text style={{ fontSize: 24, color: 'grey' }}>Light</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    selectTheme: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: 'rgb(0, 0, 0)'
      },
      selectThemeLight: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: 'rgb(255, 255, 255)',
      },
});