import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TextInputBox from './TextInputBox';

const ParentComponent: React.FC = () => {
  const textInputRef = useRef(null);

  const handleFocusTextInput = () => {
    textInputRef.current?.focusText();
  };

  const handleBlurTextInput = () => {
    textInputRef.current?.blurText();
  };

  const handleClearTextInput = () => {
    textInputRef.current?.clearText();
  };
  const handleXYZTextInput = () => {
    textInputRef.current?.xyzText();
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleFocusTextInput}>
          <Text style={styles.openButton}>Focus Text</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleBlurTextInput}>
          <Text style={styles.openButton}>Blur Text</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClearTextInput}>
          <Text style={styles.openButton}>Clear Text</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleXYZTextInput}>
          <Text style={styles.openButton}>XYZ Text</Text>
        </TouchableOpacity>
        <TextInputBox ref={textInputRef} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  openButton: {
    color: 'green',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ParentComponent;
