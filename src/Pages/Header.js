import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import logo from '../images/logoFinal.png';
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
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  flex: {
    flex: 1,
    color: theme.palette.common.white,
  },
  toolbar: {
    //alignItems: 'flex-start'
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  icon: {
    lineHeight: '3.0',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  background: {
    //width: '100vw'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'white',
  },
  toolbarDrawer: theme.mixins.toolbar,
  buttons: {
    padding: 12,
  },
});

function Header(props) {
  //const classes = useStyles();
  const { classes } = props;

  const handleLogin = () => {
    props.isAuthenticated.status
      ? props.authenticationRevoked()
      : props.history.push('/');
  };

  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: 'steelblue' }}>
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

          <IconButton
            size="small"
            color="inherit"
            onClick={() => props.history.push('/')}
            className={classes.buttons}
          >
            HOME
          </IconButton>

          {/* <IconButton
            size="small"
            color="inherit"
            onClick={() => props.history.push('/aboutus')}
            className={classes.buttons}
          >
            INFO
          </IconButton>

          <IconButton
            size="small"
            color="inherit"
            onClick={() => props.history.push('/usecases')}
            className={classes.buttons}
          >
            USECASES
          </IconButton>

          <IconButton
            size="small"
            color="inherit"
            onClick={() => props.history.push('/contactus')}
            className={classes.buttons}
          >
            CONTACT US
          </IconButton> */}

          <IconButton
            edge="end"
            size="small"
            color="inherit"
            onClick={handleLogin}
            className={classes.buttons}
          >
            {props.isAuthenticated && props.isAuthenticated.status
              ? 'LOGOUT'
              : 'LOGIN'}
          </IconButton>
        </Toolbar>
      </AppBar>
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
    isDrawerOpen,
  };
};

const mapDispatch = (dispatch) => {
  return {
    onClose: () => {
      dispatch({ type: reduxModule.screenSignIn.actions.SET_DRAWER_OPEN });
    },
    authenticationRevoked: (isAuthenticated) => {
      dispatch({
        type: reduxModule.screenSignIn.actions.AUTHENTICATION_REVOKED,
      });
    },
  };
};

export default compose(
  connect(mapState, mapDispatch),
  withStyles(useStyles)
)(Header);
