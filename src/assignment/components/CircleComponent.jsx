import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';

const CircleComponent = ({handlePress, item}) => {
  return (
    <TouchableOpacity
      style={{
        alignItem: 'center',
        justifyContent: 'center',
        backgroundColor: item.Selected ? 'grey' : 'white',
        height: 100,
        width: 100,
        borderRadius: 100,
        marginTop: 10,
      }}
      onPress={() => {
        handlePress(item);
      }}>
      <Text style={{textAlign: 'center', color: 'black'}}>{item.text}</Text>
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create

export default CircleComponent;
