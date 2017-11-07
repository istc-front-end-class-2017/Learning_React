import React, { Component } from 'react';
import '../stylings/App.css';

export default
class App extends Component {

  constructor(){
    super();
    this.state = {
      fixedValue: "",
      appendValue: "",
      result: ""
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  start = () => {
    let {result, fixedValue, appendValue} = this.state;
    result = fixedValue;
    setInterval(()=>{
      this.setState({result: result += appendValue});
    },1000);
  }

  render() {
    return (
      <div className="App">
        <input name="fixedValue" type="text" onChange = {this.handleChange}/>
        <input name="appendValue" type="text" onChange = {this.handleChange}/>
        <input type="submit" value="Start" onClick = {this.start} />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
