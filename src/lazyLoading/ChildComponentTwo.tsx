import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const ChildComponentTwo = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        name: 'Prateek',
        job: 'Software Developer',
      });
      setLoading(false);
    }, 2000); // Example: 2-second timeout for demonstration

    return () => clearTimeout(timer); // Cleanup timeout to avoid memory leaks
  }, []); // Corrected dependency array

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ChildComponentTwo</Text>
      {data && <Text>{data?.name}</Text>}
      {data && <Text>{data?.job}</Text>}
    </View>
  );
};

export default ChildComponentTwo;
