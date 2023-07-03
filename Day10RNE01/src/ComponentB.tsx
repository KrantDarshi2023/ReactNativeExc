import React from 'react'
import { Text, View } from 'react-native'
import ComponentC from './ComponentC'

function ComponentB() {
  return (
    <View>
        <Text >
        My name is ComponentB
        </Text>
        <ComponentC/>
    </View>
  )
}

export default ComponentB