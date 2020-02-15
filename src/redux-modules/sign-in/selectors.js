import { createSelector } from 'reselect';

const screenSelector = (state) => state.screenSignIn;

export const isAuthenticated = createSelector(
  (state) => state.screenSignIn.get('isAuthenticated'),
  (isAuthenticated) => isAuthenticated
);

export const isDrawerOpen = createSelector(
  (state) => state.screenSignIn.get('isDrawerOpen'),
  (isDrawerOpen) => isDrawerOpen
);

export const getServiceRequestNumber = createSelector(
  (state) => state.screenSignIn.get('serviceRequestNumber'),
  (serviceRequestNumber) => serviceRequestNumber
);

export const getAccountCreationMessage = createSelector(
  (state) => state.screenSignIn.get('createAccountMessage'),
  (createAccountMessage) => createAccountMessage
);

export const getOTP = createSelector(
  (state) => state.screenSignIn.get('otp'),
  (otp) => otp
);

export const getUsername = createSelector(
  (state) => state.screenSignIn.get('username'),
  (username) => username
);

export const getPassword = createSelector(
  (state) => state.screenSignIn.get('password'),
  (password) => password
);

export const getCreateAccountMessage = createSelector(
  (state) => state.screenSignIn.get('createAccountMessage'),
  (createAccountMessage) => createAccountMessage
);

export const getLoginText = createSelector(
  (state) => state.screenSignIn.get('loginText'),
  (loginText) => loginText
);
