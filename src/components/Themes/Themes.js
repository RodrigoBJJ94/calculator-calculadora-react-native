import React from 'react';
import Styles from './Styles';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

export default function Themes({ color, setColor }) {
  return (
    <View style={color ? Styles.selectThemeDark : Styles.selectThemeLight}>
      {color ? <StatusBar backgroundColor="rgb(134, 38, 230)" /> : <StatusBar backgroundColor="rgb(168, 211, 255)" />}
      <View style={Styles.viewThemes}>
        <TouchableOpacity onPress={() => setColor(true)}>
          <Text style={Styles.dark}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setColor(false)}>
          <Text style={Styles.light}>Light</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
