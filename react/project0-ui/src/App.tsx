import React, { useState } from 'react';
import './App.css';
import {NavBarComponent} from './Components/NavBar/NavBar'
import {LoginComponent} from './Components/LoginComponent/LoginComponent'
import {WelcomeComponent} from './Components/WelcomeComponent/WelcomeComponent'
import {CreateAcctComponent} from './Components/CreateAcctComponent/CreateAcctComponent'
import {EditProfileComponent} from './Components/EditProfileComponent/EditProfileComponent'
import {ViewMyDestinComponent} from './Components/ViewMyDestinComponent/ViewMyDestinComponent'
import {ViewMyProfileComponent} from './Components/ViewMyProfileComponent/ViewMyProfileComponent'
import {AllUsersComponent} from './Components/AllUsersComponent/AllUsersComponent'
import {AllAttractionsComponent} from './Components/AllAttractionsComponent/AllAttractionsComponent'
import {ToastContainer} from 'react-toastify'


//        <Route path='/CreateAccount'> <CreateAcctComponent user = {currentUser} /> </Route>
//<Route path='/MyProfile'> <MyProfileComponent user = {currentUser} /> </Route>
//        <MyProfileComponent user={currentUser} />
//        <Route path='/MyProfile'> <MyProfileComponent user = {currentUser} /> </Route>


import {User} from './Models/User'
import {BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
   const [currentUser, changeCurrentUser] = useState<null|User>(null)

  return (
    <div className="App">

        <Router>
        <NavBarComponent user ={currentUser}/>
        <Route exact path = '/' component={WelcomeComponent}/>
        <Route path='/login' render={(props)=> (<LoginComponent changeCurrentUser= {changeCurrentUser}{...props}/>)}/>
        <Route path='/ViewMyDestin'> <ViewMyDestinComponent user = {currentUser} /> </Route>
        <Route path='/MyProfile/:userId' component = {ViewMyProfileComponent} /> 
        <Route path='/users' component = {AllUsersComponent} />
        <Route path='/attractions' component = {AllAttractionsComponent} />
        <Route path='/newaccount' component = {CreateAcctComponent} />
        <Route path='/EditMyProfile/:userId'component = {EditProfileComponent} />

        <ToastContainer position='bottom-right'/>
        </Router>
    </div>
  );
}

export default App;

//user = {currentUser}