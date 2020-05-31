import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  dots: {
    position: 'absolute',
    bottom: '25px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    padding: '5px',
    marginRight: '5px',
    cursor: 'pointer',
    borderRadius: '50%',
  },
});

const Dot = ({ active, ...props }) => {
  const { classes } = props;
  return (
    <span
      className={classes.dot}
      style={
        active
          ? {
              background: 'black',
            }
          : { background: 'white' }
      }
    />
  );
};

const StyledDot = withStyles(styles)(Dot);

const Dots = ({ slides, activeIndex, ...props }) => {
  const { classes } = props;
  return (
    <div className={classes.dots}>
      {slides.map((slide, i) => (
        <StyledDot key={slide} active={activeIndex === i} />
      ))}
    </div>
  );
};

export default withStyles(styles)(Dots);
