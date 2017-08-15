import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SearchScreen from '../scenes/SearchScreen';
import styles from '../../styles.js';

const SearchStack = StackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
  },
);

export default SearchStack;
