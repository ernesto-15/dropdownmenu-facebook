import React from 'react'

const NavBar = ({children}) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

export default NavBar