import React from 'react';
import { TabBarIOS } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeContainer, LeaderboardContainer } from '~/containers';

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired
};

export default function FooterTabs({ navigator, activeFooterTab, onTabSelect }) {
  return (
    <TabBarIOS tintColor={colors.active}>
      <Icon.TabBarItemIOS
        iconSize={35}
        iconName='ios-home-outline'
        title='Home'
        selected={activeFooterTab === 'home'}
        onPress={() => onTabSelect('home')}>
        <HomeContainer navigator={navigator} />
      </Icon.TabBarItemIOS>
      <Icon.TabBarItemIOS
        iconSize={35}
        iconName='ios-trophy-outline'
        title='Leaderboard'
        selected={activeFooterTab === 'leaderboard'}
        onPress={() => onTabSelect('leaderboard')}>
        <LeaderboardContainer navigator={navigator} />
      </Icon.TabBarItemIOS>
    </TabBarIOS>
  );
}
