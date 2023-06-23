import React, { useState } from 'react'
import { FlatList, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'

 
 export interface ICalculator{
    arr:Array<string>;
 }

export default function Calculator(props:ICalculator) {
    const [number,setnumber]=useState<string>("")
    const [operand1,setoperand1]=useState<string>("")
    const [operand2,setoperand2]=useState<string>("")
    const [operator,setoperator]=useState<string>("")

    function onPress(numb:string):void{
        if(numb=="<"){
            setnumber(prev=>prev.slice(0,prev.length-1))
           }
           
         else{
            setnumber(prev=>prev+numb)
            let arrayofOperand:string[]=number.split(/[+-/*]/);
            setoperator(numb)
            if(numb=="="){
              setoperand1(arrayofOperand[0])
              setoperand2(arrayofOperand[1])
              switch(operator){
                case '+':{
                   setnumber(parseInt(operand1)+parseInt(operand2)+"");
                }
                case '-':{
                   setnumber(parseInt(operand1)-parseInt(operand2)+"");
                }
                case '+':{
                   setnumber(parseInt(operand1)*parseInt(operand2)+"");
                }
                case '+':{
                   setnumber(parseInt(operand1)/parseInt(operand2)+"");
                }
              }
            }

         }  
    }
    type ItemProps = {title: string};
    const Item = ({title}: ItemProps) => (
        <TouchableOpacity  onPress={()=>onPress(title)}>
         <Text style={{margin:30}}>{title}</Text>
         </TouchableOpacity>
         
      );
  return (
    <View>
    <TextInput  style={styles.input}  value={number} />
    <FlatList
        data={props.arr}
        renderItem={({item}) => <Item title={item} 
        />}
        keyExtractor={item => item}
        numColumns={4}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      width:350,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });


