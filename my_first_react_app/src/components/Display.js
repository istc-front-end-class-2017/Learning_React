import React from "react";
import "../stylings/Display.css";

export default
class Display extends React.Component {
  render(){
    return(
      <div className = "display">
        <input placeholder = "Write here" type = "text"/>
      </div>
    );
  }
}
