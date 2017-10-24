import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { ReactModoroNavigator } from '~/containers';
import { PreSplash } from '~/components';

class AuthContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthed: PropTypes.bool.isRequired
  }

  static defaultProps = {
    isAuthenticating: false
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <ReactModoroNavigator isAuthed={this.props.isAuthed} />}
      </View>
    );
  }
}

function mapStateToProps({ authentication }) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed
  };
}

export default connect(mapStateToProps)(AuthContainer);
