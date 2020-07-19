import {Redirect} from 'react-router-dom'
import React, { FunctionComponent } from 'react'
import {User} from '../../Models/User'
import Typography from '@material-ui/core/Typography'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TitleComponent } from '../TitleComponent/TitleComponent'
import { CssBaseline, Container, Grid, Button } from '@material-ui/core';

/*<Typography variant= 'body1'>
                      Role: {props.user?.role}
                    </Typography>
                    */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(60),

      },
    },
    paper:{
        backgroundColor:'white'
    }

  }),
);


interface MyProfileProps{
    user:User
}
//export const CreateAcctComponent {
    export const MyProfileComponent:FunctionComponent<MyProfileProps> = (props)=>{

    let classes = useStyles();

        return(
      //  (props.user) ?

        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className={classes.root}>
                
            <Grid item>
            <h1>My Profile </h1>

                <TitleComponent size='large' title={`Welcome ${props.user.username}!`} />
                <Paper className = {classes.paper} elevation={4}>
                    
                    <Typography variant= 'body1'>
                      Username: {props.user.username}
                    </Typography>

                    <Typography variant= 'body1'>
                      First Name: {props.user.firstName}
                    </Typography>

                    <Typography variant= 'body1'>
                       Last Name: {props.user.lastName}
                    </Typography>

                    <Typography variant= 'body1'>
                      Email: {props.user.email}
                    </Typography>
                    
                    <Button variant="outlined" color= 'inherit'> Edit </Button>
                   
                </Paper>
                </Grid>
            </div>
            </Container>

      // :
       // <Redirect to ='/login'/>
        //
        )
   
    }
        