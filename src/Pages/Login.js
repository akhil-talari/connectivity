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
import PeopleIcon from '@material-ui/icons/People';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onLogin = () => {
    this.props.onLogin();
  };

  render() {
    const { classes } = this.props;
    if (this.props.isAuthenticated.status) {
      return <Redirect to="/" />;
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
            marginTop: '20px',
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
                className={classes.textField}
                style={{ marginTop: '-30px' }}
                onChange={(event) =>
                  this.props.usernameChanged(event.target.value)
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Password"
                type="password"
                variant="outlined"
                className={classes.textField}
                style={{ marginTop: '30px' }}
                onChange={(event) =>
                  this.props.passwordChanged(event.target.value)
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={12}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginTop: '30px',
                  marginLeft: '180px',
                  width: '150px'
                }}
                onClick={this.onLogin}
              >
                Submit
              </Button>
            </Grid>
            <Grid item lg={12}>
              <Typography
                style={{
                  color: 'red',
                  paddingLeft: '150px',
                  paddingTop: '2px'
                }}
              >
                {this.props.isAuthenticated.message}
              </Typography>
            </Grid>
            <Grid
              item
              lg={this.props.createAccountMessage.status === 'Success' ? 12 : 6}
              style={{ marginTop: '35px' }}
            >
              <Typography
                style={{
                  color: 'blue',
                  paddingLeft: '50px',
                  paddingTop: '2px'
                }}
              >
                {this.props.createAccountMessage.status === 'Success'
                  ? this.props.createAccountMessage.message
                  : "Don't have an account yet?"}
              </Typography>
            </Grid>
            {this.props.createAccountMessage.status !== 'Success' && (
              <Grid item lg={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: '30px' }}
                  onClick={this.props.onCreateAccount}
                >
                  Create Account
                </Button>
              </Grid>
            )}
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
  const createAccountMessage = reduxModule.screenSignIn.selectors.getCreateAccountMessage(
    state,
    props
  );

  const loginText = reduxModule.screenSignIn.selectors.getLoginText(
    state,
    props
  );

  return {
    isAuthenticated,
    isDrawerOpen,
    createAccountMessage,
    loginText
  };
};

const mapDispatch = (dispatch) => {
  return {
    onLogin: () => {
      dispatch({ type: reduxModule.screenSignIn.actions.AUTHENTICATE_USER });
    },
    onCreateAccount: () => {
      dispatch(push('/createAccount'));
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
)(Login);
