import React, { useState, useRef } from 'react';
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
import Grid from '@material-ui/core/Grid';
import Mobile from '../images/MobilesWearables.png';
import hand from '../images/Mobile Hand.png';
import notebook from '../images/Notebooks.png';
import connectedCars from '../images/ConnectedCars.png';
import mobility from '../images/FlyingMobility.png';
import custom from '../images/CustomSolutions.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { push } from 'react-router-redux';

const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    justifyContent: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    //marginTop: theme.spacing(1),
    
  },
  flex: {
    flex: 1,
    color: theme.palette.common.white
  },
  toolbar: {
    //alignItems: 'flex-start',
    //justifyContent: 'flex-end'
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
  toolbarDrawer: theme.mixins.toolbar,
  title: {
    
    textAlign:'center'
  },
  buttons: {
    padding: 12,
    
    //justifyContent: 'flex-end',
    
  }
});

const scrollToRef = (ref) => {
    console.log("offset top",ref.current.offsetTop)
   return  window.scrollTo(0, ref.current.offsetTop)   
}




function RootNew(props) {
  //const classes = useStyles();
  const handleLogin = () => {
    props.isAuthenticated.status
      ? props.authenticationRevoked()
      : props.history.push('/login');
  };
  const { classes } = props;
  const myRef = useRef(null)
  const myRefHome = useRef(null)
  const myRefUseCase = useRef(null)
  const myRefContactUs = useRef(null)

const executeScrollToInfo = () => scrollToRef(myRef)
const executeScrollToUseCase = () => scrollToRef(myRefUseCase)
const executeScrollToContactUs = () => scrollToRef(myRefContactUs)
const executeScrollToHome = () => scrollToRef(myRefHome)

  return (
    <div className="App">
      <AppBar position="fixed" style={{ backgroundColor: '#f06292', justify:'flex-end' }}>
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={1}>

          <Grid item lg={6} xl={12}>
          {props.isAuthenticated && props.isAuthenticated.status && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              style={{justify:'flex-start'}}
              color="inherit"
              aria-label="open drawer"
              
            >
              <MenuIcon onClick={props.onClose}/>
            </IconButton>
          )}
          <Typography
            variant="h5"
            className={classes.title}
            noWrap
          ></Typography>
          </Grid>
          <Grid item container lg={6} style={{justifyContent:'flex-end'}}>
            <Grid item lg={2} style={{textAlign:'center'}}>
          <IconButton
            size="small"
            color="inherit"
            onClick={executeScrollToHome}
            className={classes.buttons}
          >
            HOME
          </IconButton>
          </Grid>
          <Grid item lg={2} style={{textAlign:'center'}}>
          <IconButton
            size="small"
            color="inherit"
            onClick={executeScrollToInfo}
            className={classes.buttons}
          >
            INFO
          </IconButton>
          </Grid>
          <Grid item lg={2} style={{textAlign:'center'}}>
          <IconButton
            size="small"
            color="inherit"
            onClick={executeScrollToUseCase}
            className={classes.buttons}
          >
            USECASES
          </IconButton>
          </Grid>
          <Grid item lg={3} style={{textAlign:'center'}}>
          <IconButton
            size="small"
            color="inherit"
            onClick={executeScrollToContactUs}
            className={classes.buttons}
          >
            CONTACT US
          </IconButton>
</Grid>
<Grid item lg={2} style={{textAlign:'center'}}>
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
          </Grid>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container spacing = {1} style={{textAlign: '-webkit-center'}}>
        <Grid item container  xl={12} lg={12} className={classes.root} >
      
      <Grid item lg={12} style={{verticalAlign:'center', paddingTop: 300}} ref={myRefHome}>
        <img
          src={con}
          alt="logo"
          
        />
        </Grid>
        <Grid item lg={12}>
        <Typography
          variant="h5"
          align="center"
          color="white"
          
        >
          Are you ready to embrace the change for seamless Conectivité ?
        </Typography>
        </Grid>
      
      </Grid>
      <div style={{height:100, width: '100vw', marginTop: 'auto'}} ref={myRef} />
      <Grid item container spacing ={1} className={classes.root} >
      <Grid item xl={12} lg={12}>
      <Typography
            variant="h3"
            
            noWrap
            className={classes.content}
          >ABOUT US</Typography>
          </Grid>
          <Grid item xl={12} lg ={12} style={{
          backgroundColor: 'pink',
          noWrap: 'wrap',
          opacity: 0.8,
          height: '300px',
          width: '1000px',
          justifyContent:'center'
        }}>
      
          
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
      
      </Grid>
      </Grid>
      <div style={{height:100, width: '100vw', marginTop: 'auto'}} ref={myRefUseCase} />
      <Grid item xl={12} className={classes.root} >
      <div >
        <Typography
          align="center"
          color="white"
          className={classes.content}
          
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
      </Grid>
      <div style={{height: 100, width: '100vw', marginTop: 'auto'}} ref={myRefContactUs} />
      <Grid item lg={12} container className={classes.root} >
      <Typography
          align="center"
          color="white"
          className={classes.content}
          
          variant="h3"
        >
          CONTACT US
        </Typography>
      <Grid item lg={12} >
            <TextField
              id="input-with-icon-grid"
              label="Name"
              type="text"
              name="name"
              variant="outlined"
              className={classes.textField}
              style={{ marginTop: '10px' }}
            />
          </Grid>
          <Grid item lg={12} >
            <TextField
              id="input-with-icon-grid"
              label="Email ID"
              type="email"
              name="email"
              variant="outlined"
              className={classes.textField}
              style={{ marginTop: '10px' }}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              id="input-with-icon-grid"
              label="Contact Number"
              type="text"
              name="contactnumber"
              variant="outlined"
              className={classes.textField}
              style={{ marginTop: '10px' }}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              id="input-with-icon-grid"
              label="Country"
              type="text"
              name="country"
              variant="outlined"
              className={classes.textField}
              style={{ marginTop: '10px' }}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              id="input-with-icon-grid"
              label="Message"
              type="text"
              multiline
              name="message"
              variant="outlined"
              className={classes.textField}
              style={{ marginTop: '10px' }}
            />
          </Grid>
          <Grid item lg={12}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: 50, marginTop: 30 }}
            >
              Submit
            </Button>
          </Grid>
          </Grid>
      </Grid>
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
      dispatch(push('/'))
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
)(RootNew);
