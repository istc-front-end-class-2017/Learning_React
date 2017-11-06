import React, { Component } from 'react';
import '../stylings/App.css';

export default
class App extends Component {

  constructor(){
    super();
    this.state = {
      fixedValue: "",
      appendValue: ""
    }
  }


  fixedValueGet = (event) => {
    this.setState({fixedValue: event.target.value});
  }

  appendValueGet = (event) => {
    this.setState({appendValue: event.target.value});
  }

  start = () => {
    setInterval(()=>{
      let {fixedValue} = this.state;
      let {appendValue} = this.state;
      fixedValue += appendValue;
      console.log(this.setState.fixedValue);
    },1000);
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
