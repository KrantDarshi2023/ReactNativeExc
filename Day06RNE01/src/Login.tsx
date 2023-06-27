import React from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {styles} from './Styles';
import Navigation from './Navigation';

export default function Login({navigation}:any) {
  return (
    <View style={styles.mainView}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://logowik.com/content/uploads/images/chennai-super-kings3461.jpg',
        }}
      />
      <View style={styles.box}>
        <Text style={styles.Login}>Login</Text>
        <View style={styles.inputView}>
          <Image
            style={styles.phoneImage}
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
      <View style={styles.button}>
        <Button color={'black'} title="Not A Customer? Register" onPress={()=>navigation.navigate("Register")} />
      </View>
      <View style={styles.button2}>
        <Button color={'black'} title="Login" />
      </View>
    </View>
  );
}


