import React, { Component } from 'react';
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
    width: drawerWidth
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
    return (
      <div className="App">
        <Home {...this.props} from={this.state.from} />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbarDrawer} />
          <Divider />
          <List>
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
        <main className={classes.content}>
          {this.state.menuOption === 1 && (
            <div className={classes.root}>
              <Grid container spacing={1}>
                <Grid item>
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
                      <MenuItem key="India" value="0">
                        India
                      </MenuItem>
                      <MenuItem key="US" value="1">
                        US
                      </MenuItem>
                      <MenuItem key="Aus" value="2">
                        Australia
                      </MenuItem>
                      <MenuItem key="UK" value="3">
                        UK
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
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
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
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
              </Grid>
              <Grid container spacing={1}>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: '50px', marginTop: '30px' }}
                    onClick={this.handleRegister}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
              <Register
                open={this.state.open}
                handleClose={this.handleClose}
                menuOption={this.state.configurator}
              />
            </div>
          )}
          {this.state.menuOption === 2 && (
            <div className={classes.root}>
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
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(User);
