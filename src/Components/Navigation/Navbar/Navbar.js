//Navbar for Desktop Version

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { NavItem } from '../NavItem/NavItem'

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItem">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'H' : 'X'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItem.map((item,index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar