import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

//This Animated object wraps React Native built-ins such as View, ScrollView or FlatList.

const SharedValue = () => {
  const width = useSharedValue(100);
  //useSharedValue : A shared value is a driving factor of all your animations.
  //Think of it as a React state which is automagically kept in sync between the “JavaScript” and the “native” side of your app (hence the name).
  //In a shared value, you can store any JS value like number, string or boolean but also data structures such as array and object.
  //Values stored in shared values are accessed and modified by their .value property.
  //There's no setter or anything - you simply mutate the .value property.
  const handleSharedPress = () => {
    //make it expand by 50px on each button press.
    width.value = withSpring(width.value + 50);
  };

  // useAnimatedStyle : It adds additional control and flexibility over your animation."
  const translateX = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(translateX.value * 2)}],
  }));
  const handleTranslatePress = () => {
    translateX.value += 50;
  };
  const styles = StyleSheet.create({
    animatedContainer: {
      height: 100,
      backgroundColor: 'violet',
      borderRadius: 20,
    },
    container: {flex: 1, alignItems: 'center'},
    box: {
      height: 120,
      width: 120,
      backgroundColor: '#b58df1',
      borderRadius: 20,
      marginTop: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedContainer, {width}]} />

      <Button onPress={handleSharedPress} title="Click me" />
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.container}>
        <Button onPress={handleTranslatePress} title="Click me" />
      </View>
    </View>
  );
};

export default SharedValue;
