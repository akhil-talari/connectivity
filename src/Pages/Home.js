import React from 'react';
import logo from '../images/logo.jpg';
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

const useStyles = makeStyles((theme) => ({
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
  }
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            className={classes.title}
            noWrap
          ></Typography>
          <Tooltip id="tooltip-home" title="Home">
            <IconButton
              size="small"
              color="inherit"
              onClick={() => props.history.push('/connectivity/home')}
            >
              <HomeIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
          <Tooltip id="tooltip-info" title="About Us">
            <IconButton size="small" color="inherit">
              <InfoIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
          <Tooltip id="tooltip-login" title="Login">
            <IconButton
              edge="end"
              size="small"
              color="inherit"
              onClick={() => props.history.push('/connectivity/login')}
            >
              <AccountCircleIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <div>
        {props.from !== 'user' && props.from !== '' && (
          <img
            src={logo}
            alt="logo"
            style={{ marginLeft: '100px', marginTop: '-50px' }}
          />
        )}
        {props.from === 'user' && (
          <img
            src={chart}
            alt="chart"
            style={{ marginLeft: '500px', marginTop: '100px', height: '300px' }}
          />
        )}

        <p></p>
      </div>
    </div>
  );
}

export default Home;
