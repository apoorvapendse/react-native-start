import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'



export default function AppPro() {
 const isDarkMode = useColorScheme()==='dark'

    return (
    <View style={styles.container}>
      <Text style={isDarkMode?styles.whiteText:styles.blackText}>Apoorva's App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',
        backgroundColor:'blueviolet'
    }
    ,whiteText:{
        backgroundColor:'#0f0f0f',
        borderRadius:10,
        padding:20,
        color:'#ffffff',
        fontSize:30
    }
    ,blackText:{
        color:'#000000'
    }

})