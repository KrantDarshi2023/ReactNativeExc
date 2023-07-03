import React, { useState } from 'react'
import { MyContext } from './src/MyContext'
import { SafeAreaView, Text ,View } from 'react-native'
import ComponentA from './src/ComponentA';

function App() {

  const [name,setName]=useState<any>('Krant');
  return (
    <SafeAreaView >
      <Text>My name is {name}</Text>
      <MyContext.Provider value={{name,setName}}>
        <ComponentA/>
      </MyContext.Provider>
      </SafeAreaView>
      
  )
}

export default App