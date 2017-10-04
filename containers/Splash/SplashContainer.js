import React, { Component } from 'react';
import { Facebook } from 'expo';
import { Alert } from 'react-native';
import { Splash } from '~/components';

class SplashContainer extends Component {
  login = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('178192322746471', {
      permissions: ['public_profile']
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
      <Splash login={this.login} />
    );
  }
}

export default SplashContainer;
