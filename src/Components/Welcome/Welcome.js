//Welcome message displayed on the main home page.

import React from 'react'
import './Welcome.css'

function Welcome() {
    return(
        <div className="welcome">
            <h1 className="welcomeIntro">Welcome to No Pink Socks!</h1>
            <h2 className="welcomeMessage">
                An all encompassing laundry guide to help you read laundry symbols, 
                solve common laundry problems and keep white from accidentally 
                being dyed pink.
            </h2>
        </div>
    ) 

}

export default Welcome


 