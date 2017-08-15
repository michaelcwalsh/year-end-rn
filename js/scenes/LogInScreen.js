import React, { Component } from 'react';
import { YERNAuth, YERNData } from '../config/FirebaseConstants';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, Button, ImageBackground, ScrollView, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../../styles.js';

class LogInScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    }
  }

  signIn() {
    const { navigate } = this.props.navigation;

    YERNAuth.signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user) {
      navigate('');
    }, function(error) {
      this.setState({ errorMessage: error.message });
    }.bind(this));
  }


  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.logInScreen}>
      <StatusBar barStyle='light-content' />
      <ImageBackground source={require('../images/records.jpg')} style={styles.backgroundImage} >
      <View style={styles.logInBox}>
        <Text>{this.state.errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          placeholder="email"
          value={this.state.email}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          placeholder="password"
          value={this.state.password}
          secureTextEntry={true}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={this.signIn.bind(this) }>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('SignUp')}>
        <Text style={styles.noaccount}>
          No account?{' '}
        <Text style={styles.register}>
          Register
        </Text>
        </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
      </View>
    )
  }
}

export default LogInScreen;
