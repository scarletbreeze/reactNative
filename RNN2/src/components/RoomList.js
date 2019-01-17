import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RoomList = props => {
  return (
    <TouchableOpacity>
      <View style={styles.RoomList}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  RoomList: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
});

export default RoomList;
