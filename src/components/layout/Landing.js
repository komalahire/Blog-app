import React, { Component } from "react";
import { Link } from "react-router-dom";
import blogImage from './blog.jpg'
import Navbar from './Navbar';

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
      <div style={{ height: "75vh" }} className="container valign-wrapper">
          
        <div className="row">
          <div className="col s12 center-align">
            <img src = {blogImage} style = {{width:"40%",height:"500px"}}></img>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Landing;