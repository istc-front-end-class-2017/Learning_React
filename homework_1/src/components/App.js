import React, { Component } from 'react';
import '../stylings/App.css';

export default
class App extends Component {

  constructor(){
    super();
    this.runStart = 0;
    this.state = {
      fixedValue: "",
      appendValue: "",
      result: ""
    }
  }

  fixedValueGet = (event) => {
    if(this.runStart === 0){
      this.setState({fixedValue: event.target.value});
      this.setState({result: event.target.value});
    }
  }

  appendValueGet = (event) => {
    if(this.runStart === 0){
      this.setState({appendValue: event.target.value});
    }
  }

  start = () => {
    if(this.runStart === 0){
      this.runStart = 1;
      setInterval(()=>{
        let {result} = this.state;
        let {appendValue} = this.state;
        this.setState({result: result += appendValue});
        console.log(this.state.result);
      },1000);
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text" value = {this.state.fixedValue} onChange = {this.fixedValueGet}/>
        <input type="text" value = {this.state.appendValue} onChange = {this.appendValueGet}/>
        <input type="submit" value="Start" onClick = {this.start} />
      </div>
    );
  }


}
