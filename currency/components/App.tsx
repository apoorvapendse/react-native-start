import { StyleSheet, Text, TextInput, View ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Country from './Country'
import data from '../data/data.json'
import Snackbar from 'react-native-snackbar'



export const App = () => {

  const [inputValue,setInputValue] = useState('')
 
  const [result,setResult]=useState('');

  const[targetCountry,setTargetCountry]=useState('');

  const updateConversion = (rate:number,name:string)=>{
    if(!inputValue){
    return  Snackbar.show({
        text: 'Enter Amount First!',
        backgroundColor:'black',
        duration: Snackbar.LENGTH_SHORT,
      });
    }

    const newResult = (Number(inputValue) * rate).toFixed(2)
    const finalAns = newResult.toString();
    setResult(finalAns);
    setTargetCountry(name);


    // console.log(finalAns)
  }

  return (
    <View style={styles.mainContainer}>
    
      <Text style={styles.conversionResult}>{result}</Text>


      <TextInput value={inputValue} keyboardType='numeric' style={styles.inputBox} placeholder='enter amount' onChangeText={setInputValue}></TextInput>
    
    
    <View style={styles.countryContainer}>
   
{
  data.map((item,index)=>{
   
  

   
    return(
      
      <TouchableOpacity  key={index} style={[styles.countryBox,item.name===targetCountry?styles.targetCountry:{}]}
         onPress={()=>{updateConversion(item.rate,item.name)}}>
      <Country countryIcon={item.icon} countryName={item.name} countryExchangeRate={item.rate}/>
      </TouchableOpacity>

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
    // textAlign:'center'
  },
  countryContainer:{
    height:'70%',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    // backgroundColor:'green',
    justifyContent:'space-evenly'
  },
  countryBox:{
    // backgroundColor:'white',
    width:90,
    height:90,
    margin:10,
    // flex:1,
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'black',
    borderRadius:20,
    elevation:6
    
},
targetCountry:{
  backgroundColor:'blueviolet'
}

})