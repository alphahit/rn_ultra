/* eslint-disable react-native/no-inline-styles */
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import React, {Suspense, useState} from 'react';

const ChildComponent = React.lazy(() => import('./ChildComponent'));
const ChildComponentTwo = React.lazy(() => import('./ChildComponentTwo'));

const LazyLoading = () => {
  const [showChild, setShowChild] = useState(false);
  const [showChildTwo, setShowChildTwo] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <TouchableOpacity
        onPress={() => {
          setShowChild(true);
          setShowChildTwo(false);
        }}
        style={{
          height: 50,
          margin: 20,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Show Child</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setShowChild(false);
          setShowChildTwo(true);
        }}
        style={{
          height: 50,
          margin: 20,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Show Child Two</Text>
      </TouchableOpacity>

      {showChild && (
        <Suspense fallback={<ActivityIndicator />}>
          <ChildComponent />
        </Suspense>
      )}
      {showChildTwo && (
        <Suspense fallback={<ActivityIndicator />}>
          <ChildComponentTwo />
        </Suspense>
      )}
    </View>
  );
};

export default LazyLoading;
