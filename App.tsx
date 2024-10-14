/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ParentComponent from './src/useImperativeHandle/ParentComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Search from './src/throttleWdebounce/Search';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchDebounce from './src/throttleWdebounce/SearchDebounce';
import Throttle from './src/throttleWdebounce/Throttle';
import LazyLoading from './src/lazyLoading/LazyLoading';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="SearchDebounce" component={SearchDebounce} />
        <Tab.Screen name="Throttle" component={Throttle} />
      </Tab.Navigator>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="useImperativeHandle">
          <Drawer.Screen
            name="useImperativeHandle"
            component={ParentComponent}
          />
          <Drawer.Screen name="DebounceWThrottle" component={MyTabs} />
          <Drawer.Screen name="LazyLoading" component={LazyLoading} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
});

export default App;
