import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <input type="text" className='calculatorInput' />
      <button type="button" className='calculatorButton'>Calcular</button>
      </div>
    );
  };
}

export default App;
