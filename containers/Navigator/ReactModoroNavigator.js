import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigator } from 'react-native-deprecated-custom-components';
import { SplashContainer } from '~/containers';

class ReactModoroNavigator extends Component {
  configureScene = route => {

  }

  renderScene = (route, navigator) => {
    return <SplashContainer navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
}

export default ReactModoroNavigator;
