import React, { useReducer, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const initialState = { todos: [] };

function reducer(state: { todos: any[]; }, action: { type: any; payload: any; }) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload, completed: false },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    default:
      return state;
  }
}

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputText });
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Add a new todo"
        />
        <Button title="Add" onPress={addTodo} />
      </View>

      <FlatList
        data={state.todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => dispatch({ type: 'TOGGLE_TODO', payload: item.id })}
          >
            <Text
              style={[styles.todoText, item.completed && styles.completedText]}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, textAlign: 'center', marginVertical: 20 },
  inputRow: { flexDirection: 'row', marginBottom: 20 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  todoText: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  completedText: { textDecorationLine: 'line-through', color: '#888' },
});
