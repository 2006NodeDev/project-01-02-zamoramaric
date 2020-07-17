import React from 'react';
import './App.css';
import {NavBarComponent} from './Components/NavBar/NavBar'
import {LoginComponent} from './Components/LoginComponent/LoginComponent'
import {WelcomeComponent} from './Components/WelcomeComponent/WelcomeComponent'

import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1 > Welcome to Travel Destinations      
        </h1>
        <NavBarComponent/>
        <WelcomeComponent/>

        <Router>

              <Route path='/login' component={LoginComponent}/>

        </Router>
      
    </div>
  );
}

export default App;

