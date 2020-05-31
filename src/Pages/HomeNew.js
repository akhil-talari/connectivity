import React from 'react';

import con from '../images/logoNew.png';
import abhilash from '../images/avatar/Abhilash_New.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import InfoIcon from '@material-ui/icons/Info';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import reduxModule from '../redux-modules';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import { push } from 'react-router-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Paper from '@material-ui/core/Paper';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Popover from './PopOver';
import Image1 from '../images/1.jpg';
import Slider from './Slider';
import { Center } from 'devextreme-react/map';
import { Divider } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    justifyContent: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    background: 'skyblue',
    marginLeft: 5,
    height: 90,
    width: 100,
    //marginTop: theme.spacing(1),
  },
  appBar: {
    backgroundColor: 'white',
    width: '100%',

    top: 0,
  },
  Button: {
    margin: theme.spacing(1),
  },
  paperParent: {
    '& >div:nth-child(3)': {
      width: '-webkit-fill-available',
      top: '100px !important',
      background: 'skyblue',
    },
    '& >div:nth-child(3)>ul': {
      padding: 0,
    },
  },
  flex: {
    flex: 1,
    color: theme.palette.common.white,
  },
  toolbar: {
    //alignItems: 'flex-start',
    //justifyContent: 'flex-end'
    paddingRight: 0,
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  icon: {
    lineHeight: '3.0',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  background: {
    //width: '100vw'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'pink',
  },
  toolbarDrawer: theme.mixins.toolbar,
  title: {
    textAlign: 'center',
  },
  buttons: {
    padding: 12,

    //justifyContent: 'flex-end',
  },
  gridItem: {
    // border: 'solid',
    // borderColor: 'white',
  },
  menuItem: {
    textAlign: 'center',
    background: 'skyblue',
    height: 48,
    padding: 0,
  },
  menuItemSelected: {
    textAlign: 'center',
    background: 'steelblue',
  },
  paper: {
    '& >div:nth-child(3)': {
      top: '148px !important',
      width: '-webkit-fill-available',
      background: 'steelblue',
    },
  },
  caption: {
    fontSize: '0.55rem',
    fontWeight: '800',
    marginTop: '-50px',
    marginLeft: '80px',
    fontStyle: 'italic',
  },
  bottomInfo: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: '1.25rem',
  },
  popover: {
    pointerEvents: 'none',
  },
  paperPopover: {
    padding: theme.spacing(1),
  },
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    '& >img': {
      objectFit: 'fill',
    },
  },
  divider: {
    backgroundColor: 'skyblue',
  },
});

const StyledMenu = (props) => {
  console.log('props of styleed menu', props);
  return (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  );
};

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: 'lightblue',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },

      '& .div': {
        top: '100px',
      },
    },
  },
}))(MenuItem);

