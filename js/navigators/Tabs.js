import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import ProfileStack from './ProfileStack';
import styles from '../../styles.js';

const Tabs = TabNavigator({
  Home: { screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      // tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />
    },
  },
  Search: { screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      // tabBarIcon: ({ tintColor }) => <Icon name="search" size={35} color={tintColor} />
    },
  },
  You: { screen: ProfileStack,
    navigationOptions: {
      tabBarLabel: 'You',
      // tabBarIcon: ({ tintColor }) => <Icon name="person" size={35} color={tintColor} />
    },
  },
});

export default Tabs;
