import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fontSizes } from '~/styles';

DrawerTab.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired
};

export default function DrawerTab({ title, selected, onPress, iconName }) {
  const color = selected === true ? colors.blue : colors.primary;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={iconName} size={35} color={color} />
      <Text style={[{color}, styles.titleText]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },

  titleText: {
    fontSize: fontSizes.secondary,
    marginLeft: 10
  }
});
