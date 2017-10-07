import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { bool } from 'prop-types';
import { ReactModoroNavigator } from '~/containers';
import { PreSplash } from '~/components';

class AuthContainer extends Component {
  static propTypes = {
    isAuthenticating: bool.isRequired
  }

  static defaultProps = {
    isAuthenticating: false
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <ReactModoroNavigator />}
      </View>
    );
  }
}

function mapStateToProps({ authentication }) {
  return {
    isAuthenticating: authentication.isAuthenticating
  };
}

export default connect(mapStateToProps)(AuthContainer);
