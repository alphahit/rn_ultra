import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { NativeModules } from 'react-native';

// Destructure the native module from NativeModules
const { MyModule } = NativeModules;

const CustomNativeModule = () => {
  
  // Call MyModule.getNativeValue() when the component mounts
  useEffect(() => {
    if (MyModule && MyModule.getNativeValue) {
      MyModule.getNativeValue()
        .then((value: string) => {
          console.log('Value from native module:', value);
        })
        .catch((err: any) => {
          console.error('Error getting value from native module:', err);
        });
    } else {
      console.error("MyModule or getNativeValue is not available!");
    }
  }, []);  // Empty dependency array to run it only once when the component mounts

  return (
    <View style={styles.container}>
      <Text>CustomNativeModule</Text>
    </View>
  );
};

export default CustomNativeModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
