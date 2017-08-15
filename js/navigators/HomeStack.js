import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FeedScreen from '../scenes/FeedScreen';
import styles from '../../styles.js';

const HomeStack = StackNavigator(
  {
    Feed: {
      screen: FeedScreen,
    },
  },
);

export default HomeStack;
