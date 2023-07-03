import React from 'react'
import { Text, View } from 'react-native'
import ComponentE from './ComponentE'

function ComponentD() {
  return (
    <View>
        <Text >
        My name is ComponentD
        </Text>
        <ComponentE/>
    </View>
  )
}

export default ComponentD