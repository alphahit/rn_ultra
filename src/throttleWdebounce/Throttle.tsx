/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
// Throttling is a technique used to control the rate at which a function is executed, ensuring it doesn’t run too frequently. In React Native development,
// it’s vital for managing resource-intensive operations.

import {Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';

const throttle = (func: { (): void; (arg0: any): void; }, delay: number | undefined) => {
  let throttling = false;
  return (...args: any) => {
    if (!throttling) {
      throttling = true;
      func(...args);
      setTimeout(() => {
        throttling = false;
      }, delay);
    }
  };
};

const Throttle = () => {
  const [count, setCount] = useState(0);
  const [throttledCount, setThrottledCount] = useState(0);

  const handleThrottleClick = useCallback(
    throttle(() => {
      setThrottledCount(prev => prev + 1);
    }, 1500),
    [],
  );
  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <TouchableOpacity
        onPress={() => setCount(prev => prev + 1)}
        style={{backgroundColor: 'brown', height: 50}}>
        <Text> Click Count</Text>
      </TouchableOpacity>
      <Text> Count {count}</Text>

      <TouchableOpacity
        onPress={handleThrottleClick}
        style={{backgroundColor: 'brown', height: 50}}>
        <Text>Throttled Click Count</Text>
      </TouchableOpacity>
      <Text>Throttled Count {throttledCount}</Text>
    </View>
  );
};

export default Throttle;

