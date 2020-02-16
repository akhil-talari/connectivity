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
import Grid from '@material-ui/core/Grid';
import Mobile from '../images/MobilesWearables.png';
import hand from '../images/Mobile Hand.png';
import notebook from '../images/Notebooks.png';
import connectedCars from '../images/ConnectedCars.png';
import mobility from '../images/FlyingMobility.png';
import custom from '../images/CustomSolutions.png';
import Header from './Header';

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

  return (
    <div className="App">
      <Header
        isAuthenticated={props.isAuthenticated}
        onClose={props.onClose}
        history={props.history}
        authenticationRevoked={props.authenticationRevoked}
      />
      <div>
        <Typography
          align="center"
          color="white"
          className={classes.content}
          style={{
            marginTop: '100px',
            paddingLeft: '100px',
            paddingRight: '90px'
          }}
          variant="h3"
        >
          <b>GCCP</b>{' '}
        </Typography>
        <Grid container spacing={1} style={{ marginTop: 80, marginLeft: 70 }}>
          <Grid item lg={3}>
            <img src={Mobile} style={{ height: 100, width: 100 }}></img>
            <img src={hand} style={{ height: 100, width: 100 }}></img>
          </Grid>
          <Grid item lg={2}>
            <img src={notebook} style={{ height: 120, width: 120 }}></img>
          </Grid>
          <Grid item lg={2}>
            <img src={connectedCars} style={{ height: 120, width: 120 }}></img>
          </Grid>
          <Grid item lg={2}>
            <img src={mobility} style={{ height: 120, width: 120 }}></img>
          </Grid>
          <Grid item lg={2}>
            <img src={custom} style={{ height: 120, width: 120 }}></img>
          </Grid>
        </Grid>

        <Grid container spacing={1} style={{ marginTop: 0, marginLeft: 100 }}>
          <Grid item lg={3}>
            Mobiles/ Wearables
          </Grid>
          <Grid item lg={2}>
            Notebooks
          </Grid>
          <Grid item lg={2}>
            Connected Cars
          </Grid>
          <Grid item lg={2}>
            Flying Mobility
          </Grid>
          <Grid item lg={2}>
            Custom Solutions
          </Grid>
        </Grid>
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
