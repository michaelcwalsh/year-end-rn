import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, Button, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../../styles.js';

class LogInScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: 'Email',
      password: 'Password',
    }
  }

  render () {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.logInScreen}>
      <Image source={require('../images/records.jpg')} style={styles.backgroundImage} >
      <View style={styles.logInBox}>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          defaultValue="Email"
          value={this.state.email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          defaultValue="Password"
          value={this.state.password}
          secureTextEntry={true}
          keyboardType="numeric"
        />
        <TouchableOpacity>
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
      </Image>
      </View>
    )
  }
}

export default LogInScreen;
