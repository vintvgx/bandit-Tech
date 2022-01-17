import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-black">
        <div className="container">
          <NavLink className="navbar-brand brand nav-link" to="/">
            BANDIT TECH
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
