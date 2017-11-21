import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ReactModoroNavbar, Gear } from '~/components';

Home.propTypes = {

};

export default function Home(props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Home'
        rightButton={<Gear onPress={() => console.log('Gear!')} />} />
      <Text>
        Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
