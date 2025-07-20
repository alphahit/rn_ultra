/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Alert,
  NativeModules,
  DeviceEventEmitter,
  Text,
} from 'react-native';

const { ErrorBoundaryModule } = NativeModules;

// Add a simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Something went wrong.</Text>
          <Button title="Restart App" onPress={() => { /* Optionally reload JS bundle or navigate home */ }} />
        </View>
      );
    }
    return this.props.children;
  }
}

export default function ErrorSimulatorScreen() {
  useEffect(() => {
    // 1️⃣ Listen for native‐side uncaught exceptions:
    const sub = DeviceEventEmitter.addListener(
      'onErrorOccurred',
      (payload) => {
        Alert.alert('Native Error Caught', payload);
      }
    );

    // 2️⃣ Override JS global handler to forward JS errors into native:
    const defaultHandler = global.ErrorUtils.getGlobalHandler();
    global.ErrorUtils.setGlobalHandler((error, isFatal) => {
      // tell native module about it
      ErrorBoundaryModule.reportJSError(
        error.message ?? error.toString(),
        isFatal
      );
      // still show RN red box or fallback
      defaultHandler(error, isFatal);
    });

    return () => sub.remove();
  }, []);

  // Simulate a JS error (undefined function)
  const triggerJSError = () => {
    // @ts-ignore
    nonexistentFunction(); 
  };

  // Simulate a native (Kotlin) crash
  const triggerNativeError = () => {
    ErrorBoundaryModule.simulateNativeError();
  };

  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <Button title="Trigger JS Error" onPress={triggerJSError} />
        <View style={{ height: 16 }} />
        <Button title="Trigger Native Error" onPress={triggerNativeError} />
      </View>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
