import React, { FunctionComponent, useState, SyntheticEvent} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {SiteLogin} from '../../Remote/loginsite-app/SiteLogin'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


export const LoginComponent:FunctionComponent<any> = (props) => {
    const [username, changeUsername] = useState('')  //2 bits of state from react
    const [password, changePassword] = useState('') //one for username and one for password


 const updateUsername = (event:any) =>{
        event.preventDefault(
        changeUsername(event.currentTarget.value)
        )

    }

    const updatePassword = (event:any) => {
        event.preventDefault()
        changePassword(event.currentTarget.value)
    }
    const loginSubmit = (e:SyntheticEvent)=>{
        e.preventDefault()
        SiteLogin(username, password)
        changePassword('')
    }
   
    
//autoComplete="off" onSubmit={loginSubmit}
    return (
        <div>
            {/* by default the submit event in a form tries to send a get request to the href value in the form */}
            <form autoComplete="off" onSubmit={loginSubmit}>
                <TextField id="standard-basic" type='username' label="Username" value = {username} onChange = {updateUsername} />
                <TextField id="standard-basic" type='password' label="Password" value = {password} onChange = {updatePassword} />
                <Button type='submit' variant="contained" color="primary">Login</Button>

              <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
            </form>
        </div>
    )


}