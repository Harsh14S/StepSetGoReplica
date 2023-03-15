import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Assets/Colors'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkSkyblue,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
