import React from 'react';
import Styles from './Styles';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

export default function Themes(props) {
  return (
    <View style={props.color ? Styles.selectThemeDark : Styles.selectThemeLight}>
      {props.color ? <StatusBar backgroundColor="rgb(134, 38, 230)" /> : <StatusBar backgroundColor="rgb(168, 211, 255)" />}
      <View style={Styles.viewThemes}>
        <TouchableOpacity onPress={() => props.setColor(true)}>
          <Text style={Styles.dark}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.setColor(false)}>
          <Text style={Styles.light}>Light</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
