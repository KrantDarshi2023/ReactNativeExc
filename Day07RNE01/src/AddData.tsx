import axios from 'axios';
import React, { useState } from 'react'
import { Alert, Button, Switch, TextInput, View } from 'react-native'

function AddData() {
 const [task, setTask]=useState<string>()
 const [isCompleted,setIsCompleted]=useState<boolean>(false)



 const url = 'https://649bc4d2048075719236e4ee.mockapi.io/api/Task1';
 const addTask = async () => {
    try {
      const res = await axios.post(url,{task,isCompleted});
      console.log(res)
      if(res.status===201){
        Alert.alert('Task Added')
      }
    } catch (e) {
      console.log(e);
    }
  };


  return (
   <View>
    <TextInput 
    value={task} onChangeText={setTask}/>
     <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isCompleted ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsCompleted}
        value={isCompleted}
      />
      <Button title='Add' onPress={()=>addTask()}/>
   </View>
  )
}

export default AddData