import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Animated, {
  FadeInLeft,
  FadeOutRight,
  FadeInRight,
  FadeOutLeft,
} from 'react-native-reanimated';

const FadeInFadeOut = () => {
  const [firstVisible, setFirstVisible] = useState(true);
  const [secondVisible, setSecondVisible] = useState(true);

  return (
    <View style={styles.container}>
      {firstVisible && (
        <Animated.View
          style={[styles.animatedView, {backgroundColor: 'pink'}]}
          entering={FadeInLeft}
          exiting={FadeOutRight}>
          <Text>FadeInLeft / FadeOutRight</Text>
        </Animated.View>
      )}
      <Button
        title="Toggle FadeInLeft / FadeOutRight"
        onPress={() => setFirstVisible(!firstVisible)}
      />

      {secondVisible && (
        <Animated.View
          style={[styles.animatedView, {backgroundColor: 'yellow'}]}
          entering={FadeInRight}
          exiting={FadeOutLeft}>
          <Text>FadeInRight / FadeOutLeft</Text>
        </Animated.View>
      )}
      <Button
        title="Toggle FadeInRight / FadeOutLeft"
        onPress={() => setSecondVisible(!secondVisible)}
      />
    </View>
  );
};

export default FadeInFadeOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedView: {
    height: 100,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});
