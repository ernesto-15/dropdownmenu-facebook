import React from 'react';
import NavBar from './Components/NavBar'
import NavItem from './Components/NavItem'
import DropDownMenu from './Components/DropDownMenu'
import {ReactComponent as BellIcon} from './Icons/bell.svg'
import {ReactComponent as CaretIcon} from './Icons/caret.svg'
import {ReactComponent as MessengerIcon} from './Icons/messenger.svg'
import {ReactComponent as PlusIcon} from './Icons/plus.svg'
// import {ReactComponent as ArrowIcon} from './Icons/arrow.svg'
// import {ReactComponent as BoltIcon} from './Icons/bolt.svg'
// import {ReactComponent as ChevronIcon} from './Icons/chevron.svg'
// import {ReactComponent as CogIcon} from './Icons/cog.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}> 
          <DropDownMenu />
        </NavItem>
      </NavBar>
    </div>
  );
}

export default App;
