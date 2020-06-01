import React from 'react';
import Search from '@material-ui/icons/Search';
import con from '../images/logoFinal.png';
import abhilash from '../images/avatar/Abhilash_New.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import InfoIcon from '@material-ui/icons/Info';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import reduxModule from '../redux-modules';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { push } from 'react-router-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Tooltip from '@material-ui/core/Tooltip';
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
    paddingLeft: 0,
    paddingTop: 18,
    marginLeft: -24,
    height: 90,
    width: 100,
    //marginTop: theme.spacing(1),
  },
  appBar: {
    backgroundColor: 'white',
    width: '100%',
    height: 90,
    top: 0,
  },
  Button: {
    margin: theme.spacing(1),
  },
  menuPaper: {
    maxWidth: 'calc(100vw)',
  },
  paperParent: {
    '& >div:nth-child(3)': {
      top: '90px !important',
      background: 'skyblue',
      width: 'calc(100vw)',
      left: '0px !important',
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
  footer: {
    backgroundColor: 'steelblue',
    width: '100%',
    height: 80,
    opacity: 0.8,
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
      top: '138px !important',
      width: '-webkit-fill-available',
      background: 'steelblue',
      left: '0px !important',
    },
  },
  caption: {
    fontSize: '0.55rem',
    fontWeight: '800',
    marginTop: '-46px',
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
  searchLabel: {
    textAlign: 'center',
  },
  login: {
    color: 'black',
    marginLeft: 20,
    marginTop: 12,
  },
  textStyles: {
    color: 'steelblue',
    fontWeight: 800,
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

  const handleLogin = () => {
    props.isAuthenticated.status
      ? props.authenticationRevoked()
      : props.history.push('/login');
  };

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

  const buildFeedbackLink = () => {
    const to = 'abhi@conectivite.com';
    const subject = 'Thanks for taking the time to contact us';

    const body = [''];

    return `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body.join('\n\n'))}`;
  };

  return (
    <div className="App">
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item lg={2} style={{ marginLeft: -36 }}>
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
                For a Connected World
              </Typography>
            </Grid>
            <Grid item lg={4} style={{}}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                style={{
                  justify: 'flex-start',
                }}
                color="inherit"
                aria-label="open drawer"
                onClick={handleClick}
              >
                <MenuIcon style={{ color: 'skyblue', fontSize: 40 }} />
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
                  height: 50,
                  width: 300,
                  float: 'right',
                }}
              >
                <Grid container>
                  <Grid item lg={6}>
                    <TextField
                      id="search"
                      placeholder="Quick Search"
                      type="search"
                      className={classes.textField}
                      classes={{ label: classes.searchLabel }}
                      margin="normal"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    style={{ alignSelf: 'center', textAlign: 'start' }}
                  >
                    <Tooltip
                      id="tooltip-new-batch"
                      title={
                        props.isAuthenticated && props.isAuthenticated.status
                          ? 'LOGOUT'
                          : 'LOGIN'
                      }
                    >
                      <AccountCircleIcon
                        style={{ color: 'skyblue', fontSize: 30 }}
                        className={classes.login}
                        onClick={handleLogin}
                      />
                    </Tooltip>
                  </Grid>
                </Grid>
                <Grid container style={{ textAlign: 'center' }}>
                  <Grid item lg={1} style={{ marginLeft: -22 }}>
                    <Button
                      component="a"
                      color="inherit"
                      aria-label="Facebook"
                      style={{ color: 'steelblue' }}
                      className={classes.Button}
                      startIcon={<FacebookIcon />}
                      target="_blank"
                      href=""
                    />
                  </Grid>
                  <Grid item lg={1} style={{ marginLeft: 12 }}>
                    <Button
                      style={{ color: 'steelblue' }}
                      component="a"
                      color="inherit"
                      aria-label="Twitter"
                      className={classes.Button}
                      startIcon={<TwitterIcon />}
                      target="_blank"
                      href="https://twitter.com/home"
                    />
                  </Grid>
                  <Grid item lg={1} style={{ marginLeft: 12 }}>
                    <Button
                      style={{ color: 'steelblue' }}
                      component="a"
                      color="inherit"
                      aria-label="Linkedin"
                      className={classes.Button}
                      startIcon={<LinkedInIcon />}
                      target="_blank"
                      href="https://www.linkedin.com/company/conectivit%C3%A9/?viewAsMember=true"
                    />
                  </Grid>
                  <Grid item lg={1} style={{ marginLeft: 12 }}>
                    <Button
                      style={{ color: 'red' }}
                      component="a"
                      color="inherit"
                      aria-label="Youtube"
                      className={classes.Button}
                      startIcon={<YouTubeIcon />}
                      target="_blank"
                      href=""
                    />
                  </Grid>
                  <Grid item lg={1} style={{ marginLeft: 12 }}>
                    <Button
                      style={{ color: 'lightcoral' }}
                      component="a"
                      color="inherit"
                      aria-label="Instagram"
                      className={classes.Button}
                      startIcon={<InstagramIcon />}
                      target="_blank"
                      href=""
                    />
                  </Grid>
                  <Grid item lg={1} style={{ marginLeft: 12 }}>
                    <Button
                      style={{ color: 'coral' }}
                      component="a"
                      color="inherit"
                      aria-label="Email"
                      className={classes.Button}
                      startIcon={<MailOutlinedIcon />}
                      href={buildFeedbackLink()}
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
            classes={{ paper: classes.menuPaper }}
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
                  classes={{ paper: classes.menuPaper }}
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
                    <Grid item lg={2} className={classes.gridItem}>
                      <StyledMenuItem className={classes.menuItemSelected}>
                        <ListItemText
                          primary="Team"
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
                  classes={{ paper: classes.menuPaper }}
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
                  classes={{ paper: classes.menuPaper }}
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
                  classes={{ paper: classes.menuPaper }}
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
            style={{ color: 'steelblue', textAlign: 'left', marginLeft: 12 }}
          >
            Conectivite for World
          </Typography>

          <Typography
            style={{
              fontSize: '1.0rem',
              textAlign: 'justify',
              marginTop: 8,
              marginLeft: 12,
            }}
          >
            In a forever changing world where the fundamentals of business and
            lifestyle are continuously redefined as we move towards Autonomous,
            self-service and a contact-less yet connected world, we all need a
            safe, secure and a reliable platform to provision and enable any
            network at any given point of time. We at Conectivite constantly
            strive to deliver the connectivity needs of individuals and
            businesses in most sophisticated ways adhering and complying to
            strict privacy policies and regulations using our sophisticated
            algorithms.
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
            paddingLeft: 0,
          }}
        >
          <Typography
            variant="h6"
            style={{ color: 'steelblue', textAlign: 'left', marginLeft: -10 }}
          >
            GCCP by Connectivite - One Global Platform
          </Typography>

          <Typography
            style={{
              fontSize: '1.0rem',
              textAlign: 'justify',
              marginTop: 8,
              marginLeft: -10,
            }}
          >
            GCCP<sup style={{ color: 'red' }}>*patent pending</sup> (Global
            Converged Conectivite Platform) is always a{' '}
            <b className={classes.textStyles}>“ON”</b> global interface that{' '}
            <b className={classes.textStyles}>connects, completes</b> and{' '}
            <b className={classes.textStyles}>compliments</b> the valuable
            partners in
            <b className={classes.textStyles}> Communication Eco System</b>{' '}
            enabling <b className={classes.textStyles}>subscribers</b> and{' '}
            <b className={classes.textStyles}>businesses</b> to provision any
            carrier <b className={classes.textStyles}>on demand OTA</b> (over
            the air) along with manageability of network profiles seamlessly for
            all the eSIM enabled applications/ use cases.
          </Typography>
        </Grid>
      </Grid>
      <AppBar
        position="static"
        className={classes.footer}
        elevation={0}
        style={{ marginTop: 10 }}
      >
        <Grid container style={{ height: 'inherit', textAlign: 'center' }}>
          <Grid
            item
            lg={6}
            style={{ textAlign: 'center', alignSelf: 'center' }}
          >
            <Button
              component="a"
              color="inherit"
              aria-label="legalmentions"
              style={{ color: 'white', verticalAlign: 'text-top' }}
              className={classes.Button}
              target="_self"
            >
              LEGAL MENTIONS
            </Button>

            <Button
              component="a"
              color="inherit"
              aria-label="sitemap"
              style={{ color: 'white', verticalAlign: 'text-top' }}
              className={classes.Button}
              target="_self"
            >
              SITE MAP
            </Button>

            <Button
              component="a"
              color="inherit"
              aria-label="Conectivite.com"
              style={{ color: 'white', verticalAlign: 'text-top' }}
              className={classes.Button}
              target="_self"
            >
              conectivite.com
            </Button>
          </Grid>
        </Grid>
      </AppBar>
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
