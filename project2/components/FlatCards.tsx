import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards({cardName}) {
  const styles = StyleSheet.create({
   
    card:{
          flex:1,
          alignItems:'center',
          justifyContent:'center',


          height:110,
          maxWidth:110,
          backgroundColor:`${cardName}`,
          margin:5,
          borderStyle:'solid',
          borderColor:'white',
          borderWidth:2,
          borderRadius:22
  
      },

      cardText:{
        color:'white',
        fontWeight:'400',
        fontSize:20
      }
  })
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{cardName}</Text>
    </View>
  )


 
}

