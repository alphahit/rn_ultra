/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ErrorBoundary from 'react-native-error-boundary';
import ParentComponent from './src/useImperativeHandle/ParentComponent';
import Search from './src/throttleWdebounce/Search';
import SearchDebounce from './src/throttleWdebounce/SearchDebounce';
import Throttle from './src/throttleWdebounce/Throttle';
import LazyLoading from './src/lazyLoading/LazyLoading';
import SharedValue from './src/animation/SharedValue';
import CustomDrawerContent from './src/CustomDrawerContent';
import CustomCalendar from './src/customCalendar/CustomCalendar';
import FadeInFadeOut from './src/animation/FadeInFadeOut';
import SegmentedControlScreen from './src/animation/SegmentedControlScreen';
import Timer from './src/timer/Timer';
import CartLogic from './src/assignment/CartLogic';
import CircleSelect from './src/assignment/CircleSelect';
import SelectCircle from './src/assignment/circleSelect/circleSelect';
import Stocks from './src/stocks/Stocks';
import ToDo from './src/todo/ToDo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomnativeModule from './src/nativeModules/CustomnativeModule';
import ErrorSimulatorScreen from './src/ErrorSimulator/ErrorSimulatorScreen';
import MemoryProgressBar from './src/memoryScreen/MemoryProgressBar';
import { SafeAreaView } from 'react-native-safe-area-context';

// Simple Offline Screen
const OfflineScreen = () => (
  <View style={styles.offlineContainer}>
    <Text style={styles.offlineTitle}>No Internet Connection</Text>
    <Text style={styles.offlineMessage}>
      Please check your network and try again.
    </Text>
  </View>
);

// Simple Error Fallback for uncaught JS errors
const ErrorFallback = ({
  error,
  resetError,
}: {
  error: Error;
  resetError: () => void;
}) => (
  <View style={styles.fallbackContainer}>
    <Text style={styles.fallbackTitle}>Something went wrong</Text>
    <Text style={styles.fallbackMessage}>{error.message}</Text>
    <Button title="Try Again" onPress={resetError} />
  </View>
);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    // fetch initial state
    NetInfo.fetch().then(state => {
      setIsConnected(state.isConnected ?? false);
    });
    // subscribe to changes
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
    });
    return () => unsubscribe();
  }, []);

  const Drawer = createDrawerNavigator();
  const Debounce = createDrawerNavigator();
  const DrawerAnimated = createDrawerNavigator();

  function Animation() {
    return (
      <DrawerAnimated.Navigator initialRouteName="SharedValue">
        <Drawer.Screen name="SharedValue" component={SharedValue} />
        <Drawer.Screen name="FadeInFadeOut" component={FadeInFadeOut} />
        <Drawer.Screen
          name="SegmentedControlScreen"
          component={SegmentedControlScreen}
        />
      </DrawerAnimated.Navigator>
    );
  }

  function Assignment() {
    return (
      <DrawerAnimated.Navigator initialRouteName="CartLogic">
        <Drawer.Screen name="CartLogic" component={CartLogic} />
        <Drawer.Screen name="CustomCalendar" component={CustomCalendar} />
        <Drawer.Screen name="CircleSelect" component={CircleSelect} />
        <Drawer.Screen name="SelectCircle" component={SelectCircle} />
      </DrawerAnimated.Navigator>
    );
  }

  function MyDebounce() {
    return (
      <Debounce.Navigator initialRouteName="Search">
        <Debounce.Screen name="Search" component={Search} />
        <Debounce.Screen name="SearchDebounce" component={SearchDebounce} />
        <Debounce.Screen name="Throttle" component={Throttle} />
      </Debounce.Navigator>
    );
  }

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={styles.container}>
        <GestureHandlerRootView style={styles.container}>
          {!isConnected ? (
            <OfflineScreen />
          ) : (
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <NavigationContainer>
                <Drawer.Navigator
                  screenOptions={{
                    drawerActiveTintColor: 'pink',
                  }}
                  drawerContent={props => <CustomDrawerContent {...props} />}
                  initialRouteName="MemoryProgressBar"
                >
                  <Drawer.Screen
                    name="MemoryProgressBar"
                    component={MemoryProgressBar}
                  />
                  <Drawer.Screen
                    name="ErrorBoundary"
                    component={ErrorSimulatorScreen}
                  />
                  {/*
                    <Drawer.Screen
                name="useImperativeHandle"
                component={ParentComponent}
              />
                
                  <Drawer.Screen
                    options={{ headerShown: false }}
                    name="DebounceWThrottle"
                    component={MyDebounce}
                  />
                  <Drawer.Screen name="LazyLoading" component={LazyLoading} />
                  <Drawer.Screen name="Timer" component={Timer} />
                  <Drawer.Screen name="ToDo" component={ToDo} />
                  <Drawer.Screen
                    options={{ headerShown: false }}
                    name="Animation"
                    component={Animation}
                  />
                  <Drawer.Screen name="Stocks" component={Stocks} />
                  <Drawer.Screen
                    name="CustomnativeModule"
                    component={CustomnativeModule}
                  />
                  <Drawer.Screen
                    options={{ headerShown: false }}
                    name="Assignment"
                    component={Assignment}
                  />
                  */}
                </Drawer.Navigator>
              </NavigationContainer>
            </ErrorBoundary>
          )}
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  offlineContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  offlineTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  offlineMessage: {
    fontSize: 16,
    textAlign: 'center',
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  fallbackTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fallbackMessage: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default App;

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <View style={styles.container}>
//         <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//         <NewAppScreen templateFileName="App.tsx" />
//       </View>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;
