import React from "react";
import About from "./About";
import Home from "./Home";

function NavBar() {
  return (
    <div>
      <nav id="NavBar">
        <a href={"#home"}>Home</a>;<a href={"#about"}>About</a>;
      </nav>
    </div>
  );
}

export default NavBar;
