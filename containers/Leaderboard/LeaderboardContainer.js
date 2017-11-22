import React, { Component } from 'react';
import { Leaderboard } from '~/components';
import PropTypes from 'prop-types';

export default class LeaderboardContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func,
    navigator: PropTypes.object.isRequired
  }

  state = {

  }

  render() {
    return (
      <Leaderboard openDrawer={this.props.openDrawer} />
    );
  }
}
