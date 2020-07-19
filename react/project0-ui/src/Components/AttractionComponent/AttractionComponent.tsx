import {Redirect} from 'react-router-dom'
import React, { FunctionComponent } from 'react'
import {AttractionsDestin} from '../../Models/AttractionsDestin'
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
interface AttractionComponentProps{
    attraction:AttractionsDestin
}
//export const CreateAcctComponent {
    export const AttractionComponent:FunctionComponent<AttractionComponentProps> = (props)=>{
    let classes = useStyles();
        return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className={classes.root}>    
            <Grid item>
                <TitleComponent size='large' title={`US Attractions`} />
                <Paper className = {classes.paper} elevation={4}>
                    
                    <Typography variant= 'body1'>
                     {props.attraction.attract_id}
                    </Typography>

                    <Typography variant= 'body1'>
                      US State: {props.attraction.USLocation}
                    </Typography>

                    <Typography variant= 'body1'>
                       Capital: {props.attraction.capital}
                    </Typography>

                    <Typography variant= 'body1'>
                      Region: {props.attraction.region}
                    </Typography>

                    <Typography variant= 'body1'>
                      Attraction: {props.attraction.attraction}
                    </Typography>
                    
                    <Button variant="outlined" color= 'inherit'> Add to My Destination Attraction List </Button>
                </Paper>
                </Grid>
            </div>
            </Container>
      // :
       // <Redirect to ='/login'/>
        //
        )
    }      