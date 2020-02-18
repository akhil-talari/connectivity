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
import Header from './Header';


const styles = (theme) => ({
  root: {
    flexGrow: 1,
    justifyContent:'center'
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
    //marginLeft: '150px'
    //padding: 18
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
        <Header
          isAuthenticated={this.props.isAuthenticated}
          onClose={this.props.onClose}
          history={this.props.history}
          authenticationRevoked={this.props.authenticationRevoked}
        />
        <Grid container spacing ={1} style={{textAlign: '-webkit-center'}}>
          <Grid item xl={12} lg={12} className={classes.root} style={{verticalAlign:'center', paddingTop: 50}}>
          <img
            src={con}
            alt="logo"
            style={{ marginTop: '0px', marginLeft: '0px' }}
          />
          </Grid>
          <Grid item container spacing={1} >
            <Grid item xl={12} lg={12} style={{padding:18}}>
              <TextField
                id="input-with-icon-grid"
                label="User Name"
                variant="outlined"
                className={classes.textField}
                
                onChange={(event) =>
                  this.props.usernameChanged(event.target.value)
                }
              />
            </Grid>
            <Grid item xl={12} lg={12} style={{padding:18}}> 
              <TextField
                id="input-with-icon-grid"
                label="Password"
                type="password"
                variant="outlined"
                className={classes.textField}
                onChange={(event) =>
                  this.props.passwordChanged(event.target.value)
                }
              />
            </Grid>
          </Grid>
            <Grid item lg={12} xl={12} style={{padding:18}}>
              <Button
                variant="contained"
                color="primary"
                style={{
                  
                  width: '150px'
                }}
                onClick={this.onLogin}
              >
                Submit
              </Button>
            </Grid>
            <Grid item lg={12} xl={12}>
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
              container
              spacing={1} 
            >
              <Grid item lg={this.props.createAccountMessage.status === 'Success' ? 12 : 6} style={this.props.createAccountMessage.status === 'Success' ? {textAlign:'-webkit-center', padding: 18} : {textAlign:'right', padding: 18}}>
              <Typography
                style={{
                  color: 'blue',
                  
                }}
              >
                {this.props.createAccountMessage.status === 'Success'
                  ? this.props.createAccountMessage.message
                  : "Don't have an account yet?"}
              </Typography>
              </Grid>
            {this.props.createAccountMessage.status !== 'Success' && (
              <Grid item lg={6} style={{textAlign:'left', padding: 18}}>
                <Button
                  variant="contained"
                  color="secondary"         
                  onClick={this.props.onCreateAccount}
                >
                  Create Account
                </Button>
              </Grid>
            )}
          
          </Grid>
        </Grid>
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
