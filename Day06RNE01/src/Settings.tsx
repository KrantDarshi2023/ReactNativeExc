import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Settings({navigation}:any) {
  return (
   <View>
    <Text>
        This is Details page.
    </Text>
    <Button title='Back' onPress={()=>navigation.navigate("Home")}/>
   </View>
  )
}

