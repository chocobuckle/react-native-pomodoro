import React, { Component } from 'react';
import { View } from 'react-native';
import { bool } from 'prop-types';
import { ReactModoroNavigator } from '~/containers';
import { PreSplash } from '~/components';

class App extends Component {
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

export default App;
