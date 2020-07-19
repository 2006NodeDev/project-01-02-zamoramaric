
import React, { FunctionComponent, SyntheticEvent, useState } from 'react'
import { Button, TextField, Container, CssBaseline, Grid } from '@material-ui/core'
//export const CreateAcctComponent {
import {toast} from 'react-toastify'
import { User } from '../../Models/User'
import {Project1SaveNewUser} from '../../Remote/project1-app-api/Project1SaveNewUser'
//import { read } from 'fs'
 

export const CreateAcctComponent:FunctionComponent<any> = (props)=>{
    let [username, changeUsername] = useState('')
    let [password, changePassword] = useState('')
    let [confirmPassword, changeConfirmPassword] = useState('')
    let [firstName, changeFirstName] = useState('')
    let [lastName, changeLastName] = useState('')

    let [email, changeEmail] = useState('')


const submitUser = async (e:SyntheticEvent) =>{
    e.preventDefault()
    if(password !== confirmPassword){
        toast.error('Password Do Not Match')
    }else {
        let newUser:User = {
            role: 'SiteMember',
            username,
            password,
            firstName,
            lastName,
            email,
            userId:0,
        }

        let res = await Project1SaveNewUser(newUser)
    }   
}
const updateUsername = (e:any) => {
    e.preventDefault()
    changeUsername(e.currentTarget.value)
}
const updatePassword = (e:any) => {
    e.preventDefault()
    changePassword(e.currentTarget.value)
}
const updateConfirmPassword = (e:any) => {
    e.preventDefault()
    changeConfirmPassword(e.currentTarget.value)
}
const updateFirstName = (e:any) => {
    e.preventDefault()
    changeFirstName(e.currentTarget.value)
}
const updateLastName = (e:any) => {
    e.preventDefault()
    changeLastName(e.currentTarget.value)
}
const updateEmail = (e:any) => {
    e.preventDefault()
    changeEmail(e.currentTarget.value)
}
return(
    <Container component="main" maxWidth="xs">
    <CssBaseline />

    <div>
    <Grid item>
    <h1>Create Account </h1>

    <form onSubmit={submitUser}>
    <TextField variant="outlined" margin="normal" required fullWidth id="standard-basic" label="Username" value = {username} onChange = {updateUsername} />
    <TextField variant="outlined" margin="normal" required fullWidth id="standard-basic"type='password' label="Password" value = {password} onChange = {updatePassword} />
    <TextField variant="outlined" margin="normal" required fullWidth id="standard-basic"type='password' label="Confirm Password" value = {confirmPassword} onChange = {updateConfirmPassword} />
    <TextField variant="outlined" margin="normal" required fullWidth id="standard-basic" label="First Name" value={firstName} onChange={updateFirstName} />
    <TextField variant="outlined" margin="normal" required fullWidth id="standard-basic" label="Last Name" value={lastName} onChange={updateLastName} />
    <TextField variant="outlined" margin="normal" required fullWidth id="standard-basic" type='email' label="Email" value={email} onChange={updateEmail} />
   
    <Button variant="contained" type='submit'>Submit</Button>

    </form>
    </Grid>

    </div>
    </Container>

)}
