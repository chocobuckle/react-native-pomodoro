import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Settings } from '~/components';

export default class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  state={
    timerDuration: 20,
    restDuration: 5
  }

  handleTimerChange = timerDuration => {
    this.setState({ timerDuration });
  }

  handleRestChange = restDuration => {
    this.setState({ restDuration });
  }

  handleTimerComplete = () => {
    console.log('Finished sliding timer');
  }

  handleRestComplete = () => {
    console.log('Finished sliding rest');
  }

  handleLogout = () => {
    console.log('Logging out!');
  }

  render() {
    return (
      <Settings
        onBack={this.props.navigator.pop}
        onLogout={this.handleLogout}
        onRestComplete={this.handleRestComplete}
        onTimerComplete={this.handleTimerComplete}
        onTimerChange={this.handleTimerChange}
        onRestChange={this.handleRestChange}
        timerDuration={this.state.timerDuration}
        restDuration={this.state.restDuration}
      />
    );
  }
}
