import { Text, View } from "react-native";
import Child from "./Child";
import { useState } from "react";


export default function displayValue(){
  const [value,setValue]=useState<string>("");
    function getValue(value:string){
        setValue(value);
    }
    return (
        <View>
         <Child onClick={getValue}/>
            <Text>
                {value}
            </Text>
        </View>
    )
}