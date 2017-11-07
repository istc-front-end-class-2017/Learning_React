import React, { Component } from 'react';
import '../stylings/App.css';

export default
class App extends Component {

  constructor(){
    super();
    this.state = {
      result: ""
    }
  }

  start = () => {
    let result = this.refs.fixedValue.value;
    let appendValue = this.refs.appendValue.value;
    setInterval(()=>{
      result += appendValue;
      this.setState({result});
    }, 500);
  }

  render() {
    return (
      <div className="App">
        <input ref="fixedValue" type="text"/>
        <input ref="appendValue" type="text"/>
        <input type="submit" value="Start" onClick = {this.start} />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
