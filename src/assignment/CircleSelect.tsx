import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

interface CircleItem {
  id: string;
  color: 'white' | 'grey';
}

const CircleSelect = () => {
  const [circleArray, setCircleArray] = useState<CircleItem[]>([]);

  const addOneCircle = () => {
    const circleItem: CircleItem = {
      id: (Math.random() * 10 + 10).toString(),
      color: 'white',
    };
    setCircleArray([...circleArray, circleItem]);
  };

  const toggleCircleColor = (item: CircleItem) => {
    const updatedCircle = circleArray.map(circleItem =>
      circleItem.id === item.id
        ? {
            ...circleItem,
            color: circleItem.color === 'white' ? 'grey' : 'white',
          }
        : circleItem,
    );
    setCircleArray(updatedCircle);
  };

  const renderCircle = ({item}: {item: CircleItem}) => (
    <TouchableOpacity
      onPress={() => toggleCircleColor(item)}
      style={[styles.circle, {backgroundColor: item.color}]}>
      <Text style={styles.circleText}>Test</Text>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={addOneCircle}>
        <Text style={styles.addButtonText}>Add Circle</Text>
      </TouchableOpacity>

      <Text style={styles.countText}>
        Grey Circle Count:{' '}
        {circleArray.reduce(
          (acc, item) => (item.color === 'grey' ? acc + 1 : acc),
          0,
        )}
      </Text>

      <FlatList
        data={circleArray}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={item => item.id}
        style={styles.list}
        renderItem={renderCircle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  addButton: {
    borderWidth: 1,
    width: 100,
    backgroundColor: 'black',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'red',
    fontWeight: '600',
  },
  countText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
    color: 'black',
  },
  list: {
    marginTop: 20,
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  circleText: {
    color: '#333',
  },
  separator: {
    height: 10,
  },
});

export default CircleSelect;
