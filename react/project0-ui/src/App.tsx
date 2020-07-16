import React from 'react';
import './App.css';
import {NavBarComponent} from './Components/NavBar/NavBar'
import {LoginComponent} from './Components/LoginComponent/LoginComponent'

function App() {
  return (
    <div className="App">
      <h3> Travel Desinations      
        </h3>
              <NavBarComponent/>
              <LoginComponent/>

      
    </div>
  );
}

export default App;
