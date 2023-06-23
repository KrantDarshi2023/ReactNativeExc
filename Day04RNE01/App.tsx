import React from 'react';
import {Text, View} from 'react-native';
import Parent from './src/Parent';


const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Parent/>
    </View>
  );
};

export default YourApp;