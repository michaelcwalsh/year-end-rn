import React, { Component } from 'react';
import { YERNAuth, YERNData } from '../config/FirebaseConstants';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, Button, ImageBackground, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../../styles.js';


class SignUpScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    }
  }


  register() {
    YERNAuth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(user) {
      var user = YERNAuth.currentUser;
      logUser(user);
    }, function(error) {
      this.setState({ errorMessage: error.message });
    }.bind(this));

    function logUser(user) {
      var postsRef = YERNData.ref("users");
      var newPostRef = postsRef.push();
      var uid = user.uid;
      var email = user.email;

      YERNData.ref('users/' + uid).set({
        email: email,
      });
    }
  }


  render () {
    return (
      <View style={styles.logInScreen}>
      <ImageBackground source={require('../images/records.jpg')} style={styles.backgroundImage} >
      <View style={styles.logInBox}>
        <Text>{this.state.errorMessage}</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
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
