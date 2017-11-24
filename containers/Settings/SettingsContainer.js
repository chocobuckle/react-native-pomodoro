import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Settings } from '~/components';

export default class SettingsContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render() {
    return (
      <Settings onBack={this.props.navigator.pop} />
    );
  }
}
