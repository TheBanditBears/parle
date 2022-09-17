import React from 'react';
import './App.css';
import Countup  from './features/countup/Countup'
import { Footer } from './features/footer/Footer';


function App() {
  return (
    <div>
      <Countup />
      <Footer/>
    </div>
  );
}

export default App;