import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogInScreen from '../scenes/LogInScreen';
import SignUpScreen from '../scenes/SignUpScreen';
import Tabs from './Tabs';
import styles from '../../styles.js';

const LogInStack = StackNavigator(
  {
    LogIn: {
      screen: LogInScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    Tabs: {
      screen: Tabs,
    }
  },
);

export default LogInStack;
