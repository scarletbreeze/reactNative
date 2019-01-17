import React, { Component } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

import { Navigation } from 'react-native-navigation';

class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn</Text>
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
