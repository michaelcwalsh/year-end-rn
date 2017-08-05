import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logInScreen: {
    flex: 1,
  },
  logInBox: {
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 37,
    width: 250,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#C2412D',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  noaccount: {
    marginTop: 10,
  },
  register: {
    color: '#C2412D',
  },
});

export default styles;
