import React from 'react';
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
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import PeopleIcon from '@material-ui/icons/People';

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
  content: {
    // marginTop: '200px',
    // fontSize: '20px',
    // marginLeft: '100px'
  }
});

function AboutUs(props) {
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
              onClick={() => this.props.history.push('/contactus')}
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
        style={{
          backgroundColor: 'pink',
          noWrap: 'wrap',
          opacity: 0.8,
          height: '300px',
          width: '1000px',
          marginLeft: '200px',
          marginTop: '100px'
        }}
      >
        <Typography align="center" color="white" style={{ paddingTop: '80px' }}>
          <b>Vision:</b> To be a global leader for providing seamless
          communications enabling platform across connected eco systems.
        </Typography>
        <Typography
          align="center"
          color="white"
          className={classes.content}
          style={{
            marginTop: '30px',
            paddingLeft: '90px',
            paddingRight: '90px'
          }}
        >
          <b>About us:</b> We are a young avant-garde techno space that bridges
          the gap in the physical SIM and eSIM technology with our unique Global
          Converged Conectivite Platform (GCCP)*𝑃𝑎𝑡𝑒𝑛𝑡 𝑃𝑒𝑛𝑑𝑖𝑛𝑔 "enabling
          subscribers and businesses to provision any Carrier " "on demand OTA
          (over the air)"
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
  return {
    isAuthenticated
  };
};

export default compose(connect(mapState, null), withStyles(useStyles))(AboutUs);
