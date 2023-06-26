import React, { useState } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Login from './src/Login';
import Register from './src/Register';

function App() {
  const [visible,setVisible]=useState(false)


  const toLogin=()=>{
    setVisible(false)
  }
  const toRegister=()=>{
    setVisible(true)
  }
  

  return (
    <SafeAreaView>
      <View>
        <Text></Text>
        <Login toRegister={toRegister} />
        <Register modalVisible={visible} toLogin={toLogin}/>
       
      </View>
    </SafeAreaView>
  );
}

export default App;
