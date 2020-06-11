import React from "react";
import {
  Link
} from "react-router-dom";

import './App.css'

function Navbar() {
    return (
        <div>
          <nav className="navbar navbar-default sticky-top">
            <div className="collapse navbar-collapse" id="bs-navbar-collapse-1">
              <ul className="nav navbar-nav">
                  <li className="navbar-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/interviews">Interviews</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/interviews/new">New</Link>
                  </li>
              </ul>
            </div>
          </nav>
        </div>
    );
}



export default Navbar;