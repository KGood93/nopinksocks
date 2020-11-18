import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Help from './Components/HelpPage/Help/Help'
import LaundrySymbols from './Components/LaundrySymbols/LaundrySymbols'
import Stains from './Components/Stains/Stains'
import Navbar from './Components/Navigation/Navbar/Navbar'
import './App.css'

class App extends Component {
  renderNavRoutes() {
    return (
      <>
        {['/'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            component={LaundrySymbols}
          />
        ))}
        <Route path='/help' component={Help} />
        <Route path='/stains' component={Stains} />
      </>
    )
  }
  
  render(){
    //const nav = ['Laundry Symbols', 'Help', 'Stains']
    //const navId = ['/laundrysymbols', '/help', '/stains']
    //const navItems = nav.map((val,index)=>{
    //  return (
        //<MenuItem 
        //  key={index}
        //  to={menuId[index]} 
        //  delay={`${index * 0.1}s`}
        //  onClick={()=>{this.handleLinkClick();}}>
        //    {val}
        //</MenuItem>
    //  )
    //});

    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Navbar/>
        </header>
      </div>
    )
  }

}

export default App;
