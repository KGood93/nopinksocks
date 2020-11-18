import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Help from './Components/HelpPage/Help/Help'
import LaundrySymbols from './Components/LaundrySymbols/LaundrySymbols'
import Stains from './Components/Stains/Stains'
import Navbar from './Components/Navigation/Navbar/Navbar'
import Home from './Components/Home/Home/Home'
import './App.css'

class App extends Component {
  renderNavRoutes() {
    return (
      <>
        {['/', '/home'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            component={Home}
          />
        ))}
        <Route path='/laundrysymbols' component={LaundrySymbols} />
        <Route path='/help' component={Help} />
        <Route path='/stains' component={Stains} />
      </>
    )
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Navbar/>
        </header>
        {this.renderNavRoutes()}
      </div>
    )
  }

}

export default App;
