import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  body: {
    height: 'calc(100vh - 165px)',
    display: 'flex',
  },
});

const SliderContent = ({ len, ...props }) => {
  const { classes, translate, transition } = props;
  const width = `calc(100vw * ${len})`;

  return (
    <div
      className={classes.body}
      style={{
        width,
        transform: `translateX(-${translate}px)`,
        transition: `transform ease-out ${transition}s`,
      }}
    >
      {props.children}
    </div>
  );
};

export default withStyles(styles)(SliderContent);
