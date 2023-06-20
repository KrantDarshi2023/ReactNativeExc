import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


export interface GetData{
   onClick:(value:string)=>void;
 } 

export default function Child(prop:GetData){
    const [text,setText]=useState<string>("");

    function onClickChild(){
      prop.onClick(text);
    }

    return (
        <View>
            <TextInput
              style={{borderWidth:1, height:40}} 
              value={text}
              placeholder="Please fill something for my parent"
              onChangeText={setText}>
             
            </TextInput>
            <Button title="Send" onPress={onClickChild}/>
        </View>
    )
}