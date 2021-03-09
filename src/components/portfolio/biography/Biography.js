import React from "react";
import "./Biography.css";

export default function Biography() {
  return (
    <div id="biography-container">
      <h2 className="roboto">Biography</h2>
      <p className="biography-text ">
        I am a full-stack developer in Phoenix, AZ with a passion for computer
        science and electrical engineering. I earned a Bachelor's of Science in
        Business Administration from the W.P. Carey School of Business at
        Arizona State University. From there I worked approximately seven years
        as a Program Manager at a couple of different organizations.
        <br />
        <br />
        In 2019, I attended a immersive coding bootcamp named Dev Mountain,
        where I trained in a full React.js stack for web development including
        React, Node, Express, Redux, and PostgreSQL.
        <br />
        <br />
        In my free time, I like to convert standard devices into smart devices
        around the house using single-board computers that allow for voice
        control through the Amazon Echo or similar Personal AI.. aka Smart Home.
      </p>
    </div>
  );
}
