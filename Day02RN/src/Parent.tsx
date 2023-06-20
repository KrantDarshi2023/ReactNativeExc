import { useState } from "react";
import { Button, Text, View } from "react-native";
import Child from "./Child";

export default function Parent(){
    const [count,setCount]= useState<number>(0);
    const [message,setMessage]=useState<string>("")

    function IncreaseCount(){
        setCount(count+1);
    }
    function DecreaseCount(){
        setCount(count-1);
    }
    function ResetCount(){
        if(count!=0){
        setCount(0);
        }
        else{
            setMessage("Counter Already 0")
        }
    }
    return(
    <View>
    <Text> Click Respective Buttons To Increase, Decrease,and Reset Count Value</Text>
    <Button title="IncreaseCount" onPress={IncreaseCount}/>
    <Button title="DecreaseCount" onPress={DecreaseCount}/>
    <Button title="Reset" onPress={ResetCount}/>
    <Child count={count}/></View>
    );
}