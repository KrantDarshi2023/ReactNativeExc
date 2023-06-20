import React from 'react';
import {Text, View} from 'react-native';
import Parent from './src/Parent';
import Child from './src/Child';


const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Parent/>
      {/* <Child/> */}
    </View>
  );
};

export default YourApp;