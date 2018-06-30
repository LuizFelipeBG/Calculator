import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value1: event.target.value1});
    this.setState({value2: event.target.value2});
  }
  handleSubmit(event) {
    console.log('Valor 1: ' + this.state.value1);
    console.log('Valor 2: ' + this.state.value2);
    event.preventDefault();
  }
  render() {
//     const diminuir = (leftinput,rightinput) => {
//       return leftinput - rightinput
//   }
//   const somar = (leftinput,rightinput) => {
//     return leftinput + rightinput
// }
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="App">
      <span className="input">
        <input className="leftinput" type="number"  onChange={this.handleChange.value1} />
        <input className="rightinput" type="number"  onChange={this.handleChange.value2}/><br/>
      </span>
      <span className="button">
        <button className="moreButton" onSubmit={this.handleChange.value1} type='submit'>+</button>
        <button className="decreaseButton" onSubmit={this.handleChange.value2} type='submit'>-</button>
        <button className="clearButton">AC</button>
      </span>  
      </div>
      </form>
    );
  }
}

export default App;
