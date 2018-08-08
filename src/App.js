import React, { Component } from 'react';
import './App.css';
import result from './result/result';
import format from './format/format';
import textInputEnd from './format/textInInputEnd';
import historyFormat from './format/historyFormat';
const initialState = {
  value:'',
  theResult:'',
  history:[]
}


class App extends Component {
  state = {...initialState}


  onChangevalue = (event) => {
    this.setState({value: event.target.value});
  }

  handleClick = () => {
    if (true === isNaN(result(this.state.value))){
      this.setState({theResult: 'unexpected value'})
      return
    }
    if (textInputEnd(this.state.value) === false){
      this.setState({theResult: 'unexpected value'})
      return
    }
    

    const history = [...this.state.history]
    this.setState({theResult: result(this.state.value) || 0, value:''})
    history.push(historyFormat(format(this.state.value)) + ' = ' + (result(this.state.value) ))
    this.setState({history: history})
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.value} onChange={this.onChangevalue} className='calculatorInput'/>
        <button type="button" className='calculatorButton' onClick={this.handleClick}>Calcular</button>
        <h3>{this.state.theResult}</h3>
        <p className='historyBox'>History: <br/>
          { this.state.history.map(x => (
            <p>{x}</p>
          ))}
        </p>

      </div>

    );
  };
}
export default App;
