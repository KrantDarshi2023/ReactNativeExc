import React, {useContext, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {MyContext} from './MyContext';

function ComponentE() {
  const {name, setName} = useContext(MyContext);
  const [input, setInput] = useState<any>();
  const handleSubmit=(input:any)=>{
    setName(input)
  }

  return (
    <View >
      <Text>
        {/* My name is {setName=input} */}
        My name is {name}

        
      </Text>
      <TextInput style={{borderWidth: 2}} value={input} onChangeText={setInput} />
      <Button title="Submit" onPress={() => handleSubmit(input)} />
    </View>
  );
}

export default ComponentE;
