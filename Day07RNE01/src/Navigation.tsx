import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import DemoApi from './DemoApi';
import AddData from './AddData';
import Home from './Home';

function Navigation() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DemoApi" component={DemoApi} />
            <Stack.Screen name="AddData" component={AddData} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation