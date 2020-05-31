import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme) => ({
  arrow: {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    height: '40px',
    width: '40px',
    justifyContent: 'center',
    background: '#00bcd4',
    borderRadius: '50%',
    cursor: 'pointer',
    alignItems: 'center',
    transition: 'transform ease-in 0.1s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  arrowLeft: {
    left: 10,
    '&:focus': {
      outline: 0,
    },
    transform: 'translateX(-2px)',
  },
  arrowRight: {
    right: 10,
    '&:focus': {
      outline: 0,
    },
    transform: 'translateX(2px)',
  },
});

const Arrow = ({ direction, handleClick, ...props }) => {
  const { classes } = props;
  return direction === 'right' ? (
    <div onClick={handleClick} className={classes.arrow} style={{ right: 25 }}>
      <IconButton style={{ float: 'right' }}>
        <ChevronRightIcon className={classes.arrowRight} />
      </IconButton>
    </div>
  ) : (
    <div onClick={handleClick} className={classes.arrow} style={{ left: 25 }}>
      <IconButton>
        <ChevronLeftIcon className={classes.arrowLeft} />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(Arrow);
