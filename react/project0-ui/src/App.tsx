import React, { useState } from 'react';
import './App.css';
import {NavBarComponent} from './Components/NavBar/NavBar'
import {LoginComponent} from './Components/LoginComponent/LoginComponent'
import {WelcomeComponent} from './Components/WelcomeComponent/WelcomeComponent'
//import {CreateAcctComponent} from './Components/CreateAcctComponent/CreateAcctComponent'
import {EditProfileComponent} from './Components/EditProfileComponent/EditProfileComponent'
import {ViewMyDestinComponent} from './Components/ViewMyDestinComponent/ViewMyDestinComponent'
import {MyProfileComponent} from './Components/MyProfileComponent/MyProfileComponent'
//        <Route path='/CreateAccount'> <CreateAcctComponent user = {currentUser} /> </Route>
//<Route path='/MyProfile'> <MyProfileComponent user = {currentUser} /> </Route>
//        <MyProfileComponent user={currentUser} />



import {User} from './Models/User'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
   const [currentUser, changeCurrentUser] = useState<null|User>(null)

  return (
    <div className="App">

        <Router>
        <NavBarComponent/>
        <Route exact path = '/' component={WelcomeComponent}/>
        <Route path='/login' render={(props)=> (<LoginComponent changeCurrentUser= {changeCurrentUser}{...props}/>)}/>
        <Route path='/EditMyProfile'> <EditProfileComponent user = {currentUser} /> </Route>
        <Route path='/ViewMyDestin'> <ViewMyDestinComponent user = {currentUser} /> </Route>
        <Route path='/MyProfile'> <MyProfileComponent user = {currentUser} /> </Route>

        </Router>
    </div>
  );
}

export default App;

