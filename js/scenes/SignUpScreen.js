import React, { Component } from 'react';
import { YERNAuth } from '../config/FirebaseConstants';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, Button, ImageBackground, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../../styles.js';


class SignUpScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    }
  }

  register(){
    YERNAuth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  render () {
    console.log('hi');
    return (
      <View style={styles.logInScreen}>
      <ImageBackground source={require('../images/records.jpg')} style={styles.backgroundImage} >
      <View style={styles.logInBox}>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          defaultValue="Email"
          value={this.state.email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          defaultValue="Password"
          value={this.state.password}
          secureTextEntry={true}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={this.register.bind(this) }>
          <Text style={styles.signUpButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      </View>
    )
  }
}

export default SignUpScreen;
