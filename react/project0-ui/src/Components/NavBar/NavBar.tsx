import React, { FunctionComponent } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import Switch from '@material-ui/core/Switch';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {Link} from 'react-router-dom'

/*
let menuItems = []
menuItems.push(<MenuItem onClick={handleClose}> <Link to='/Login' > Login </Link> </MenuItem>)
if (props.user){
  menuItems.push([<MenuItem onClick={handleClose}> <Link to= {`/MyProfile/${(props.user)?props.user.userId : '0' }`} > My Profile </Link> </MenuItem>,
  <MenuItem onClick={handleClose}> <Link to='/EditMyProfile' > Edit My Profile </Link> </MenuItem>,
  <MenuItem onClick={handleClose}> <Link to='/ViewMyDestin' > My Desinations </Link> </MenuItem>])
}
if(props.user && props.user.role === 'admin'){
menuItems.push( <MenuItem onClick={handleClose}> <Link to='/Users' > All Users </Link> </MenuItem>)
}*/
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      //background : '#2E3B55'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      background : '#2E3B55'
    },
    title: {
      flexGrow: 1,
      background : '#2E3B55'

    },
  }),
);
export const NavBarComponent: FunctionComponent<any> = (props) =>{
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
let menuItems = []
menuItems.push(<MenuItem onClick={handleClose}> <Link to='/' > Home </Link> </MenuItem>)
menuItems.push(<MenuItem onClick={handleClose}> <Link to='/Login' > Login </Link> </MenuItem>)
if (props.user && props.user.role.role === 'admin'){
  menuItems.push([<MenuItem onClick={handleClose}> <Link to= {`/MyProfile/${(props.user)?props.user.userId : '0' }`} > My Profile </Link> </MenuItem>,
  <MenuItem onClick={handleClose}> <Link to = {`/EditMyProfile/${(props.user) ? props.user.userId : '0'}`} > Edit My Profile </Link> </MenuItem>,
  <MenuItem onClick={handleClose}> <Link to='/ViewMyDestin' > My Desinations </Link> </MenuItem>, <MenuItem onClick={handleClose}><Link to='/attractions' > View All Attractions </Link> </MenuItem>],<MenuItem onClick={handleClose}> <Link to='/newaccount' > Create New Account </Link> </MenuItem>)
}

//to={`/edit/${(props.user) ? props.user.userId : '0'}`}
if (props.user && props.user.role.role === 'SiteMember'){
  menuItems.push(<MenuItem onClick={handleClose}> <Link to='/Users' > All Users </Link> </MenuItem>, 
  <MenuItem onClick={handleClose}> <Link to= {`/MyProfile/${(props.user)?props.user.userId : '0' }`} > My Profile </Link> </MenuItem>,
  <MenuItem onClick={handleClose}> <Link to='/EditMyProfile' > Edit My Profile </Link> </MenuItem>)
}
    return (
         <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <h2>Your Next Vacation Destination</h2>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit" >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}> 
                {menuItems}                          
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>.
    </div>   
  )
}
//  <MenuItem onClick={handleClose}> <Link to='/CreateAccount' > Create Account </Link> </MenuItem>