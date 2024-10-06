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
import Search from './src/searchWdebounce/Search';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Drawer = createDrawerNavigator();
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
          <Drawer.Screen name="SearchDebounce" component={Search} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
});

export default App;
