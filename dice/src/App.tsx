import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity, ImageSourcePropType, } from 'react-native'
import { trigger } from "react-native-haptic-feedback";

import React, { PropsWithChildren, useState } from 'react'
import one from './../assets/one.gif'
import two from "./../assets/two.png"
import three from './../assets/three.gif'
import four from "./../assets/four.png"
import five from './../assets/five.gif'
import six from './../assets/six.gif'


type DiceProps = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>


const Dice = ({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View style={{elevation:12}}>

    <Image style={styles.diceBox} source={imageUrl}/>
    </View>
  )
}
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true,
};


const App = () => {
  const [diceNumber,setDiceNumber]=useState<ImageSourcePropType>(one);//we will put url in the useState

  const generateNumber =()=>{
    trigger("impactLight",options)
    const arrayOfChoices =[one,two,three,four,five,six];
    const newChoiceIndex = Math.floor(Math.random() * 6);
    setDiceNumber(arrayOfChoices[newChoiceIndex]);
    console.log(newChoiceIndex)
  }



  return (
    <SafeAreaView>

    <View style={styles.mainContainer}>
     <Dice imageUrl={diceNumber}/>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{generateNumber()}} >

        <Text style={styles.rollText}>Roll Dice</Text>
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
    backgroundColor:'#51E1ED'

  },
  rollText:{
    color:'greenyellow',
    fontWeight:'bold',
    
    fontSize:20,
  }
  ,buttonContainer:{
    borderRadius:4,
   
    backgroundColor:'black',
    paddingVertical:20,
    paddingHorizontal:40,
    marginTop:30,
    elevation:6
  },
  diceBox:{
    borderWidth:1,
    borderColor:'black',
    width:300,
    height:300
  }
})