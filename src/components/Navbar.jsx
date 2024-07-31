import React from 'react'

const Navbar = () => {
  return (
    <nav className='navContainer'>
        <div className="navLeft">
            <h1>LoliShop</h1>
        </div>
        <div className="navCenter">
            <input type="text" placeholder="Search" />
            <button type='submit'>Search</button>
        </div>
    </nav>
  )
}

export default Navbar
