import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Home } from '~/components';

export default class HomeContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired
  }

  state = {}

  handleToSettings = () => {
    this.props.navigator.push({
      settings: true
    });
  }

  render() {
    return (
      <Home
        openDrawer={this.props.openDrawer}
        handleToSettings={this.handleToSettings}
      />
    );
  }
}
