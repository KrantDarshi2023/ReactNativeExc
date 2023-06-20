import { Text, View } from "react-native";

export interface Child{
    count:number;
}

export default function Child(props:Child){
  return(
    <View>
        <Text>
            {props.count}
        </Text>
    </View>
  )
}