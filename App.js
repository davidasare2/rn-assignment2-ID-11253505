import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl">
        My name is <Text className="font-bold">David</Text>
      </Text>
    </View>
  );
}

export default MyComponent;
