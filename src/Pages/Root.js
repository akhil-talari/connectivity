import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import logo from '../images/logo.PNG';
import con from '../images/Conectivite.png';
import chart from '../images/statistics.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import reduxModule from '../redux-modules';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import line from '../images/line.png';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import PeopleIcon from '@material-ui/icons/People';

const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1)
  },
  flex: {
    flex: 1,
    color: theme.palette.common.white
  },
  toolbar: {
    alignItems: 'flex-start'
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end'
  },
  icon: {
    lineHeight: '3.0',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
  background: {
    //width: '100vw'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'pink'
  },
  toolbarDrawer: theme.mixins.toolbar
});

function Home(props) {
  //const classes = useStyles();
  const { classes } = props;

  const handleLogin = () => {
    props.isAuthenticated.status
      ? props.authenticationRevoked()
      : props.history.push('/login');
  };

  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: '#f06292' }}>
        <Toolbar className={classes.toolbar}>
          {props.isAuthenticated && props.isAuthenticated.status && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={props.onClose}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h5"
            className={classes.title}
            noWrap
          ></Typography>

          <Tooltip id="tooltip-home" title="Home">
            <IconButton
              size="small"
              color="inherit"
              onClick={() => props.history.push('/home')}
            >
              <HomeIcon className={classes.icon} />
            </IconButton>
          </Tooltip>

          <Tooltip id="tooltip-info" title="About Us">
            <IconButton
              size="small"
              color="inherit"
              onClick={() => props.history.push('/aboutus')}
            >
              <InfoIcon className={classes.icon} />
            </IconButton>
          </Tooltip>

          <Tooltip id="tooltip-info" title="Use Cases">
            <IconButton
              size="small"
              color="inherit"
              onClick={() => props.history.push('/usecases')}
            >
              <PeopleIcon className={classes.icon} />
            </IconButton>
          </Tooltip>

          <Tooltip id="tooltip-info" title="Contact Us">
            <IconButton
              size="small"
              color="inherit"
              onClick={() => props.history.push('/contactus')}
            >
              <ContactPhoneIcon className={classes.icon} />
            </IconButton>
          </Tooltip>

          <Tooltip
            id="tooltip-login"
            title={
              props.isAuthenticated && props.isAuthenticated.status
                ? 'Logout'
                : 'Login'
            }
          >
            <IconButton
              edge="end"
              size="small"
              color="inherit"
              onClick={handleLogin}
            >
              <AccountCircleIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Toolbar>
        
      </AppBar>
      <div
          className={classes.root}
          style={{
            marginTop: '80px',
            marginLeft: '400px',
            
            
          }}
        >
        
          <img
            src={con}
            alt="logo"
            style={{ marginTop: '0px', marginLeft: '0px' }}
          />
          <Typography
                variant="h5"
                align="center"
                color="white"
                style={{
                  marginTop: '-20px',
                  marginLeft:'-280px'
                }}
              >
                Are you ready to embrace the change for seamless Conectivité ?
              </Typography>
          </div>
    </div>
  );
}

const mapState = (state, props) => {
  const isAuthenticated = reduxModule.screenSignIn.selectors.isAuthenticated(
    state,
    props
  );
  const isDrawerOpen = reduxModule.screenSignIn.selectors.isDrawerOpen(
    state,
    props
  );
  return {
    isAuthenticated,
    isDrawerOpen
  };
};

const mapDispatch = (dispatch) => {
  return {
    onClose: () => {
      dispatch({ type: reduxModule.screenSignIn.actions.SET_DRAWER_OPEN });
    },
    authenticationRevoked: (isAuthenticated) => {
      dispatch({
        type: reduxModule.screenSignIn.actions.AUTHENTICATION_REVOKED
      });
    }
  };
};

export default compose(
  connect(mapState, mapDispatch),
  withStyles(useStyles)
)(Home);
