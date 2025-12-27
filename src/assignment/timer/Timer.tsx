import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
  const [timerCount, setTimerCount] = useState(0);
  const [pause, setPause] = useState(false);
  const interValRef = useRef(null);
  useEffect(() => {
    interValRef.current = setInterval(() => {
      if (!pause) {
        setTimerCount(prev => prev + 1);
      }
    }, 1000);

    return () => {
      if (interValRef.current) {
        clearInterval(interValRef.current);
      }
    };
  }, [pause]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        style={{
          backgroundColor: 'yellow',
          width: 100,
          height: 200,
          color: 'black',
        }}
      >
        {timerCount}
      </Text>
      <TouchableOpacity
        style={{ height: 30, width: 30, backgroundColor: 'red' }}
        onPress={() => {
          setPause(prev => !prev);
        }}
      >
        <Text>Pause</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ height: 30, width: 30, backgroundColor: 'blue' }}
        onPress={() => {
          setPause(true);
          setTimerCount(0);
        }}
      >
        <Text>Stop</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;

// const styles = StyleSheet.create({});

// const [timerCount, setTimerCount] = useState(0);
// const intervalId = useRef(null);

// useEffect(() => {
//     intervalId.current = setInterval(() => {
//       setTimerCount(prevCount => prevCount + 1);
//     }, 1000);

//     const timeOutId = setTimeout(() => {
//       console.log('Test Interval Value: ' + timerCount);
//     }, 4000);

//     return () => {
//       clearInterval(intervalId.current);
//       clearTimeout(timeOutId);
//     };
//   }, []);
