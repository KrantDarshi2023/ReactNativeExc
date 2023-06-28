import React from 'react'
import { Button, View } from 'react-native'
import DemoApi from './DemoApi'
import AddData from './AddData'

function Home({navigation}:any) {
  return (
   <View>
    <Button title='GetData' onPress={()=>navigation.navigate("DemoApi")}/>
    <Button title='AddData' onPress={()=>navigation.navigate("AddData")}/>
   </View>
  )
}

export default Home