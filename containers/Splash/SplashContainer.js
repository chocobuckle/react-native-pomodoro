import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Facebook } from 'expo';
import { Splash } from '~/components';
import { connect } from 'react-redux';
import { handleAuthWithFirebase } from '~/redux/modules/authentication';

class SplashContainer extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  }

  login = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('178192322746471', {
      permissions: ['public_profile']
    });

    if (type === 'success') {
      this.props.handleAuthWithFirebase(token);
    }
  }

  render() {
    return (
      <Splash login={this.login} />
    );
  }
}

export default connect()(SplashContainer);
