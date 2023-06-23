import React, { useState } from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import Calculator from './Calculator';




const numArr:string[]=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','<']

export default function Parent() {
  return (
    <SafeAreaView>
    <View >
        <Calculator arr={numArr}/>
    </View>
    </SafeAreaView>
    
  )
}

