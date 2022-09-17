import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Footer } from './features/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Footer />
      </header>
    </div>
  );
}

export default App;
