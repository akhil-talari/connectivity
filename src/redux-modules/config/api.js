//import { get, post, setToken } from '@eog/http-requests';
import config from '../config';
import 'isomorphic-fetch';
//import axios from "axios";
import _ from 'lodash';

const Customheader = (token, username) => {
  let environment =
    process.env['REACT_APP_DATA_ENV'] === 'production'
      ? 'production'
      : process.env['REACT_APP_DATA_ENV'] === 'staging'
      ? 'staging'
      : 'development';

  return {
    'Content-Type': 'application/json',
    'X-AppName': 'iBatch',
    'X-NetworkId': 'Abhi',
    'X-Environment': 'DEV'
  };
};

export const saveUser = async (payload) => {
  const requestUrl = `${config.getServiceRequestNumber}`;
  const response = await fetch(requestUrl, {
    headers: Customheader(),
    method: 'post',
    body: JSON.stringify(payload)
  });
  try {
    if (response.ok) {
      const json = response.text();
      return json;
    } else {
      const json = await response.text();
      throw new Error(
        'There was an error registering the user ' + json.message
      );
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const createUser = async (payload) => {
  const requestUrl = `${config.createUserURI}`;
  const response = await fetch(requestUrl, {
    headers: Customheader(),
    method: 'post',
    body: JSON.stringify(payload)
  });
  try {
    if (response.ok) {
      const json = response.json();
      return json;
    } else {
      const json = await response.json();
      throw new Error(
        'There was an error registering the user ' + json.message
      );
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const sendOTPToUser = async (payload) => {
  const requestUrl = `${config.sendOTPURI}`;
  const response = await fetch(requestUrl, {
    headers: Customheader(),
    method: 'post',
    body: JSON.stringify(payload)
  });
  try {
    if (response.ok) {
      const json = response.json();
      return json;
    } else {
      const json = await response.json();
      throw new Error('There was an error sending OTP ' + json.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const authenticate = async (payload) => {
  const requestUrl = `${config.authenticateURI}`;
  const response = await fetch(requestUrl, {
    headers: Customheader(),
    method: 'post',
    body: JSON.stringify(payload)
  });
  try {
    if (response.ok) {
      const json = response.json();
      return json;
    } else {
      const json = await response.json();
      throw new Error('There was an error sending OTP ' + json.message);
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
