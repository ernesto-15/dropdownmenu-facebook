import React from 'react';

const DropDownitem = ({ children, rigth, left, goToMenu }) => {
  return (
    // eslint-disable-next-line
    <a href="#" className="menu-item">
      <span className="icon-button">{rigth}</span>
      {children}
      <span className="icon-right">{left}</span>
    </a>
  );
};

export default DropDownitem;
