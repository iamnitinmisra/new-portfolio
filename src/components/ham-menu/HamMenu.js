import React, { Component } from "react";
import MenuContent from "./menu-content/MenuContent";
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
    console.log(isToggled);
    return (
      <nav className="menu-container">
        <div
          onClick={() => this.toggleMenu()}
          className={isToggled ? "active" : "hidden"}
        >
          <div className="menu-icon"></div>
        </div>
        <div className={isToggled ? "show" : "menu"}>
          <MenuContent />
        </div>
      </nav>
    );
  }
}
