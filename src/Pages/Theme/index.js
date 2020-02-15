import React from 'react';
// import { MuiThemeProvider, jssPreset } from "@material-ui/core/styles";
// import JssProvider from "react-jss/lib/JssProvider";
// import { create } from "jss";

import {
  MuiThemeProvider,
  jssPreset,
  StylesProvider,
  createMuiTheme
} from '@material-ui/core/styles';

import './index.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import makeTheme from './createMuiTheme';

const theme = makeTheme();

/// https://material-ui-next.com/customization/css-in-js/#other-html-element
//const jss = create(jssPreset());
const createGenerateClassName = () => {
  let counter = 0;
  return (rule, sheet) =>
    `connectivity--uicomponents--${rule.key}-${counter++}`;
};
const generateClassName = createGenerateClassName();

export default (props) => (
  <StylesProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  </StylesProvider>
);
