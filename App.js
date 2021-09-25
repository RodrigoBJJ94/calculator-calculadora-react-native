import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Display from './components/Display';
import Button from './components/Button';
import Button2 from './components/Button2';
import Display2 from './components/Display2';

let states = {
  vScreen: '',
  vResult: 0,
  operated: false,
  point: false,
};

export default function App() {
  const [valueScreen, setValueScreen] = useState(states.vScreen);
  const [valueResult, setValueResult] = useState(states.vResult);
  const [color, setColor] = useState(true);

  const addDigit = (digit) => {
    if (digit === '*' || digit === '/' || digit === '+' || digit === '-') {
      states.point = false;
      states.more = false;
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
    states = {
      vScreen: '',
      vResult: 0,
      operated: false,
      point: false,
    };
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
      if ((states.vScreen.match(`[%]`)) && (states.vScreen.match(`[-]`))) {
        let percent = states.vScreen.split('-');
        let percent2 = percent[1].substring(0, (percent[1].length - 1))
        let percent3 = Number(percent[0] / 100) * Number(percent2);
        let percent4 = Number(percent[0]) - Number(percent3);
        states.operated = true;
        setValueResult(percent4);
      } else if (states.vScreen.match(`[%]`)) {
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
      }

    } catch {
      states.vResult = 'Error';
      states.operated = true;
      setValueResult(states.vResult);
    }
  }

  return (
    <>
      <View style={color ? styles.selectTheme : styles.selectThemeLight}>
        <StatusBar backgroundColor="#000" />
        <TouchableOpacity
          onPress={() => setColor(true)}
        >
          <Text style={{ fontSize: 24, color: 'grey', marginRight: 250 }}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setColor(false)}
        >
          <Text style={{ fontSize: 24, color: 'grey' }}>Light</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {color ? <Display value={valueScreen} result={valueResult} />
          : <Display2 value={valueScreen} result={valueResult} />}
        <View style={color ? styles.touch : styles.touchLight}>
          {color ? <Button label='C' cleaner click={() => { operate('AC') }} />
            : <Button2 label='C' cleaner click={() => { operate('AC') }} />}
          {color ? <Button label='⌫' backspace click={() => { operate('backspace') }} />
            : <Button2 label='⌫' backspace click={() => { operate('backspace') }} />}
          {color ? <Button label='%' operation click={() => { addDigit('%') }} />
            : <Button2 label='%' operation click={() => { addDigit('%') }} />}
          {color ? <Button label='÷' operation click={() => { addDigit('/') }} />
            : <Button2 label='÷' operation click={() => { addDigit('/') }} />}
          {color ? <Button label='7' click={() => { addDigit('7') }} />
            : <Button2 label='7' click={() => { addDigit('7') }} />}
          {color ? <Button label='8' click={() => { addDigit('8') }} />
            : <Button2 label='8' click={() => { addDigit('8') }} />}
          {color ? <Button label='9' click={() => { addDigit('9') }} />
            : <Button2 label='9' click={() => { addDigit('9') }} />}
          {color ? <Button label='x' operation click={() => { addDigit('*') }} />
            : <Button2 label='x' operation click={() => { addDigit('*') }} />}
          {color ? <Button label='4' click={() => { addDigit('4') }} />
            : <Button2 label='4' click={() => { addDigit('4') }} />}
          {color ? <Button label='5' click={() => { addDigit('5') }} />
            : <Button2 label='5' click={() => { addDigit('5') }} />}
          {color ? <Button label='6' click={() => { addDigit('6') }} />
            : <Button2 label='6' click={() => { addDigit('6') }} />}
          {color ? <Button label='-' operation click={() => { addDigit('-') }} />
            : <Button2 label='-' operation click={() => { addDigit('-') }} />}
          {color ? <Button label='1' click={() => { addDigit('1') }} />
            : <Button2 label='1' click={() => { addDigit('1') }} />}
          {color ? <Button label='2' click={() => { addDigit('2') }} />
            : <Button2 label='2' click={() => { addDigit('2') }} />}
          {color ? <Button label='3' click={() => { addDigit('3') }} />
            : <Button2 label='3' click={() => { addDigit('3') }} />}
          {color ? <Button label='+' operation click={() => { addDigit('+') }} />
            : <Button2 label='+' operation click={() => { addDigit('+') }} />}
          {color ? <Button label='(' double click={() => { addDigit('(') }} />
            : <Button2 label='(' double click={() => { addDigit('(') }} />}
          {color ? <Button label=')' double click={() => { addDigit(')') }} />
            : <Button2 label=')' double click={() => { addDigit(')') }} />}
          {color ? <Button label='0' click={() => { addDigit('0') }} />
            : <Button2 label='0' click={() => { addDigit('0') }} />}
          {color ? <Button label='.' click={() => { addDigit('.') }} />
            : <Button2 label='.' click={() => { addDigit('.') }} />}
          {color ? <Button label='=' equal click={() => { operate('=') }} />
            : <Button2 label='=' equal click={() => { operate('=') }} />}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  touch: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgb(0, 0, 0)',
  },
  touchLight: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
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