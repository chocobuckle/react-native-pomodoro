import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigator } from 'react-native-deprecated-custom-components';
import { SplashContainer, FooterTabsContainer } from '~/containers';

class ReactModoroNavigator extends Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired
  }

  configureScene = route => {

  }

  renderScene = (route, navigator) => {
    if (this.props.isAuthed === false) {
      return <SplashContainer navigator={navigator} />;
    }
    return <FooterTabsContainer navigator={navigator} />;
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
