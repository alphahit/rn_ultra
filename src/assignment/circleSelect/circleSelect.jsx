import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import CircleComponent from '../components/CircleComponent'
const SelectCircle = () => {
  const [circleArray, setCircleArray] = useState([
    {text: 'A', Selected: true},
    {text: 'B', Selected: true},
    {text: 'C', Selected: false},
    {text: 'D', Selected: false},
    {text: 'E', Selected: false},

    {text: 'F', Selected: false},

  ]);
  const handlePress = item => {
    console.log(item);

    let updatedMap = circleArray.map(circleItem =>
      circleItem.text === item.text
        ? {
            ...circleItem,
            Selected: !circleItem.Selected,
          }
        : circleItem,
    );

    setCircleArray(updatedMap);
  };
  return (
    <SafeAreaView style={styles.container}>
      

      <FlatList

        ListHeaderComponent={<Text style={{color: 'blue', borderBottomWidth: 1, width: 100, textAlign: 'center'}}>
        Circles:{' '}
        {circleArray.reduce(
          (acc, circleItem) => (circleItem.Selected ? acc + 1 : acc),
          0,
        )}
      </Text>}
        data={circleArray}
        //   keyExtractor={({item}) => item.text}
        style={{ width: '60%', borderWidth: 1, }}
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}
        renderItem={({item}) => {
          return (
            // <TouchableOpacity
            //   style={{
            //     alignItem: 'center',
            //     justifyContent: 'center',
            //     backgroundColor: item.Selected ? 'grey' : 'white',
            //     height: 100,
            //     width: 100,
            //     borderRadius: 100,
            //     marginTop: 10
            //   }}
            //   onPress={() => {
            //     handlePress(item);
            //   }}>
            
            //   <Text style={{textAlign: 'center', color: 'black'}}>{item.text}</Text>
            // </TouchableOpacity>


            <CircleComponent handlePress={handlePress} item={item}/>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default SelectCircle;
