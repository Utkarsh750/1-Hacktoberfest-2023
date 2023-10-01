import React from 'react'
import '../newNavbar/NewNavbar.css'

const NewNavbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">New Logo</div>
    <ul className="navbar-menu">
      <li className="navbar-item">Home</li>
      <li className="navbar-item">About</li>
      <li className="navbar-item">Services</li>
      <li className="navbar-item">Contact</li>
    </ul>
  </nav>
  )
}

export default NewNavbar