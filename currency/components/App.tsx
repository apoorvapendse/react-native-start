import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Country from './Country'
import indiaIcon from './assets/india.png'
import data from '../data/data.json'
const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.conversionResult}>$ 12.33</Text>
      <TextInput value={''} keyboardType='numeric' style={styles.inputBox} placeholder='enter amount' ></TextInput>
    <View style={styles.countryContainer}>
   
{
  data.map((item,index)=>{
    return(
      <Country key={index} props={item.name,item.icon}/>
    )
  })
}

     
   

    </View>
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    backgroundColor:'white',
    height:'100%'
  },
  conversionResult:{
    fontSize:24,
    color:'black'
  },
  inputBox:{
    margin:20,
    width:200,
    backgroundColor:'black',
    textAlign:'center'
  },
  countryContainer:{
    height:'70%',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    // backgroundColor:'green',
    justifyContent:'space-evenly'
  }

})