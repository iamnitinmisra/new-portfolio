import React, { Component } from "react";
import Content from "./Content";
import HamIcon from "./HamIcon";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isToggled: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      isToggled: !this.state.isToggled,
    });
  };

  render() {
    const { isToggled } = this.state;
    console.log(isToggled);
    return (
      <div className="navbar-container">
        <div className="navbar-content">
          <HamIcon isToggled={isToggled} toggleMenu={this.toggleMenu} />
          <div className="my-name roboto">
            <h2>Nitin Misra</h2>
          </div>
          <Content isToggled={isToggled} toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}
