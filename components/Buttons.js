import React from 'react';
import ButtonDark from './ButtonDark';
import ButtonLight from './ButtonLight';

export default function Buttons(props) {
    return (
        <>
            {props.color ? <ButtonDark label='C' cleaner click={() => { props.operate('AC') }} />
                : <ButtonLight label='C' cleaner click={() => { props.operate('AC') }} />}
            {props.color ? <ButtonDark label='⌫' backspace click={() => { props.operate('backspace') }} />
                : <ButtonLight label='⌫' backspace click={() => { props.operate('backspace') }} />}
            {props.color ? <ButtonDark label='%' operation click={() => { props.addDigit('%') }} />
                : <ButtonLight label='%' operation click={() => { props.addDigit('%') }} />}
            {props.color ? <ButtonDark label='÷' operation click={() => { props.addDigit('/') }} />
                : <ButtonLight label='÷' operation click={() => { props.addDigit('/') }} />}
            {props.color ? <ButtonDark label='7' click={() => { props.addDigit('7') }} />
                : <ButtonLight label='7' click={() => { props.addDigit('7') }} />}
            {props.color ? <ButtonDark label='8' click={() => { props.addDigit('8') }} />
                : <ButtonLight label='8' click={() => { props.addDigit('8') }} />}
            {props.color ? <ButtonDark label='9' click={() => { props.addDigit('9') }} />
                : <ButtonLight label='9' click={() => { props.addDigit('9') }} />}
            {props.color ? <ButtonDark label='x' operation click={() => { props.addDigit('*') }} />
                : <ButtonLight label='x' operation click={() => { props.addDigit('*') }} />}
            {props.color ? <ButtonDark label='4' click={() => { props.addDigit('4') }} />
                : <ButtonLight label='4' click={() => { props.addDigit('4') }} />}
            {props.color ? <ButtonDark label='5' click={() => { props.addDigit('5') }} />
                : <ButtonLight label='5' click={() => { props.addDigit('5') }} />}
            {props.color ? <ButtonDark label='6' click={() => { props.addDigit('6') }} />
                : <ButtonLight label='6' click={() => { props.addDigit('6') }} />}
            {props.color ? <ButtonDark label='-' operation click={() => { props.addDigit('-') }} />
                : <ButtonLight label='-' operation click={() => { props.addDigit('-') }} />}
            {props.color ? <ButtonDark label='1' click={() => { props.addDigit('1') }} />
                : <ButtonLight label='1' click={() => { props.addDigit('1') }} />}
            {props.color ? <ButtonDark label='2' click={() => { props.addDigit('2') }} />
                : <ButtonLight label='2' click={() => { props.addDigit('2') }} />}
            {props.color ? <ButtonDark label='3' click={() => { props.addDigit('3') }} />
                : <ButtonLight label='3' click={() => { props.addDigit('3') }} />}
            {props.color ? <ButtonDark label='+' operation click={() => { props.addDigit('+') }} />
                : <ButtonLight label='+' operation click={() => { props.addDigit('+') }} />}
            {props.color ? <ButtonDark label='(' double click={() => { props.addDigit('(') }} />
                : <ButtonLight label='(' double click={() => { props.addDigit('(') }} />}
            {props.color ? <ButtonDark label=')' double click={() => { props.addDigit(')') }} />
                : <ButtonLight label=')' double click={() => { props.addDigit(')') }} />}
            {props.color ? <ButtonDark label='0' click={() => { props.addDigit('0') }} />
                : <ButtonLight label='0' click={() => { props.addDigit('0') }} />}
            {props.color ? <ButtonDark label='.' click={() => { props.addDigit('.') }} />
                : <ButtonLight label='.' click={() => { props.addDigit('.') }} />}
            {props.color ? <ButtonDark label='=' equal click={() => { props.operate('=') }} />
                : <ButtonLight label='=' equal click={() => { props.operate('=') }} />}
        </>
    );
};