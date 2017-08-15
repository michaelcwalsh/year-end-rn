import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, Button, ImageBackground, ScrollView, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../../styles.js';

class FeedScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <View style={styles.feedScreen}>
        <Text>Hello!</Text>
      </View>
    )
  }
}

export default FeedScreen;
