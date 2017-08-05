import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LogInScreen from '../scenes/LogInScreen';
import SignUpScreen from '../scenes/SignUpScreen';
import styles from '../../styles.js';

const LogInStack = StackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Welcome',
    }),
  },
  SignUp: { screen: SignUpScreen },
});

export default LogInStack;
