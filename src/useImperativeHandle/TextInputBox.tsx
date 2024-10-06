/* eslint-disable no-labels */
import {View, TextInput} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';

const TextInputBox = forwardRef((props, ref) => {
  const [value, setValue] = useState('');

  const textRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusText: () => textRef?.current?.focus(),
    blurText: () => textRef?.current?.blur(),
    clearText: () => {
      textRef?.current?.clear();
      setValue('');
    },
    xyzText: () => {
      setValue(value + 'xyz');
    },
  }));

  return (
    <View style={{backgroundColor: 'red'}}>
      <TextInput
        ref={textRef}
        value={value}
        onChangeText={text => setValue(text)}
      />
    </View>
  );
});

export default TextInputBox;
