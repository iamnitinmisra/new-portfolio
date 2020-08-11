import React, { Component } from "react";
import "./HamMenu.css";

export default class HamMenu extends Component {
  constructor() {
    super();
    this.state = {
      isToggled: false,
    };
  }

  toggleMenu() {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  }

  render() {
    const { isToggled } = this.state;
    return (
      <div onClick={()=>this.toggleMenu()} className={isToggled ? "active" : "nav-icon"}>
        <a href="http://">
            <div></div>
        </a>
      </div>
    );
  }
}
