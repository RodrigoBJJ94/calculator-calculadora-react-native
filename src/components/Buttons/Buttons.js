import React from 'react';
import SetDark from '../SetDark/SetDark';
import SetLight from '../SetLight/SetLight';

export default function Buttons({ color, operate, addDigit }) {
    return (
        <>
            {color ? <SetDark label='C' cleaner click={() => { operate('AC') }} />
                : <SetLight label='C' cleaner click={() => { operate('AC') }} />}
            {color ? <SetDark label='⌫' backspace click={() => { operate('backspace') }} />
                : <SetLight label='⌫' backspace click={() => { operate('backspace') }} />}
            {color ? <SetDark label='%' operation click={() => { addDigit('%') }} />
                : <SetLight label='%' operation click={() => { addDigit('%') }} />}
            {color ? <SetDark label='÷' operation click={() => { addDigit('/') }} />
                : <SetLight label='÷' operation click={() => { addDigit('/') }} />}
            {color ? <SetDark label='7' click={() => { addDigit('7') }} />
                : <SetLight label='7' click={() => { addDigit('7') }} />}
            {color ? <SetDark label='8' click={() => { addDigit('8') }} />
                : <SetLight label='8' click={() => { addDigit('8') }} />}
            {color ? <SetDark label='9' click={() => { addDigit('9') }} />
                : <SetLight label='9' click={() => { addDigit('9') }} />}
            {color ? <SetDark label='x' operation click={() => { addDigit('*') }} />
                : <SetLight label='x' operation click={() => { addDigit('*') }} />}
            {color ? <SetDark label='4' click={() => { addDigit('4') }} />
                : <SetLight label='4' click={() => { addDigit('4') }} />}
            {color ? <SetDark label='5' click={() => { addDigit('5') }} />
                : <SetLight label='5' click={() => { addDigit('5') }} />}
            {color ? <SetDark label='6' click={() => { addDigit('6') }} />
                : <SetLight label='6' click={() => { addDigit('6') }} />}
            {color ? <SetDark label='-' operation click={() => { addDigit('-') }} />
                : <SetLight label='-' operation click={() => { addDigit('-') }} />}
            {color ? <SetDark label='1' click={() => { addDigit('1') }} />
                : <SetLight label='1' click={() => { addDigit('1') }} />}
            {color ? <SetDark label='2' click={() => { addDigit('2') }} />
                : <SetLight label='2' click={() => { addDigit('2') }} />}
            {color ? <SetDark label='3' click={() => { addDigit('3') }} />
                : <SetLight label='3' click={() => { addDigit('3') }} />}
            {color ? <SetDark label='+' operation click={() => { addDigit('+') }} />
                : <SetLight label='+' operation click={() => { addDigit('+') }} />}
            {color ? <SetDark label='(' double click={() => { addDigit('(') }} />
                : <SetLight label='(' double click={() => { addDigit('(') }} />}
            {color ? <SetDark label=')' double click={() => { addDigit(')') }} />
                : <SetLight label=')' double click={() => { addDigit(')') }} />}
            {color ? <SetDark label='0' click={() => { addDigit('0') }} />
                : <SetLight label='0' click={() => { addDigit('0') }} />}
            {color ? <SetDark label='.' click={() => { addDigit('.') }} />
                : <SetLight label='.' click={() => { addDigit('.') }} />}
            {color ? <SetDark label='=' equal click={() => { operate('=') }} />
                : <SetLight label='=' equal click={() => { operate('=') }} />}
        </>
    );
};
