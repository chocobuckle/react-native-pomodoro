import React from 'react';
import { Facebook } from 'expo';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default class App extends React.Component {
  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('178192322746471', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <SocialIcon
          style={styles.facebookLogin}
          button
          raised
          type='facebook'
          onLongPress={this.login}
          title='Login with Facebook' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  facebookLogin: {
    width: 250,
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
