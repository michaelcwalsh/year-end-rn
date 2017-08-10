import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, Button, ImageBackground, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../../styles.js';
import Realm from 'realm';


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
    Realm.Sync.User.register('http://realm-ip:9080', this.state.email, this.state.password, (error, user) => {
      if (!error) {
        var realm = new Realm({
          sync: {
            user: user,
            url: 'realm://realm-ip:9080/~/userRealm',
          },
          schema: [PersonSchema, ConversationSchema]
        });
      }
      else {
        console.log(error);
      }
    })
  }

  render () {
    console.log('hi');
    return (
      <View style={styles.logInScreen}>
      <ImageBackground source={require('../images/records.jpg')} style={styles.backgroundImage} >
      <View style={styles.logInBox}>
        <TextInput
          style={styles.input}
          onChangeText={(username) => this.setState({username})}
          defaultValue="Username"
          value={this.state.username}
        />
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
