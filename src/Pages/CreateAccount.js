import { Component } from 'react';
import reduxModule from '../redux-modules';
import React from 'react';
import { push } from 'react-router-redux';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import con from '../images/Conectivite.png';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel } from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import PeopleIcon from '@material-ui/icons/People';

const styles = (theme) => ({
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
  rootText: {
    '& > *': {
      marginLeft: theme.spacing(1),
      width: 200,
      align: 'center'
    }
  },
  textField: {
    marginLeft: '150px'
  }
});

class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      loc: ''
    };

    this.handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
  }

  onCreateUser = () => {
    this.props.onCreateUser(
      this.state.username,
      this.state.email,
      this.state.loc
    );
  };

  render() {
    const { classes } = this.props;
    if (this.props.accountCreationMessage.status === 'Success') {
      return (
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      );
    }

    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: '#f06292' }}>
          <Toolbar className={classes.toolbar}>
            {this.props.isDrawerOpen && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
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
                onClick={() => this.props.history.push('/home')}
              >
                <HomeIcon className={classes.icon} />
              </IconButton>
            </Tooltip>

            <Tooltip id="tooltip-info" title="About Us">
              <IconButton
                size="small"
                color="inherit"
                onClick={() => this.props.history.push('/aboutus')}
              >
                <InfoIcon className={classes.icon} />
              </IconButton>
            </Tooltip>

            <Tooltip id="tooltip-info" title="Use Cases">
              <IconButton
                size="small"
                color="inherit"
                onClick={() => this.props.history.push('/usecases')}
              >
                <PeopleIcon className={classes.icon} />
              </IconButton>
            </Tooltip>

            <Tooltip id="tooltip-info" title="Contact Us">
              <IconButton
                size="small"
                color="inherit"
                onClick={() => this.props.history.push('/contactus')}
              >
                <ContactPhoneIcon className={classes.icon} />
              </IconButton>
            </Tooltip>

            <Tooltip
              id="tooltip-login"
              title={
                this.props.isAuthenticated && this.props.isAuthenticated.status
                  ? 'Logout'
                  : 'Login'
              }
            >
              <IconButton
                edge="end"
                size="small"
                color="inherit"
                onClick={
                  this.props.isAuthenticated &&
                  this.props.isAuthenticated.status
                    ? () => this.props.authenticationRevoked()
                    : () => this.props.history.push('/login')
                }
              >
                <AccountCircleIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <div
          className={classes.root}
          style={{
            marginTop: '10px',
            marginLeft: '400px',
            
            width: '500px',
            height: '500px'
          }}
        >
          <img
            src={con}
            alt="logo"
            style={{ marginTop: '0px', marginLeft: '0px' }}
          />
          <Grid container spacing={1}>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="User Name"
                variant="outlined"
                name="username"
                className={classes.textField}
                style={{ marginTop: '-10px' }}
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Email ID"
                type="email"
                name="email"
                variant="outlined"
                value={this.state.email}
                className={classes.textField}
                style={{ marginTop: '10px' }}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item>
              <FormControl style={{ marginLeft: '150px', marginTop: '10px' }}>
                <InputLabel
                  id="demo-simple-select-filled-label"
                  style={{ fontSize: '14px', marginLeft: '12px' }}
                >
                  Location
                </InputLabel>
                <Select
                  inputProps={{
                    name: 'loc',
                    id: 'loc'
                  }}
                  style={{ width: '200px' }}
                  variant="outlined"
                  value={this.state.loc}
                  onChange={this.handleChange}
                >
                  <MenuItem key="India" value="India">
                    India
                  </MenuItem>
                  <MenuItem key="US" value="US">
                    US
                  </MenuItem>
                  <MenuItem key="Australia" value="Australia">
                    Australia
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={12}>
              <Typography
                style={{
                  color: 'red',
                  paddingLeft: '150px'
                }}
              >
                {this.props.accountCreationMessage.message}
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: '30px', marginLeft: '180px' }}
                onClick={this.onCreateUser}
              >
                Create User
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
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

  const accountCreationMessage = reduxModule.screenSignIn.selectors.getAccountCreationMessage(
    state,
    props
  );
  return {
    isAuthenticated,
    isDrawerOpen,
    accountCreationMessage
  };
};

const mapDispatch = (dispatch) => {
  return {
    onCreateUser: (username, email, location) => {
      dispatch({
        type: reduxModule.screenSignIn.actions.CREATE_NEW_USER,
        payload: {
          userName: username,
          emailAddr: email,
          location: location
        }
      });
    },
    usernameChanged: (value) => {
      dispatch({
        type: reduxModule.screenSignIn.actions.USERNAME_CHANGED,
        value
      });
    },
    passwordChanged: (value) => {
      dispatch({
        type: reduxModule.screenSignIn.actions.PASSWORD_CHANGED,
        value
      });
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
  withStyles(styles)
)(CreateAccount);
