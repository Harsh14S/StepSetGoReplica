import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from './LogIn';
import Home from './Home';

const Stack = createNativeStackNavigator();

export default Nav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="logIn" component={LogIn} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
