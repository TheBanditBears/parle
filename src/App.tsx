import React from 'react';
import './App.css';
import { useTimer } from 'react-timer-hook';
import Countup  from './features/countup/Countup'


function App() {

  const time = 10 * 60 //seconds

  return (
    <div>
      <Countup />
    </div>
  );
}

export default App;