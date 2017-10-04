import React from 'react';
import { func } from 'prop-types';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { colors, fontSizes } from '~/styles';

const { height } = Dimensions.get('window');

Splash.propTypes = {
  login: func.isRequired
};

function Splash({ login }) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require('../../images/logo.png')} />
        <Text style={styles.appTitle}>ReactModoro</Text>
      </View>
      <View style={styles.loginContainer}>
        <SocialIcon
          style={styles.facebookLogin}
          button
          raised
          type='facebook'
          onLongPress={login}
          title='Login with Facebook'
        />
        <Text style={styles.assuranceText}>{'Don\'t worry. We don\'t post anything to Facebook.'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    paddingBottom: 40,
    paddingTop: 50
  },

  appTitle: {
    color: colors.blue,
    fontSize: 40,
    margin: 10,
    textAlign: 'center'
  },

  image: {
    resizeMode: 'contain',
    height: height * 0.4 > 300 ? 300 : height * 0.4
  },

  loginContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center'
  },

  facebookLogin: {
    height: 33,
    width: 180,
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 13,
    alignItems: 'center'
  },

  assuranceText: {
    textAlign: 'center',
    color: colors.secondary,
    fontSize: fontSizes.secondary
  }
});

export default Splash;
