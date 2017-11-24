import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '~/styles';

Close.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired
};

export default function Close(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Text style={{ color: colors.blue }}>Close</Text>
    </TouchableOpacity>
  );
}

