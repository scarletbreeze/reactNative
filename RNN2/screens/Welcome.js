import React, { Component } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

import { Navigation } from 'react-native-navigation';

class WelcomeScreen extends Component {
  goToScreen = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="채팅방 보기"
          onPress={() => this.goToScreen('RoomList')}
        />

        <Button
          title="채팅방 바로가기"
          onPress={() => this.goToScreen('App')}
        />

        <Button
          title="채팅방 만들기"
          onPress={() => this.goToScreen('SignUp')}
        />
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
