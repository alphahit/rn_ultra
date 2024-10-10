// Debouncing is another JavaScript technique that ensures a function is only executed after a certain delay following the last invocation. 
// In React Native, it’s crucial for smoother user interactions.
// Debouncing is vital in scenarios like handling user input in search bars, reducing the number of API requests sent when users type rapidly.

import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

const deboounce = (
  func: {(term: any): void; apply?: any},
  delay: number | undefined,
) => {
  let timeoutId: number;

  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

const SearchDebounce = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        return response.json();
      })
      .then(json => {
        setTodoList(json);
        setFilteredResults(json);
      });
  }, []);

  const handleSearch = useCallback(
    deboounce((term: string) => {
      const results = todoList.filter(todo =>
        todo?.title.toLowerCase().includes(term.toLowerCase()),
      );

      setFilteredResults(results);
    }, 1500),
    [todoList],
  );

  const onChangeSearch = (text: React.SetStateAction<string>) => {
    setSearchTerm(text);
    handleSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={onChangeSearch}
      />
      <FlatList
        data={filteredResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.completed}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'grey',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  item: {
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default SearchDebounce;
