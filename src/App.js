import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="App">
      <span className="input">
      <input type="text" className='calculatorInput' value={this.state.value} onChange={this.handleChange} />
      </span>
      <span className="button">
      <button type="submit" value="Submit" className='calculatorButton' >Calcular</button><br/>
      
      </span>  
      </div>
      </form>
    );
  };
}

export default App;
