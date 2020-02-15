import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  QRButton: {
    marginLeft: '200px'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: '50px',
    marginLeft: '180px'
  }
}));

export default function FormDialog(props) {
  const classes = useStyles();

  // const mobileNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) =>
  //   Math.floor(9000000000 + Math.random() * 100000000)
  // );

  const mobileNumbers = [
    9963588187,
    9959030960,
    9908695216,
    8884678547,
    884678754,
    8326066190,
    9136663831,
    9322069608,
    2815197358,
    8622418586
  ];
  console.log('props ', props);
  return (
    <div>
      <Grid container spacing={1}>
        {props.menuOption === 'neweSIM' && (
          <div>
            <Grid item>
              <FormControl style={{ marginLeft: '180px' }}>
                <InputLabel
                  id="demo-simple-select-filled-label"
                  style={{ fontSize: '14px' }}
                >
                  Type of Subscription
                </InputLabel>
                <Select
                  inputProps={{
                    name: 'type',
                    id: 'type'
                  }}
                  value={props.type}
                  onChange={(event) => props.setType(event.target.value)}
                  style={{ width: '200px' }}
                >
                  <MenuItem key="prepaid" value="prepaid">
                    Prepaid
                  </MenuItem>
                  <MenuItem key="postpaid" value="postpaid">
                    Postpaid
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Fab
                variant="extended"
                className={classes.menuButton}
                color="secondary"
              >
                <CameraAltIcon />
                Take Picture
              </Fab>
            </Grid>
            <Grid item>
              <Fab
                variant="extended"
                className={classes.menuButton}
                color="secondary"
              >
                <AttachFileIcon />
                Upload Govt. ID
              </Fab>
            </Grid>
          </div>
        )}

        {props.menuOption === 'neweSIM' ? (
          <Grid item>
            {' '}
            <FormControl style={{ marginLeft: '180px', marginTop: '20px' }}>
              <InputLabel
                id="demo-simple-select-filled-label"
                style={{ fontSize: '14px' }}
              >
                Mobile number
              </InputLabel>
              <Select
                inputProps={{
                  name: 'number',
                  id: 'number'
                }}
                value={props.number}
                onChange={(event) => props.setNumber(event.target.value)}
                style={{ width: '180px' }}
              >
                {props.country === 'India' &&
                  mobileNumbers.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                {props.country === 'US' &&
                  mobileNumbers.map((value, index) => (
                    <MenuItem key={index} value={value}>
                      {value}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        ) : (
          <Grid>
            <TextField
              id="mobilenumber"
              label="Mobile number"
              type="text"
              style={{ marginLeft: '180px' }}
              margin="normal"
              value={props.number}
              onChange={(event) => {
                props.setNumber(event.target.value);
              }}
            />
          </Grid>
        )}

        <Grid item>
          <TextField
            id="sim serial number"
            label="SSN"
            type="text"
            style={{ marginLeft: '180px' }}
            margin="normal"
            value={props.ssn}
            onChange={(event) => props.setSSN(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography
            style={{ marginLeft: 100, color: 'red', fontSize: '12px' }}
            align="center"
          >
            {props.emailText}
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="emailid"
            label="Email ID"
            type="email"
            style={{ marginLeft: '180px' }}
            margin="normal"
            value={props.email}
            onChange={(event) => {
              props.setEmail(event.target.value);
              props.setEmailText('');
            }}
          />
        </Grid>
        {props.menuOption === 'port' && (
          <Grid item>
            <FormControl style={{ marginLeft: '180px' }}>
              <InputLabel
                id="demo-simple-select-filled-label"
                style={{ fontSize: '14px' }}
              >
                Reason
              </InputLabel>
              <Select
                inputProps={{
                  name: 'reason',
                  id: 'reason'
                }}
                value={props.reason}
                onChange={(event) => props.setReason(event.target.value)}
                style={{ width: '200px' }}
              >
                <MenuItem key="physicalToeSIM" value="physicalToeSIM">
                  Bought a new mobile
                </MenuItem>
                <MenuItem key="neweSIM" value="neweSIM">
                  Reason B
                </MenuItem>
                <MenuItem key="port" value="port">
                  Reason C
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
