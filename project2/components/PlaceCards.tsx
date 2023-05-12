import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import tajImage from './../assets/tajmahal.jpg'

export default function PlaceCards() {
  return (
    <View>
      <Text style={styles.headingText}>PlaceCards</Text>
      <View style={[styles.card,styles.cardElevated]}>
       <Image source={{uri:'https://lh3.googleusercontent.com/p/AF1QipNIfUUPfTBNHXxVRoQq3dqZThO87ym3M0weCN4P=s1360-w1360-h1020'}} style={styles.cardImage}/>



      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontFamily:"Times New Roman",
        fontWeight:'bold',
        padding:8,
        color:'white'
    },
    card:{
        width:100,
        height:'auto',
        borderColor:'white',
        borderWidth:1,
        margin:10

    },
    cardElevated:{
        elevation:6

    },
    cardImage:{
            width:300,
            height:300
    }

})