function HomeNew(props) {
  //const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [aboutEl, setAboutEl] = React.useState(null);

  const [solutionEl, setSolutionEl] = React.useState(null);

  const [partnerEl, setPartnerEl] = React.useState(null);

  const [contactEl, setContactEl] = React.useState(null);

  const openPartner = (event) => {
    setSolutionEl(null);
    setPartnerEl(event.currentTarget);
  };

  const closePartner = (event) => {
    setPartnerEl(null);
  };

  const openContact = (event) => {
    setContactEl(event.currentTarget);
  };

  const closeContact = (event) => {
    setContactEl(null);
  };

  const openAboutUs = (event) => {
    setAboutEl(event.currentTarget);
  };

  const closeAboutUs = () => {
    setAboutEl(null);
  };

  const openSolutions = (event) => {
    setSolutionEl(event.currentTarget);
  };

  const closeSolutions = () => {
    setSolutionEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { classes } = props;

  return (
    <div className="App">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item lg={2}>
              <img
                src={con}
                alt="logo"
                style={{
                  marginTop: '0px',
                  marginLeft: '0px',
                  height: '100px',
                  width: '200px',
                }}
              />
              <Typography
                variant="caption"
                component="div"
                className={classes.caption}
              >
                For Connected World
              </Typography>
            </Grid>
            <Grid item lg={4} style={{}}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                style={{
                  justify: 'flex-start',
                  background: 'skyblue',
                }}
                color="inherit"
                aria-label="open drawer"
                onClick={handleClick}
              >
                <MenuIcon style={{ color: 'white', fontSize: 40 }} />
              </IconButton>
            </Grid>
            <Grid
              item
              lg={6}
              style={{
                height: '104px',
              }}
            >
              <Paper
                elevation={0}
                style={{
                  background: 'skyblue',
                  height: 50,
                  width: 300,
                  float: 'right',
                }}
              >
                <Typography
                  variant="body1"
                  align="center"
                  style={{
                    fontFamily: 'calibri',
                    fontSize: 18,
                    color: 'white',
                  }}
                >
                  Connected Living
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{
                    fontFamily: 'calibri',
                    fontSize: 18,
                    color: 'white',
                  }}
                >
                  Connected World
                </Typography>
                <Grid container style={{ textAlign: 'center' }} spacing={1}>
                  <Grid item lg={2}>
                    <Button
                      component="a"
                      color="inherit"
                      aria-label="Facebook"
                      className={classes.Button}
                      startIcon={<FacebookIcon />}
                      target="_blank"
                      href=""
                    />
                  </Grid>
                  <Grid item lg={2}>
                    <Button
                      component="a"
                      color="inherit"
                      aria-label="Twitter"
                      className={classes.Button}
                      startIcon={<TwitterIcon />}
                      target="_blank"
                      href="https://twitter.com/home"
                    />
                  </Grid>
                  <Grid item lg={2}>
                    <Button
                      component="a"
                      color="inherit"
                      aria-label="Linkedin"
                      className={classes.Button}
                      startIcon={<LinkedInIcon />}
                      target="_blank"
                      href="https://www.linkedin.com/company/conectivit%C3%A9/?viewAsMember=true"
                    />
                  </Grid>
                  <Grid item lg={2}>
                    <Button
                      component="a"
                      color="inherit"
                      aria-label="Youtube"
                      className={classes.Button}
                      startIcon={<YouTubeIcon />}
                      target="_blank"
                      href=""
                    />
                  </Grid>
                  <Grid item lg={2}>
                    <Button
                      component="a"
                      color="inherit"
                      aria-label="Instagram"
                      className={classes.Button}
                      startIcon={<InstagramIcon />}
                      target="_blank"
                      href=""
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            className={classes.paperParent}
            onClose={handleClose}
          >
            <Grid container style={{ flexWrap: 'noWrap', height: 48 }}>
              <Grid item lg={3} className={classes.gridItem}>
                <StyledMenuItem
                  className={classes.menuItem}
                  onClick={openAboutUs}
                  style={Boolean(aboutEl) ? { background: 'steelblue' } : null}
                >
                  <ListItemText primary="About Us" style={{ color: 'white' }} />
                </StyledMenuItem>
                <Menu
                  id="customized-nested-menu"
                  anchorEl={aboutEl}
                  keepMounted
                  open={Boolean(aboutEl)}
                  onClose={closeAboutUs}
                  className={classes.paper}
                >
                  <Grid container style={{ height: 48 }}>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Who we are"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Inspired by future"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                  </Grid>
                </Menu>
              </Grid>

              <Grid item lg={3} className={classes.gridItem}>
                <StyledMenuItem
                  className={classes.menuItem}
                  onClick={openSolutions}
                  style={
                    Boolean(solutionEl) ? { background: 'steelblue' } : null
                  }
                >
                  <ListItemText
                    primary="Solutions"
                    style={{ color: 'white' }}
                  />
                </StyledMenuItem>
                <Menu
                  id="customized-nested-menu"
                  anchorEl={solutionEl}
                  keepMounted
                  open={Boolean(solutionEl)}
                  onClose={closeSolutions}
                  className={classes.paper}
                >
                  <Grid container style={{ height: 48 }}>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Kiosks"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="IoT/M2M"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="MDM"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={1} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="API's"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Facial Recognition"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={1} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="OCR"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Emergency Services"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                  </Grid>
                </Menu>
              </Grid>
              <Grid item lg={3} className={classes.gridItem}>
                <StyledMenuItem
                  className={classes.menuItem}
                  onClick={openPartner}
                  style={
                    Boolean(partnerEl) ? { background: 'steelblue' } : null
                  }
                >
                  <ListItemText
                    primary="Partner With Us"
                    style={{ color: 'white' }}
                  />
                </StyledMenuItem>
                <Menu
                  id="customized-nested-menu"
                  anchorEl={partnerEl}
                  keepMounted
                  open={Boolean(partnerEl)}
                  onClose={closePartner}
                  className={classes.paper}
                >
                  <Grid container style={{ height: 48 }}>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Enterprises"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Manufacturers"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Retailers"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="eUICC providers"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Telecom Service Providers"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Consulting"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                  </Grid>
                </Menu>
              </Grid>
              <Grid item lg={3} className={classes.gridItem}>
                <StyledMenuItem
                  className={classes.menuItem}
                  onClick={openContact}
                  style={
                    Boolean(contactEl) ? { background: 'steelblue' } : null
                  }
                >
                  <ListItemText
                    primary="Contact Us"
                    style={{ color: 'white' }}
                  />
                </StyledMenuItem>
                <Menu
                  id="customized-nested-menu"
                  anchorEl={contactEl}
                  keepMounted
                  open={Boolean(contactEl)}
                  onClose={closeContact}
                  className={classes.paper}
                >
                  <Grid container style={{ height: 48 }}>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Write to us"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Careers"
                          style={{ color: 'white' }}
                        />
                      </StyledMenuItem>
                    </Grid>
                  </Grid>
                </Menu>
              </Grid>
            </Grid>
          </StyledMenu>
        </Toolbar>
      </AppBar>
      <Slider autoPlay={6} />
      <Grid
        container
        spacing={2}
        style={{
          margin: 0,
          backgroundImage: `url('${Image1}')`,
          opacity: 0.8,
          marginTop: 10,
        }}
      >
        <Grid
          item
          lg={5}
          style={{
            textAlign: 'center',
            padding: '18px',
            color: 'white',
            paddingLeft: 28,
          }}
        >
          <Typography
            variant="h6"
            display="inline"
            style={{ color: 'skyblue', marginTop: 12, marginLeft: 8 }}
          >
            Conectivite for World
          </Typography>

          <Typography
            display="inline"
            style={{
              fontSize: '1.0rem',
              textAlign: 'justify',
              marginTop: 12,
              marginLeft: 12,
            }}
          >
            "In a forever changing world where the fundamentals of business and
            lifestyle are continuously redefined as we move towards Autonomous,
            self-service and a connected world where we all need a safe, secure
            and a reliable self-service platform to Provision and enable any
            network on any device at any given point of time straight out of the
            box. At Conectivite we adhere and comply to norms and regulations of
            the local law of the land our telecom partners operate in, using our
            sophisticated algorithms."
          </Typography>
        </Grid>
        <Grid
          item
          lg={1}
          style={{
            textAlign: '-webkit-center',
            padding: '18px',
            color: 'white',
          }}
        >
          <Divider orientation="vertical" light className={classes.divider} />
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            textAlign: 'center',
            padding: '18px',
            color: 'white',
          }}
        >
          <Typography
            variant="h6"
            style={{ color: 'skyblue' }}
            display="inline"
          >
            GCCP by Connectivite - One Global Platform
          </Typography>

          <Typography
            style={{
              fontSize: '1.0rem',
              textAlign: 'justify',
              marginTop: 12,
              marginLeft: 12,
            }}
            display="inline"
          >
            "GCCP*patent pending (Global Converged Conectivite Platform)
            provides a seamless, always ON global interface that completes and
            compliments the valuable partners in Communication Eco System
            enabling subscribers and businesses to provision any Carrier on
            demand OTA (over the air) along with manageability of network
            profiles with ease for eSIM enabled cell phones, Connected cars, IoT
            devices, Flying mobility, M2M, Tablets, Laptops etc. straight out of
            the box. "
          </Typography>
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
    isDrawerOpen,
  };
};

const mapDispatch = (dispatch) => {
  return {
    onMouseOut: () => {
      dispatch({ type: reduxModule.screenSignIn.actions.SET_DRAWER_OPEN });
      dispatch(push('/'));
    },
    authenticationRevoked: (isAuthenticated) => {
      dispatch({
        type: reduxModule.screenSignIn.actions.AUTHENTICATION_REVOKED,
      });
    },
  };
};

export default compose(
  connect(mapState, mapDispatch),
  withStyles(useStyles)
)(HomeNew);
