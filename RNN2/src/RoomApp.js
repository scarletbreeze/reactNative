import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MakeRoom from './containers/MakeRoom';
import { Provider } from 'react-redux';
import store from './store';

class RoomApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <MakeRoom />
        </View>
      </Provider>
    );
  }
}
export default RoomApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
