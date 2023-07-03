import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ComponentB from './ComponentB'
import { MyContext } from './MyContext'

function ComponentA() {
    const{name,setName}=useContext(MyContext)
    
  return (
    <View >
        <Text>My name is {name} </Text>
        <ComponentB/>
    </View>
  )
}

export default ComponentA