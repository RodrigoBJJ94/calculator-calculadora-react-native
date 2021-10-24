import React, { useState } from 'react';
import Themes from './components/Themes/Themes';
import Calculator from './components/Calculator/Calculator';

export default function App() {
  const [color, setColor] = useState(true);

  return (
    <>
      <Themes color={color} setColor={setColor} />
      <Calculator color={color} />
    </>
  );
};
