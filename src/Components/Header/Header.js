//Header component containing reverece to Logo and text for secondary .

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
  
  render() {
    return (
      <nav className='Header'>
        <h1>
          <Link to='/'>
            {' '}
            No Pink Socks
            </Link>
        </h1>
      </nav>
    )
  }
}