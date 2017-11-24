import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ReactModoroNavbar, Close } from '~/components';
import { colors } from '~/styles';

Settings.propTypes = {
  onBack: PropTypes.func.isRequired
};

export default function Settings(props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Settings'
        leftButton={<Close onPress={props.onBack} />}
      />
      <Text>
        Settings
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});
