import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import qr from '../images/ConectiviteQR.png';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  dialog: {
    '& div:nth-child(3)>div': {
      height: '400px',
      width: '500px'
    }
  }
});

function QRDialog(props) {
  return (
    <div>
      <Dialog
        onClose={() => props.setQRScanner(false)}
        aria-labelledby="simple-dialog-title"
        open={props.isOpen}
        maxWidth="lg"
        className={props.classes.dialog}
      >
        <DialogTitle id="simple-dialog-title" style={{ alignSelf: 'center' }}>
          Scan QR Code
        </DialogTitle>
        <DialogContent style={{ alignSelf: 'center' }}>
          <img
            src={qr}
            alt="logo"
            style={{ height: '200px', width: '200px' }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => props.setQRScanner(false)} color="primary">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(QRDialog);
