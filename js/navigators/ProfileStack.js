import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../scenes/ProfileScreen';
import styles from '../../styles.js';

const ProfileStack = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
  },
);

export default ProfileStack;
