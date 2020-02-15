import { call, put, takeEvery, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import 'isomorphic-fetch';
import {
  REGISTER_NEW_USER,
  SAVE_SR_NUMBER,
  CREATE_NEW_USER,
  SAVE_SUCCESS_MESSAGE,
  SEND_OTP,
  SAVE_OTP,
  AUTHENTICATE_USER,
  LOGIN_SUCCESS
} from './actions';

import { getPassword, getUsername } from './selectors';

import {
  saveUser,
  sendOTPToUser,
  authenticate,
  createUser
} from '../config/api';

export function* registerUser(action) {
  try {
    const response = yield call(saveUser, action.payload);

    yield put({
      type: SAVE_SR_NUMBER,
      data: response
    });
  } catch (e) {
    console.log(e.message);
  }
}

export function* createUserSaga(action) {
  try {
    const response = yield call(createUser, action.payload);

    yield put({
      type: SAVE_SUCCESS_MESSAGE,
      data: response
    });
  } catch (e) {
    console.log(e.message);
  }
}

export function* sendOTP(action) {
  try {
    const response = yield call(sendOTPToUser, { email: action.email });

    yield put({
      type: SAVE_OTP,
      data: response.otp
    });
  } catch (e) {
    console.log(e.message);
  }
}

export function* authenticateUser(action) {
  try {
    const password = yield select(getPassword);
    const username = yield select(getUsername);

    const response = yield call(authenticate, { username, password });

    yield put({
      type: LOGIN_SUCCESS,
      data: response
    });
  } catch (e) {
    console.log(e.message);
  }
}

function* userSaga(data) {
  yield takeEvery(AUTHENTICATE_USER, authenticateUser);
  yield takeEvery(REGISTER_NEW_USER, registerUser);
  yield takeEvery(CREATE_NEW_USER, createUserSaga);
  yield takeEvery(SEND_OTP, sendOTP);
}

export default [userSaga];
