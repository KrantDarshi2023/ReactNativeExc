import React from 'react';
import {View} from 'react-native';
import Login from './Login';
import Register from './Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';


export default function Navigation() {
    const Stack = createNativeStackNavigator();
  let isLogged: boolean = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogged ? (
          <Stack.Group
            screenOptions={{headerStyle: {backgroundColor: 'papayawhip'}}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Group>
        ) : (
          <Stack.Group
            screenOptions={{headerStyle: {backgroundColor: 'papayawhip'}}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

