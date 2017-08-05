import React, { Component } from 'react';
import { Text, View } from 'react-native';
import realm from './data/realm';
import LogInStack from './navigators/LogInStack';

class App extends Component {
  render() {
    return <LogInStack />;
  }
}

export default App;
