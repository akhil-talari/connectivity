import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  body: {},
});

const Slide = ({ content, ...props }) => {
  const { classes } = props;
  return (
    <div
      style={{
        height: 'calc(100vh - 165px)',
        width: 'calc(100vw)',
        backgroundImage: `url('${content}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectFit: 'fill',
      }}
    />
  );
};

export default withStyles(styles)(Slide);
