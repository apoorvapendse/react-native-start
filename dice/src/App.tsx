import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import one from './../assets/one.png'
import two from './../assets/two.png'
import three from './../assets/three.png'
import four from './../assets/four.png'
import five from './../assets/five.png'
import six from './../assets/six.png'

const App = () => {
  return (
    <SafeAreaView>

    <View style={styles.mainContainer}>
      <Image style={styles.diceBox} source={one}></Image>

      <View>
        <TouchableOpacity>

        <Text>Roll Dice</Text>
        </TouchableOpacity>
      </View>

    </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    height:'100%',
    backgroundColor:'#f0f0f0'

  }

})