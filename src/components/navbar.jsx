import React from 'react'

const Navbar = ({ total }) => {
  return (
    <nav className="navbar navbar-light bg-light">
        <h1>{total}</h1>
    </nav>
  )
}

export default Navbar
