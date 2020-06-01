import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  body: {},
  slide: {
    objectFit: 'fill',
    width: 'calc(100vw)',
    height: 'calc(100vh - 165px)',
  },
});

const Slide = ({ content, ...props }) => {
  const { classes } = props;
  return (
    <div>
      <img src={content} alt="slide" className={classes.slide}></img>
    </div>
  );
};

export default withStyles(styles)(Slide);
