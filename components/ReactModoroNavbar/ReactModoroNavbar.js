import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import NavigationBar from 'react-native-navbar';
import { colors } from '~/styles';

ReactModoroNavbar.propTypes = {
  leftButton: PropTypes.element,
  rightButton: PropTypes.element
};

export default function ReactModoroNavbar(props) {
  const optionalAttrs = {};
  props.leftButton && (optionalAttrs.leftButton = React.cloneElement(props.leftButton, {
    style: {marginLeft: 10, justifyContent: 'center' }
  }));
  props.rightButton && (optionalAttrs.rightButton = React.cloneElement(props.rightButton, {
    style: { marginRight: 10, justifyContent: 'center' }
  }));
  return (
    <NavigationBar
      {...optionalAttrs}
      style={Platform.OS === 'android' ? {marginTop: 8, marginBottom: 8} : null}
      tintColor={colors.tabPrimary}
      title={{ title: 'Hello' }} />
  );
}

const styles = StyleSheet.create({

});
