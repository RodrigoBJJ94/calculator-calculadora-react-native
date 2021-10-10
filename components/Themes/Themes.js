import React from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

export default function Themes(props) {
  return (
    <View style={props.color ? styles.selectThemeDark : styles.selectThemeLight}>
      {props.color ? <StatusBar backgroundColor="rgb(134, 38, 230)" /> : <StatusBar backgroundColor="rgb(168, 211, 255)" />}
      <View style={styles.viewThemes}>
        <TouchableOpacity onPress={() => props.setColor(true)}>
          <Text style={styles.dark}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setColor(false)}>
          <Text style={styles.light}>Light</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectThemeDark: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#000'
  },
  selectThemeLight: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#fff',
  },
  viewThemes: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dark: {
    fontSize: 22,
    color: '#777',
    marginRight: 200,
  },
  light: {
    fontSize: 22,
    color: '#777',
  }
});
