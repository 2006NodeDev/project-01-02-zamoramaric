/*import {Redirect} from 'react-router-dom'
import React from 'react'
//export const CreateAcctComponent {
    export function EditProfileComponent(props:any){


        return(
        (props.user) ?
            <div>

                <h1 > Welcome to Edit Profile </h1>

            </div>
        :
        <Redirect to ='/login'/>
        )
   
    }
    
    */

    
import React, { FunctionComponent, SyntheticEvent, useState } from 'react'
import { Button, TextField, Container, CssBaseline, Grid, Typography } from '@material-ui/core'
//export const CreateAcctComponent {
import {toast} from 'react-toastify'
import { User } from '../../Models/User'
import {Project1EditUser} from '../../Remote/project1-app-api/Project1EditUser'
import { Redirect, useParams } from 'react-router'
import { Console } from 'console'
import { TitleComponent } from '../TitleComponent/TitleComponent'
//import { read } from 'fs'
 

export const EditProfileComponent:FunctionComponent<any> = (props)=>{
    const {userId} = useParams()
    let [username, changeUsername] = useState('')
    let [password, changePassword] = useState('')
    let [confirmPassword, changeConfirmPassword] = useState('')
    let [firstName, changeFirstName] = useState('')
    let [lastName, changeLastName] = useState('')
    let [email, changeEmail] = useState('')
    let [role, changeRole] = useState('')



const submitUser = async (e:SyntheticEvent) =>{
    e.preventDefault()
    if(password !== confirmPassword){
        toast.error('Password Do Not Match')
    }else {
        let updateUser:User = {
            userId: userId,
            username,
            password,
            firstName,
            lastName,
            email,
            role,
        }
        let res = await Project1EditUser(updateUser)
        console.log(updateUser);
        props.history.push(`/MyProfile/${userId}`)
    }   
   //<Redirect to = '/MyProfile/${(props.newUser.userId)'/>

}
const updateUsername = (e:any) => {
    if (e.currentTarget.value !== undefined) {
        changeUsername(e.currentTarget.value)
    }
    else {
        changeUsername(e.currentTarget.username)
    }
}

const updatePassword = (e:any) => {
    e.preventDefault()
        if (e.currentTarget.value !== undefined) {
            changePassword(e.currentTarget.value)
        }
        else {
            changePassword(e.currentTarget.password)
        }
    }
const updateConfirmPassword = (e:any) => {
    e.preventDefault()
        if (e.currentTarget.value !== undefined) {
            updateConfirmPassword(e.currentTarget.value)
        }
        else {
            updateConfirmPassword(e.currentTarget.password)
        }
    }
const updateFirstName = (e:any) => {
    e.preventDefault()
    if (e.currentTarget.value !== undefined) {
        changeFirstName(e.currentTarget.value)
    }
    else {
        changeFirstName(e.currentTarget.firstName)
    }
}
const updateLastName = (e:any) => {
    e.preventDefault()
        if (e.currentTarget.value !== undefined) {
            changeLastName(e.currentTarget.value)
        }
        else {
            changeLastName(e.currentTarget.lastName)
        }
    }
const updateEmail = (e:any) => {
    e.preventDefault()
        if (e.currentTarget.value !== undefined) {
            changeEmail(e.currentTarget.value)
        }
        else {
            changeEmail(e.currentTarget.email)
        }
    }
    const updateRole = (e:any) => {
        e.preventDefault()
            if (e.currentTarget.value !== undefined) {
                changeRole(e.currentTarget.value)
            }
            else {
                changeRole(e.currentTarget.email)
            }
        }
return(

   // (props.user) ?
    <Container component="main" maxWidth="xs">
    <CssBaseline />

    <div>
    <Grid item>
    <TitleComponent size='large' title= 'Edit Account' />

    <form onSubmit={submitUser}>
    <TextField variant="outlined" margin="normal" fullWidth id="standard-basic" label="Username" value = {username} onChange = {updateUsername} />
    <TextField variant="outlined" margin="normal" fullWidth id="standard-basic"type='password' label="Password" value = {password} onChange = {updatePassword} />
    <TextField variant="outlined" margin="normal" fullWidth id="standard-basic"type='password' label="Confirm Password" value = {confirmPassword} onChange = {updateConfirmPassword} />
    <TextField variant="outlined" margin="normal" fullWidth id="standard-basic" label="First Name" value={firstName} onChange={updateFirstName} />
    <TextField variant="outlined" margin="normal" fullWidth id="standard-basic" label="Last Name" value={lastName} onChange={updateLastName} />
    <TextField variant="outlined" margin="normal" fullWidth id="standard-basic" type='email' label="Email" value={email} onChange={updateEmail} />
    <TextField variant="outlined" margin="normal" fullWidth id="standard-basic" label="Role" value={role} onChange={updateRole} />
    <br /><br />
    <Button variant="contained" type='submit'> Save </Button>
    <br /><br />
    <br /><br />

    </form>
    </Grid>

    </div>
    </Container>

         //:
      // <Redirect to = '/MyProfile/${(props.user.userId)'/>

)}

        //    //if (props.user && props.user.role.role === 'SiteMember'){
