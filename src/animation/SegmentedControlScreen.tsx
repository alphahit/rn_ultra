/* eslint-disable react-native/no-inline-styles */
import { Text, View} from 'react-native';
import React, { useState } from 'react';
import SegmentedControl from './SegementedControl';

const SegmentedControlScreen = () => {
    const [selectedOption, setSelectedOption] = useState('Annually')
  return (
    <View style={{flex:1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'space-around'}}>
      <Text>SegmentedControlScreen</Text>
      <SegmentedControl onOptionPress={setSelectedOption} options={['Monthly (4.99€)', 'Annually']} selectedOption ={selectedOption} />
    </View>
  );
};

export default SegmentedControlScreen;

