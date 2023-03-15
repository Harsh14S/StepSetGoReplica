import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from './Source/Assets/Colors'
import { NavigationContainer } from '@react-navigation/native'
import LogIn from './Source/Components/Body/LogIn'
import Nav from './Source/Components/Body/Nav'

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.black}
        />
        <Nav />
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
