import React from 'react';
import './App.css';
import {NavBarComponent} from './Components/NavBar/NavBar'
import {LoginComponent} from './Components/LoginComponent/LoginComponent'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h3 > Travel Desinations      
        </h3>
        <NavBarComponent/>
        
        <Router>

              <Route path='/login' component={LoginComponent}/>

        </Router>
      
    </div>
  );
}

export default App;

