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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import chart from '../images/statistics.png';
import Header from './Header'

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

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOption: 0,
      country: '',
      serviceProviderList: [],
      serviceProvider: '',
      configurator: '',
      from: 'user',
      open: false,
      isDrawerOpen: true
    };

    this.serviceProviders = {
      India: ['Airtel', 'Vodafone', 'BSNL', 'Idea', 'Jio'],
      US: ['Verizon', 'AT&T', 'Lycamobile', 'TMobile', 'Cricket'],
      AUS: ['Telstra'],
      UK: ['BT']
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
        menuOption: 1,
        country: '',
        serviceProviderList: [],
        serviceProvider: '',
        configurator: '',
        from: 'user',
        open: false,
        isDrawerOpen: true
      });
    };
    this.notify = () => toast('You are logged in Successfully!');
  }

  onClose = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const { classes } = this.props;
    return this.props.isAuthenticated && this.props.isAuthenticated.status ? (
      <div
        className="App"
        style={{ backgroundColor: 'white', height: '1000px' }}
      >
        <Header
        isAuthenticated={this.props.isAuthenticated}
        onClose={this.props.onClose}
        history={this.props.history}
        authenticationRevoked={this.props.authenticationRevoked}
      />
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
          variant="temporary"
          anchor="left"
          open={this.props.isDrawerOpen}
          onClose={this.onClose}
        >
          <div
            className={classes.toolbarDrawer}
            style={{ backgroundColor: 'teal', opacity: 0.7 }}
          >
            <img src={con} alt="logo" style={{ height: '60px', width:'250px' }} />
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
                onClick={() => {
                  this.setState({
                    menuOption: index,
                    from: ''
                  });
                  this.props.onClose();
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          {this.state.menuOption === 1 && (
            <div
              className={classes.root}
              style={{
                marginTop: '80px',
                marginLeft: '80px'
              }}
            >
              <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item lg={12} md={12} xs={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel style={{ fontSize: '14px' }} htmlFor="country">
                      Select a Country
                    </InputLabel>
                    <Select
                      inputProps={{
                        name: 'country',
                        id: 'country'
                      }}
                      value={this.state.country}
                      onChange={this.handleChange}
                    >
                      <MenuItem key="India" value="India">
                        India
                      </MenuItem>
                      <MenuItem key="US" value="US">
                        US
                      </MenuItem>
                      <MenuItem key="AUS" value="AUS">
                        Australia
                      </MenuItem>
                      <MenuItem key="UK" value="UK">
                        UK
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      id="demo-simple-select-filled-label"
                      style={{ fontSize: '14px' }}
                    >
                      Select a Service Provider
                    </InputLabel>
                    <Select
                      inputProps={{
                        name: 'serviceProvider',
                        id: 'serviceProvider'
                      }}
                      value={this.state.serviceProvider}
                      onChange={this.handleChange}
                    >
                      {this.state.serviceProviderList.map((text) => (
                        <MenuItem key={text} value={text}>
                          {text}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel
                      id="demo-simple-select-filled-label"
                      style={{ fontSize: '14px' }}
                    >
                      eSIM Configurator
                    </InputLabel>
                    <Select
                      inputProps={{
                        name: 'configurator',
                        id: 'configurator'
                      }}
                      value={this.state.configurator}
                      onChange={this.handleChange}
                    >
                      <MenuItem key="physicalToeSIM" value="physicalToeSIM">
                        Convert Physical SIM to eSIM
                      </MenuItem>
                      <MenuItem key="neweSIM" value="neweSIM">
                        Request for a new eSIM profile
                      </MenuItem>
                      <MenuItem key="port" value="port">
                        Port between devices
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleRegister}
                    style={{ marginLeft: 50, marginTop: 30 }}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>

              <Register
                open={this.state.open}
                handleClose={this.handleClose}
                menuOption={this.state.configurator}
                country={this.state.country}
                registerUser={this.props.registerUser}
                serviceProvider={this.state.serviceProvider}
                configurator={this.state.configurator}
                sendOTP={this.props.sendOTP}
              />
            </div>
          )}
          {this.state.menuOption === 2 && (
            <div
              className={classes.root}
              style={{
                backgroundColor: 'white'
              }}
            >
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    id="search"
                    placeholder="Search by Name/ emp ID"
                    type="search"
                    className={classes.textField}
                    style={{ marginLeft: '180px' }}
                    margin="normal"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={1}>
                <Grid item>
                  <div className={classes.paper}>
                    <img src={profile} alt="Anusha" />
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    id="employeeId"
                    label="Employee ID"
                    defaultValue="1619484"
                    type="text"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <TextField
                    id="details"
                    placeholder="Details of current plan activated, data consumed till date etc"
                    type="text"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows="4"
                  />
                </Grid>

                <Grid item style={{ marginLeft: '200px', marginTop: '-300px' }}>
                  <Grid container spacing={1}>
                    <Grid item>
                      <TextField
                        id="carrier"
                        label="Registered Carrier"
                        defaultValue="T Mobile"
                        type="text"
                        className={classes.textFieldRight}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <TextField
                        id="ssn"
                        placeholder="SIM SSN"
                        type="text"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <TextField
                        id="emailId"
                        label="Email ID"
                        defaultValue="bula.anusha@gmail.com"
                        type="text"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <TextField
                        id="mobileNumber"
                        label="Registered mobile number"
                        defaultValue="8326066190"
                        type="number"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <TextField
                        id="alternativeNumber"
                        placeholder="Alternative number"
                        type="number"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <TextField
                        id="modifyProfile"
                        placeholder="Modify profile"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <TextField
                        id="deactivateProfile"
                        placeholder="Deactivate Profile"
                        type="text"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: '230px', marginTop: '30px' }}
                  >
                    Manage Users
                  </Button>
                </Grid>
              </Grid>
            </div>
          )}
          {this.state.menuOption === -1 && (
            <div>
              <img
                src={con}
                alt="logo"
                style={{ marginTop: '100px', marginLeft: '400px' }}
              />
              <Typography
                variant="h5"
                align="center"
                color="white"
                style={{
                  marginTop: '-20px'
                }}
              >
                Are you ready to embrace the change for seamless Conectivité ?
              </Typography>
            </div>
          )}
          {this.state.menuOption === 0 && (
            <img
              src={chart}
              alt="chart"
              style={{
                marginLeft: '-40px',
                marginTop: '100px',
                height: '300px'
              }}
            />
          )}
        </main>
      </div>
    ) : (
      <Redirect to="/home" />
    );
  }
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

  const serviceRequestNumber = reduxModule.screenSignIn.selectors.getServiceRequestNumber(
    state,
    props
  );
  return {
    isAuthenticated,
    isDrawerOpen,
    serviceRequestNumber
  };
};

const mapDispatch = (dispatch) => {
  return {
    onClose: () => {
      dispatch({ type: reduxModule.screenSignIn.actions.SET_DRAWER_OPEN });
    },
    registerUser: (
      country,
      serviceProvider,
      configurator,
      ssn,
      number,
      email,
      type,
      reason
    ) => {
      dispatch({
        type: reduxModule.screenSignIn.actions.REGISTER_NEW_USER,
        payload: {
          country,
          serviceProvider,
          configuration: configurator,
          ssn,
          mobileNumber: number,
          email,
          subscriptionType: type,
          reason
        }
      });
    },
    sendOTP: (email) => {
      dispatch({
        type: reduxModule.screenSignIn.actions.SEND_OTP,
        email
      });
    }
  };
};

export default compose(
  connect(mapState, mapDispatch),
  withStyles(styles)
)(User);
