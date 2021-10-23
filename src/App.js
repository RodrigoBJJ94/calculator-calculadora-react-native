import React, { useState } from 'react';
import Styles from './Styles';
import { View } from 'react-native';
import DisplayDark from './components/DisplayDark/DisplayDark';
import DisplayLight from './components/DisplayLight/DisplayLight';
import Themes from './components/Themes/Themes';
import Buttons from './components/Buttons/Buttons';

let states = { vScreen: '', vResult: 0, operated: false, point: false };

export default function App() {
  const [valueScreen, setValueScreen] = useState(states.vScreen);
  const [valueResult, setValueResult] = useState(states.vResult);
  const [color, setColor] = useState(true);

  const addDigit = (digit) => {
    if (digit === '*' || digit === '/' || digit === '+' || digit === '-') {
      states.point = false;
    };

    if (digit === '.' && !states.point) {
      states.point = true;
      states.operated = false;
    } else if (digit === '.' && states.point) {
      return;
    };

    if ((digit === '*' || digit === '/' || digit === '+' || digit === '-') && states.operated) {
      states.vScreen = states.vResult;
      states.vResult = 0;
    };

    states.vScreen = states.vScreen + digit;
    setValueScreen(states.vScreen);
    setValueResult(states.vResult);
    states.operated = false;
  };

  const cleanScreen = () => {
    states = { vScreen: '', vResult: 0, operated: false, point: false };
    setValueScreen(states.vScreen);
    setValueResult(states.vResult);
  };

  const operate = (opDigit) => {
    if (opDigit === 'AC') {
      cleanScreen();
      return;
    }

    if (opDigit === 'backspace') {
      states.vScreen = valueScreen.substring(0, (valueScreen.length - 1));
      setValueScreen(states.vScreen);
      return;
    }
    
    try {
      if ((states.vScreen.match('[%]')) && (states.vScreen.match('[-]'))) {
        let percent = states.vScreen.split('-');
        let percent2 = percent[1].substring(0, (percent[1].length - 1))
        let percent3 = Number(percent[0] / 100) * Number(percent2);
        let percent4 = Number(percent[0]) - Number(percent3);
        states.operated = true;
        setValueResult(percent4);
      } else if (states.vScreen.match('[%]')) {
        let percent5 = states.vScreen.split('+');
        let percent6 = percent5[1].substring(0, (percent5[1].length - 1))
        let percent7 = Number(percent5[0] / 100) * Number(percent6);
        let percent8 = Number(percent5[0]) + Number(percent7);
        states.operated = true;
        setValueResult(percent8);
      } else {
        states.vResult = eval(states.vScreen);
        states.operated = true;
        setValueResult(states.vResult);
      };

    } catch {
      states.vResult = 'Error';
      states.operated = true;
      setValueResult(states.vResult);
    };
  };

  return (
    <>
      <Themes color={color} setColor={setColor} />
      <View style={Styles.container}>
        {color ? <DisplayDark value={valueScreen} result={valueResult} />
          : <DisplayLight value={valueScreen} result={valueResult} />}
        <View style={color ? Styles.touch : Styles.touchLight}>
          <Buttons color={color} operate={operate} addDigit={addDigit} />
        </View>
      </View>
    </>
  );
};
