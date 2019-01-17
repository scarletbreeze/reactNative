import React, { Component } from 'react';

import { FlatList, View, Text, StyleSheet, Button } from 'react-native';

import { Navigation } from 'react-native-navigation';

import RoomList from './RoomList';

class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>채팅방 만들기</Text>
        {/* <RoomList /> */}
      </View>
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
