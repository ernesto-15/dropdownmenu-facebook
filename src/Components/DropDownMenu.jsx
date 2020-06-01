import React, { useState } from 'react';
import { ReactComponent as CogIcon } from '../Icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../Icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../Icons/arrow.svg';
import { CSSTransition } from 'react-transition-group';
// import DropDownItem from './DropDownitem';

const DropDownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = (element) => {
    const height = element.offsetHeight;
    setMenuHeight(height)
  }

  const DropDownItem = ({ children, rigth, left, goToMenu }) => {
    return (
      // eslint-disable-next-line
      <a
        href="#"
        className="menu-item"
        onClick={() => setActiveMenu(goToMenu)}
      >
        <span className="icon-button">{left}</span>
        {children}
        <span className="icon-right">{rigth}</span>
      </a>
    );
  };

  return (
    <div className="dropdown" style={{height: menuHeight}}>
      <CSSTransition
        classNames="menu-primary"
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem
            goToMenu="settings"
            left={<CogIcon />}
            rigth={<ChevronIcon />}
          >
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        classNames="menu-secondary"
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem left={<ArrowIcon />} goToMenu="main" />
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
          <DropDownItem>Settings</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropDownMenu;
