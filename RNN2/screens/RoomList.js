import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

import Room from './Room';
import { Navigation } from 'react-native-navigation';

export default class RoomList extends Component {
  goToScreen = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
      },
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }
  render() {
    let room = this.state.noteArray.map((val, key) => {
      return (
        <Room
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
          componentId={this.props.componentId} // 이걸 안써줘서 문제가 생겼다.
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={styles.headerText}
            onPress={() => this.goToScreen('RoomList')}>
            - 혼자 대화하는 채팅방 -
          </Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{room}</ScrollView>
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            placeholder=">하고 싶은 말을 적으세요"
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          onPress={this.addNote.bind(this)}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});
