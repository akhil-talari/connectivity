import Immutable from 'immutable';
import * as actions from './actions';

const reducer = {};
const initialState = Immutable.fromJS({
  isAuthenticated: {},
  username: '',
  password: '',
  isDrawerOpen: false,
  serviceRequestNumber: '',
  createAccountMessage: {},
  otp: '',
  loginText: ''
});

reducer[actions.USERNAME_CHANGED] = (state, event) => {
  // console.log("hello in sign in reducer");
  return state.set('username', event.value);
};
reducer[actions.PASSWORD_CHANGED] = (state, event) => {
  return state.set('password', event.value);
};

reducer[actions.SET_DRAWER_OPEN] = (state, event) => {
  return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
};

reducer[actions.SAVE_SR_NUMBER] = (state, event) => {
  return state.set('serviceRequestNumber', event.data);
};

reducer[actions.SAVE_SUCCESS_MESSAGE] = (state, event) => {
  return state.set('createAccountMessage', event.data);
};

reducer[actions.SAVE_OTP] = (state, event) => {
  return state.set('otp', event.data);
};

reducer[actions.LOGIN_SUCCESS] = (state, event) => {
  return state.set('isAuthenticated', event.data);
};

reducer[actions.AUTHENTICATION_REVOKED] = (state, event) => {
  return state.set('isAuthenticated', {}).set('createAccountMessage', {});
};

const makeReducer = (reducers, initialState) => {
  return (state = initialState, action) => {
    const reducer = reducers[action.type];
    if (!reducer) return state;
    return reducer(state, action);
  };
};

export default makeReducer(reducer, initialState);
