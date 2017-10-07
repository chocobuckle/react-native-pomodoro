import React from 'react';
import { Text, TabBarIOS } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/Ionicons';

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default function FooterTabs(props) {
  return (
    <TabBarIOS tintColor={colors.active}>
      <Icon.TabBarItem
        iconSize={35}
        iconName='ios-home-outline'
        title='Home'
        selected={props.activeFooterTab === 'home'}
        onPress={() => props.onTabSelect('home')}>
        <Text>HOME!</Text>
      </Icon.TabBarItem>
    </TabBarIOS>
  );
}
