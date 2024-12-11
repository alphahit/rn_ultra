/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {COLORS} from '../colors';

interface SegmentedControlProps {
  options: string[];
  selectedOption: string;
  onOptionPress: (option: string) => void;
}
const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  selectedOption,
  onOptionPress,
}) => {
  const segmentedControlWidth = 233;
  const internalPadding = 8;
  const itemWidth = (segmentedControlWidth - internalPadding) / options.length;

  const rStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(
        itemWidth * options.indexOf(selectedOption) + internalPadding / 2,
      ),
    };
  }, [selectedOption, options, itemWidth]);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: COLORS.blurWhite,
        height: 36,
        width: segmentedControlWidth,
        alignSelf: 'center',
        borderRadius: 12,
        paddingLeft: internalPadding / 2,
      }}>
      <Animated.View
        style={[
          {
            left: itemWidth * options.indexOf(selectedOption),
            width: itemWidth,
            alignSelf: 'center',
          },
          rStyle,
          styles.activeBoxStyle,
        ]}
      />
      {options?.map((option: string) => {
        return (
          <Pressable
            key={option}
            onPress={() => onOptionPress(option)}
            style={[
              {
                width: itemWidth,
              },
              styles.labelContainer,
            ]}>
            <Text style={{}}>{option}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default SegmentedControl;

const styles = StyleSheet.create({
  activeBoxStyle: {
    position: 'absolute',

    borderRadius: 8,
    height: 28,
    top: 4,
    backgroundColor: COLORS.vividCyan,
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
