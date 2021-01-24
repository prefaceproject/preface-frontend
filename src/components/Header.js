import React from 'react'
import Logo from '../assets/logo.png'

import './Header.css'

const Header = () => {
  const username = "Peter"
  return (
      <header className="header">
        <img className="header-logo" src={Logo} alt=""/>
        <div className="profile">
          <span className="username">{username}</span>
          <div className="profile-icon"/>
        </div>
      </header>
  )
}

export default Header
