import React, { Component } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

import { Navigation } from 'react-native-navigation';

class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SignUp</Text>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
