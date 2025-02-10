import {Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Timer = () => {
  const [timerCount, setTimerCount] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTimerCount(prevCount => prevCount + 1);
    }, 1000);

    const timeOutId = setTimeout(() => {
      console.log('Test Interval Value: ' + timerCount);
    }, 4000);

    return () => {
      clearInterval(intervalId.current);
      clearTimeout(timeOutId);
    };
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          backgroundColor: 'yellow',
          width: 100,
          height: 200,
          color: 'black',
        }}>
        {timerCount}
      </Text>
    </View>
  );
};

export default Timer;

// const styles = StyleSheet.create({});
