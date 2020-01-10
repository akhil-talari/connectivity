import { Component } from 'react';

import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from 'react-router-dom';

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
    marginLeft: '560px'
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
  onLogin = (event) => {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
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
          </Toolbar>
        </AppBar>
        <Grid container spacing={1}>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="User Name"
              variant="outlined"
              className={classes.textField}
              style={{ marginTop: '100px' }}
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
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: '630px', marginTop: '30px' }}
              onClick={() => this.props.history.push('/')}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
