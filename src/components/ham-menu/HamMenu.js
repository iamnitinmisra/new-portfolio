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
    console.log(isToggled)
    return (
      <nav className="menu-container">
        <div
          onClick={() => this.toggleMenu()}
          className={isToggled ? "active" : "hidden"}
        >
          <div className='menu-icon'></div>
        </div>
        <ul className={isToggled ? "show" : "menu"}>
          <a href="#">
            <li id="link">Home</li>
          </a>
          <a href="#">
            <li id="link">Resume</li>
          </a>
          <a href="#">
            <li id="link">Projects</li>
          </a>
          {/* <a href="#">
            <li id="link">Contact</li>
          </a> */}
        </ul>
      </nav>
    );
  }
}
