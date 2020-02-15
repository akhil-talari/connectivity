import React, { Component } from 'react';
import con from '../images/Conectivite.png';
import logo from '../images/logo.jpg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Home from './Home';
import Register from './Register';
import { InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import profile from '../images/profile.jpg';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import reduxModule from '../redux-modules';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '-20px'
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
  toolbarDrawer: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'pink'
  },
  selectMenu: {
    [theme.breakpoints.down('lg')]: {
      marginTop: '3px'
    },
    marginTop: '200px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: '500px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,

    flexGrow: 1
  },
  paper: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      marginTop: '80px',
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  },
  textFieldRight: {
    marginTop: '80px'
  }
});

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOption: 0,
      country: '',
      serviceProviderList: [],
      serviceProvider: '',
      configurator: '',
      from: 'user',
      open: false
    };

    this.serviceProviders = {
      0: ['Airtel', 'Vodafone', 'BSNL', 'Idea', 'Jio'],
      1: ['Verizon', 'AT&T', 'Lycamobile', 'TMobile', 'Cricket'],
      2: ['Telstra'],
      3: ['BT']
    };

    this.handleChange = (event) => {
      if (event.target.name === 'country') {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value,
          serviceProviderList: this.serviceProviders[event.target.value]
        });
      } else {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value
        });
      }
    };

    this.handleRegister = (event) => {
      this.setState({
        ...this.state,
        open: true
      });
    };

    this.handleClose = (event) => {
      this.setState({
        ...this.state,
        open: false
      });
    };
  }
  render() {
    const { classes } = this.props;
    return this.props.isAuthenticated && this.props.isAuthenticated.status ? (
      <div className="App">
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
          open={this.props.isOpen}
        >
          <div
            className={classes.toolbarDrawer}
            style={{ backgroundColor: 'teal', opacity: 0.7 }}
          >
            <img src={con} alt="logo" style={{ height: '60px' }} />
          </div>
          <Divider />
          <List style={{ backgroundColor: 'pink' }}>
            {[
              'Dash Board',
              'Register a new user',
              'Manage Users',
              'Usage Statistics',
              'Pay bills'
            ].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => this.setState({ menuOption: index, from: '' })}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapState = (state, props) => {
  const isAuthenticated = reduxModule.screenSignIn.selectors.isAuthenticated(
    state,
    props
  );
  return {
    isAuthenticated
  };
};

export default compose(connect(mapState, null), withStyles(styles))(Menu);
