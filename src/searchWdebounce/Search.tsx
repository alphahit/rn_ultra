import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
//https://chatgpt.com/share/6704ad1a-8be0-8010-8e0f-5b6d71177846
const Search = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        setTodoList(json);
      });
  }, []);
  const searchList = todoList.filter(todo =>
    todo.title.toLowerCase().includes(text.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <FlatList
        data={searchList || todoList}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.completed}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default Search;
