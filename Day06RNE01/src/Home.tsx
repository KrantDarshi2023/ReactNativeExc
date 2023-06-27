import React from 'react'
import { Button, Text, View } from 'react-native'

 export default function Home({navigation}:any) {
  return (
    <View>
        <Text>This is home page</Text>
         <Button title='Go to Settings page' onPress={()=>navigation.navigate("Settings")}/>
    </View>
  )
}

