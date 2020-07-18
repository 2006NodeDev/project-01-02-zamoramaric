import React, { FunctionComponent, useState, SyntheticEvent} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {SiteLogin} from '../../Remote/project1-app-api/SiteLogin'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Typography, Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router';
//import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  //avatar: {
    //margin: theme.spacing(1),
    //backgroundColor: theme.palette.secondary.main,
  //},
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}));

interface LoginProps extends RouteComponentProps{
  changeCurrentUser:(newUser:any) => void
}
export const LoginComponent:FunctionComponent<any> = (props) => {
    
  const classes = useStyles();

  const [username, changeUsername] = useState('')  //2 bits of state from react
  const [password, changePassword] = useState('') //one for username and one for password
  //const [currentUser, changeCurrentUser] = useState(null)

 const updateUsername = (event:any) =>{
        event.preventDefault(
        changeUsername(event.currentTarget.value)
        )
    }

 const updatePassword = (event:any) => {
        event.preventDefault()
        changePassword(event.currentTarget.value)
    }
 const loginSubmit = async (e:SyntheticEvent)=>{
        e.preventDefault()
        let res = await SiteLogin(username, password)
        props.changeCurrentUser(res)
        changePassword('')
        props.history.push('/')
    }
//autoComplete="off" onSubmit={loginSubmit}
    return (

      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          {/* by default the submit event in a form tries to send a get request to the href value in the form */}
        
          <Typography component="h1" variant="h5">
           Sign in
          </Typography>
          <form autoComplete="off" onSubmit={loginSubmit} className={classes.form} noValidate>
              <TextField variant="outlined" margin="normal" required fullWidth id="standard-basic" type='username' label="Username" value = {username} onChange = {updateUsername} />
              <TextField variant="outlined" margin="normal" required fullWidth id="standard-basic" type='password' label="Password" value = {password} onChange = {updatePassword} />
              <Button type='submit' fullWidth variant="contained" color="primary" className={classes.submit}> Login </Button>
         
          <Grid container>

          <Grid item>
              <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
              </Link>
          </Grid>

          </Grid>
          </form>
      </div>
      </Container>
    )


}