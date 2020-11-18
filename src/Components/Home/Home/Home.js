//Home page displaying welcome message and laundry symbols page pre-nav.

import React from 'react'
import Welcome from '../Welcome/Welcome'
import LaundrySymbols from '../../LaundrySymbols/LaundrySymbols'
import './Home.css'

function Home() {
    return(
        <div className="home">
            <Welcome/>
            <LaundrySymbols/>
        </div>
    ) 

}

export default Home