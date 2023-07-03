import React from 'react'
import { Text, View } from 'react-native'
import ComponentD from './ComponentD'

function ComponentC() {
  return (
    <View>
        <Text >
        My name is ComponentC
        </Text>
        <ComponentD/>
    </View>
  )
}

export default ComponentC