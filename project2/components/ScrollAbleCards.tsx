import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollAbleCards() {
  return (
    <View>
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.cardText}>These</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text  style={styles.cardText}>Cards</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.cardText}>Are</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={styles.cardText}>Scrollable</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text style={[styles.cardText,{fontSize:50}]}>😎</Text>
        </View>
     </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
            width:100,
            height:100,
            backgroundColor:'turquoise',
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            margin:12,
            borderRadius:10, 

    },
    container:{
            flex:1,
            padding:5,
            backgroundColor:'white',
            borderRadius:12
            
    },
    cardElevated:{
        elevation:22,
        //shadowOffset works only on ios
        // shadowOffset:{
        //         width:3,
        //         height:3,
        //     }
        //     ,shadowColor:'#000000'
        //     ,shadowOpacity:1,
        //     shadowRadius:3
       
    },
    cardText:{
        fontWeight:'bold',
        fontSize:20,
        color:'black'
    }
})