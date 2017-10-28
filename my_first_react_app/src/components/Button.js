import React from "react";
import "../stylings/Button.css";

export default
class Button extends React.Component {

  clicked (){
    console.log("click click")
  }

  render(){
    return(
      <div className = "button">
        <input type = "button" onClick = {this.clicked} value = "Button" />
      </div>
    );
  }
}
