import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Facebook } from 'expo';
import { Splash } from '~/components';
import { connect } from 'react-redux';
import { handleAuthWithFirebase } from '~/redux/modules/authentication';

class SplashContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  login = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('178192322746471', {
      permissions: ['public_profile']
    });

    console.log(type, token);

    try {
      if (type === 'success') {
        this.props.dispatch(handleAuthWithFirebase(token));
      }
    } catch (error) {
      console.warn(`Error logging in: ${error}`);
    }
  }

  render() {
    return (
      <Splash login={this.login} />
    );
  }
}

export default connect()(SplashContainer);
