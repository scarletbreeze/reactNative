import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Navigation } from 'react-native-navigation';

export default class Room extends Component {
  goToScreen = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
      },
    });
  };

  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Button
          style={styles.noteText}
          title="채팅하기"
          onPress={() => this.goToScreen('App')}>
          go to Room
        </Button>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>D</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: 'white',
  },
});
