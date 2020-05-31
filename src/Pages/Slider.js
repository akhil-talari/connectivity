import React, { useState, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

import Image1 from '../images/1.jpg';
import Image2 from '../images/2.jpg';
import Image3 from '../images/3.jpg';
import Image4 from '../images/4.jpg';

const slides = [Image1, Image2, Image3, Image4];

const styles = (theme) => ({
  body: {
    height: 'calc(100vh - 245px)',
    marginTop: '105px',
    width: 'calc(100vw)',
    position: 'relative',
    margin: '0 auto',
    overflow: 'hidden',
  },
});

const Slider = (props) => {
  const getWidth = () => window.innerWidth;
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { activeIndex, transition, translate } = state;

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, props.autoPlay * 1000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };
  const { classes } = props;
  console.log('active index', activeIndex);
  return (
    <div className={classes.body}>
      <SliderContent
        len={slides.length}
        translate={translate}
        transition={transition}
      >
        {slides.map((slide, i) => (
          <Slide key={i} content={slide} />
        ))}
      </SliderContent>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={slides} activeIndex={activeIndex} />
    </div>
  );
};

export default withStyles(styles)(Slider);
