import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import DrawerHeader from './DrawerHeader';
import DrawerTab from './DrawerTab';

Drawer.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

export default function Drawer({ activeFooterTab, onTabSelect, close }) {
  return (
    <View style={styles.container}>
      <DrawerHeader />
      <DrawerTab
        title='Home'
        iconName='ios-home-outline'
        selected={activeFooterTab === 'home'}
        onPress={() => {
          onTabSelect('home');
          close();
        }}
      />
      <DrawerTab
        title='Leaderboard'
        iconName='ios-trophy-outline'
        selected={activeFooterTab === 'leaderboard'}
        onPress={() => {
          onTabSelect('leaderboard');
          close();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
