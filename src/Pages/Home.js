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
import Header from './Header';

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

  return (
    <div className="App">
      <Header
        isAuthenticated={props.isAuthenticated}
        onClose={props.onClose}
        history={props.history}
        authenticationRevoked={props.authenticationRevoked}
      />
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
