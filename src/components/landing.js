import React, { Component } from 'react';
import Srikanth from '../images/srikanth3.jpeg';
import '../styles/landing.css';

class landing extends Component {
  render() {
    return (
      <div className="landing-page">
      <div className="showcase">
      <img src={Srikanth} alt="srikanth pic"/>
      <h1>Srikanth Karra </h1>
      <h3>Full Stack Web-Developer</h3>
      </div>
     </div>
    );
  }
}

export default landing;
