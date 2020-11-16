//Nav Bar for Desktop Version

import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>Laundry Symbols</li>
                    <li>Stains</li>
                </ul>
            </div>
        )
    }
}