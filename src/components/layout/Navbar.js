import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper" style={{ background: 'blue' }}>
            <i className='fas fa-blog' style={{ paddingLeft: "15px", fontSize: "50px" }}></i>
            <ul className="right hide-on-med-and-down">
              <Link
                to="/register"
                className="btn waves-effect waves-light hoverable light-blue accent-3">
                <li>Sign Up</li>
              </Link>
              <Link
                to='login'
                className="btn waves-effect waves-light hoverable light-blue accent-3">
                <li>Log in</li>
              </Link>
            </ul>
          </div>
        </nav>


      </div>
    );
  }
}
export default Navbar;