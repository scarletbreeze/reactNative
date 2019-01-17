import React, { Component } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/store';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import RoomApp from './src/RoomApp';
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
        {/* <RoomApp /> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
