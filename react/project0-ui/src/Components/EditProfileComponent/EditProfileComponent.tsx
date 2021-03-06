
import React, { FunctionComponent, SyntheticEvent, useState } from 'react'
import { Button, TextField, Container, CssBaseline, Grid, Typography } from '@material-ui/core'
import {toast} from 'react-toastify'
import { User } from '../../Models/User'
import {Project1EditUser} from '../../Remote/project1-app-api/Project1EditUser'
import { useParams } from 'react-router-dom'
import { TitleComponent } from '../TitleComponent/TitleComponent'

//interface UserProps{
    //user:User
//}
export const EditProfileComponent:FunctionComponent<any> = (props)=>{
   // let userId = props.user.userId
    let {userId} = useParams()
  //menuItems.push([<MenuItem onClick={handleClose}> <Link to= {`/MyProfile/${(props.user)?props.user.userId : '0' }`} > My Profile </Link> </MenuItem>,
 // const userId = props.user.userId
    let [username, changeUsername] = useState('')
    let [password, changePassword] = useState('')
    let [firstName, changeFirstName] = useState('')
    let [lastName, changeLastName] = useState('')
    let [email, changeEmail] = useState('')
    let [role, changeRole] = useState('')
    
const updateUsername = (e:any) => {
    e.preventDefault()
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
        const submitUser = async (e:SyntheticEvent) =>{
            e.preventDefault()
            let updateUser:User = {
                userId: userId,
                username,
                password,
                firstName,
                lastName,
                email,
                role,
            }
            try{
                await Project1EditUser(updateUser)
                console.log(updateUser);
               props.history.push(`/MyProfile/${userId}`)
            }
            catch(e){
                console.log(e)
            }
        }
//:userId
return(
   // (props.user) ?
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div>
    <Grid item>
    <TitleComponent size='large' title= 'Edit Profile' />

    <form onSubmit={submitUser}>
       Please enter information for the fields you'd like to update:
    <TextField variant="outlined" margin="normal" fullWidth id="standard-basic" label="Username" value = {username} onChange = {updateUsername} />
    <TextField variant="outlined" margin="normal" fullWidth id="standard-basic"type='Password' label="Password" value = {password} onChange = {updatePassword} />
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
       // <Redirect to = '/MyProfile/${(props.user.userId)'/>

)}
//href="/EditMyProfile"
        //    //if (props.user && props.user.role.role === 'SiteMember'){

        /*
          <Typography variant= 'body1'>
                 User Id: {props.user.userId}
    </Typography>
    */

        //<TextField variant="outlined" margin="normal" fullWidth id="standard-basic"type='password' label="Confirm Password" value = {confirmPassword} onChange = {updateConfirmPassword} />
//                props.history.push(`/MyProfile/${userId}`)
