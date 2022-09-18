import React from 'react';
import './App.css';
import Countup  from './features/countup/Countup'
import {Sound} from './features/sound/Sound';
import { Footer } from './features/footer/Footer';
import { Score } from './features/Score/Score';
import { UserScript } from './features/userScript/userScript';

function App() {
  return (
    <div>
      <Countup />
      <Sound />
      <Score />
      <UserScript />
      <Footer/>
    </div>
  );
}

export default App;