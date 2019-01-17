import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Image from '../../img/add_plus.png';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
class AddTodo extends Component {
  state = {
    text: '',
  };

  addTodo = text => {
    //redux store
    this.props.dispatch(addTodo(text));
    this.setState({ text: '' });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="Eg.create New Video"
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={styles.iconstyle}>
            <View
              src={Image}
              name="md-add"
              size={30}
              style={{ color: '#de9595', padding: 10 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconstyle: {
    height: 50,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
