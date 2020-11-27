import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark  navbar-expand-lg App-nav box ">
          <ul className="navbar-nav   ">
            {/* <li className="nav-item ">
              <NavLink to={"/h"} className="  nav-link">
                <span className="fa ">Nav </span>
              </NavLink>
            </li> */}

            {user && (
              <>
                <li className="nav-item ">
                  <NavLink to={"/home"} className="  nav-link">
                    <span className="fa "> Token</span>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to={"/logout"}>
                    <i className="fa"> Logout</i>
                  </NavLink>
                </li>
              </>
            )}
            {/* <li className="nav-item ">
              <NavLink className="nav-link " to="/signup">
                <i className="fa fa-sign-in"> Sign up</i>
              </NavLink>
            </li> */}
            {/* <li className="nav-item ">
              <NavLink className="nav-link " to="/">
                <i className="fa"> Log in</i>
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
