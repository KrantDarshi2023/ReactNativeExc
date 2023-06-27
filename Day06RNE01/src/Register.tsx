import React from 'react';
import {
  Button,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {styleRegister} from './Styles';

export default function Register({navigation}:any) {
  return (
    <View style={{height: '98%'}}>
      <View style={styleRegister.mainView}>
        <View style={styleRegister.box}>
          <Text style={styleRegister.Register}>Register</Text>
          <Image
            style={styleRegister.MotuImage}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf7fuz6zygjRYrRZqmby84241etKQA5t8qJA&usqp=CAU',
            }}
          />
          <Image
            style={styleRegister.CameraImage}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/45/45010.png',
            }}
          />
          <View style={styleRegister.inputView}>
            <Image
              style={styleRegister.phoneImage}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png',
              }}
            />
            <TextInput
              style={{borderBottomWidth: 2, width: 100}}
              placeholder="Username"
              value=""
            />
          </View>
          <View style={styleRegister.inputView}>
            <Image
              style={styleRegister.phoneImage}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1295/1295181.png',
              }}
            />
            <TextInput
              style={{borderBottomWidth: 2, width: 100}}
              placeholder="Address"
              value=""
            />
          </View>
          <View style={styleRegister.inputView}>
            <Image
              style={styleRegister.phoneImage}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/15/15874.png',
              }}
            />
            <TextInput
              style={{borderBottomWidth: 2}}
              placeholder="Mobile Number"
              value=""
            />
          </View>
        </View>
        <View style={styleRegister.button}>
          <Button color={'black'} title="Register" onPress={()=>navigation.navigate("Login")}/>
        </View>
      </View>
    </View>
  );
}
