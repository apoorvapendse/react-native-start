import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards({cardName}) {
  return (
    <View style={styles.card}>
      <Text >{cardName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:120,
        width:120,
        maxWidth:120,
        color:'red',
        backgroundColor:'red',
        margin:10

    }
})