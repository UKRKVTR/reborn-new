import './style.css'
import React from 'react'

function Nav () {
  return (
    <div className='navbar'>
      <div className='navbarWrapped'>
        <a href='#'>
          <img src='/LOGO-white.png' alt='logo' className='logoWhite' />
        </a>

        <ul className='menu'>
          <a href='#' className='menuLink'>
            Home
          </a>
          <a href='#' className='menuLink'>
            Payment & Delivery
          </a>
          <a href='#' className='menuLink'>
            Contacts
          </a>
          <a href='#' className='menuLink'>
            Sale
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Nav
