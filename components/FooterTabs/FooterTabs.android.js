import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, DrawerLayoutAndroid } from 'react-native';
import { HomeContainer, LeaderboardContainer } from '~/containers';
import Drawer from './Drawer';

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default function FooterTabs({ activeFooterTab, onTabSelect, navigator }) {
  const openDrawer = () => this.drawer.openDrawer();
  const closeDrawer = () => this.drawer.closeDrawer();
  return (
    <DrawerLayoutAndroid
      ref={drawer => {
        this.drawer = drawer;
      }}
      drawerWidth={290}
      renderNavigationView={() => (
        <Drawer
          close={closeDrawer}
          activeFooterTab={activeFooterTab}
          onTabSelect={onTabSelect}
        />
      )}>
      {activeFooterTab === 'home'
        ? <HomeContainer openDrawer={openDrawer} navigator={navigator} />
        : <LeaderboardContainer openDrawer={openDrawer} navigator={navigator} />}
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({

});
