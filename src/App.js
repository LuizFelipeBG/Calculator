import React, { Component } from 'react';
import './App.css';
import calculator from './calculator/calculator.js';
import format from './format/format.js';
const initialState = {
  value:'',
  theResult:'', 
}

class App extends Component {
  state = {...initialState}
  
  onChangevalue = (event) => {
     this.setState({value: event.target.value});
  }
  handleClick = () => {
    this.setState({theResult: calculator(format(this.state.value))})
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.value} onChange={this.onChangevalue}/>
        <button type="button" className='calculatorButton' onClick={this.handleClick}>Calcular</button>
        <h3>{this.state.theResult}</h3>
      </div>
      
    );
  };
}
export default App;
