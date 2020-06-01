import React, {useState} from 'react'

const NavItem = ({icon, children}) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <li className="nav-item">
      {/* eslint-disable-next-line */}
      <a href="#" className="icon-button" onClick={handleClick}>{icon}</a>
      {open && children}
    </li>
  )
}

export default NavItem