import React, { Component } from 'react';
import './App.css';
import calculator from './calculator/calculator.js';
import format from './format/format.js';
const initialState = {
  value:''
}
class App extends Component {
  state = {...initialState}
  
  onChangevalue = (event) => {
     this.setState({value: event.target.value});
  }
  submitOn(event){
    //De alguma forma o evento das fuçoes devem acontecer aqui dentro
    alert(this.state.value)  
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitOn}>
      <div className="App">
        <input onChange={this.onChangevalue}/>
        <button type="submit" value="submit" className='calculatorButton' onClick={this.submitOn}>Calcular</button>
      </div>
      </form>
    );
  };
}
export default App;
