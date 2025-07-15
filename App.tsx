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

// import { Colors } from 'react-native/Libraries/NewAppScreen';
import ParentComponent from './src/useImperativeHandle/ParentComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const Drawer = createDrawerNavigator();
  const Debounce = createDrawerNavigator();
  const DrawerAnimated = createDrawerNavigator();
  // const Assignments = createNativeStackNavigator();
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
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: 'pink',
          }}
          drawerContent={props => <CustomDrawerContent {...props} />}
          initialRouteName="useImperativeHandle"
        >
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
            options={{ headerShown: false }}
            name="Assignment"
            component={Assignment}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 },
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
