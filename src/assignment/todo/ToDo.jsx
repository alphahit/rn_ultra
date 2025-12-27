import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

const ToDo = () => {
  const [toDoList, setToDoList] = useState([]);

  const [toDoTitle, setToDoTitle] = useState('');

  const [completedList, setcompletedList] = useState([]);
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={{ color: 'black' }}>{item.title}</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          console.log('Test Todo');
          setcompletedList([...completedList, item]);
          let updatedTodo = toDoList.filter(
            toDoItem => toDoItem.title !== item.title,
          );

          setToDoList(updatedTodo);
        }}
      >
        <Text style={{ color: 'white' }}>Done</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCompletedItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={{ color: 'black' }}>{item.title}</Text>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: 'green' }]}
        disabled={true}
        onPress={() => {
          console.log('Test Todo');

          let updatedTodo = toDoList.filter(
            toDoItem => toDoItem.title !== item.title,
          );

          setToDoList(updatedTodo);
        }}
      >
        <Text style={{ color: 'white' }}>Completed</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          value={toDoTitle}
          placeholder='Enter Todo'
          style={{ color: 'black', height:70, borderWidth:1 }}
          onChangeText={setToDoTitle}
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            if (toDoTitle.length > 0) {
              setToDoList([...toDoList, { title: toDoTitle, status: 'ToDo' }]);
              setToDoTitle('');
            } else {
              Alert.alert('Enter Todo First');
            }
          }}
        >
          <Text>Add Todo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>To Do List</Text>
            </View>
          }
          data={toDoList}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>

      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Completed</Text>
            </View>
          }
          data={completedList}
          renderItem={renderCompletedItem}
          keyExtractor={item => item.title}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListContainer: {
    flex: 1,
  },
  headerContainer: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'blue',
    height: 50,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToDo;
