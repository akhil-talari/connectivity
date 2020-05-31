import React from 'react';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = (theme) => ({
  popover: {
    pointerEvents: 'none',
    height: 400,
    width: 1200,
  },
  paper: {
    padding: theme.spacing(1),
    background: 'steelblue',
    color: 'white',
  },
});

function PopOver(props) {
  //const classes = useStyles();

  const { classes, open, onClose, anchorEl, content } = props;

  return (
    <Popover
      id="mouse-over-popover"
      className={classes.popover}
      classes={{
        paper: classes.paper,
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      onClose={onClose}
      disableRestoreFocus
    >
      <Typography>{content}</Typography>
    </Popover>
  );
}

export default withStyles(useStyles)(PopOver);
