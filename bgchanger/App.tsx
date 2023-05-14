import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () =>{

  const [bgcolor,setBgColor] = useState('#ffffff')
  const [circle1,setCircle1]=useState('')
  const [circle2,setCircle2]=useState('')
  const [circle3,setCircle3]=useState('')
  const [circle4,setCircle4]=useState('')
  const [circle5,setCircle5]=useState('')
  
  const changeColor=()=>{
   const hexRange = '123456789ABCDEF'
   
   let color = '#';
   let circleColor1 = '#';
   let circleColor2 = '#';
   let circleColor3 = '#';
   let circleColor4 = '#';
   let circleColor5 = '#';
   for(let i = 0  ;i <=5 ;i ++)
   {
    const randomIndex = 
    color += hexRange[Math.floor((Math.random() * hexRange.length))]
    circleColor1 += hexRange[Math.floor((Math.random() * hexRange.length))]
    circleColor2 += hexRange[Math.floor((Math.random() * hexRange.length))]
    circleColor3 += hexRange[Math.floor((Math.random() * hexRange.length))]
    circleColor4 += hexRange[Math.floor((Math.random() * hexRange.length))]
    circleColor5 += hexRange[Math.floor((Math.random() * hexRange.length))]
    
   }
   setBgColor(color);
   setCircle1(circleColor1);
   setCircle2(circleColor2);
   setCircle3(circleColor3);
   setCircle4(circleColor4);
   setCircle5(circleColor5);


  }
  return (
    <>
    <StatusBar backgroundColor={bgcolor}/>
    <View style={[styles.buttonContainer,{backgroundColor:bgcolor}]}>
      <TouchableOpacity style={styles.bgButton} onPress={()=>{changeColor()}}>
        <View style={{elevation:2,padding:20,borderRadius:2}}>

        <Text style={styles.buttonText}>Change Background Color</Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.circle1,{backgroundColor:circle1}]}></View>
      <View style={[styles.circle2,{backgroundColor:circle2}]}></View>
      <View style={[styles.circle3,{backgroundColor:circle3}]}></View>
      <View style={[styles.circle4,{backgroundColor:circle4}]}></View>
      <View style={[styles.circle5,{backgroundColor:circle5}]}></View>
    </View>
    
    </>
  )
}

export default App

const styles = StyleSheet.create({
  buttonContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems :'center',
    height:'100%',
  },
  bgButton:{
    padding:20,
    borderRadius:12,
   
    
    
    
  },
  buttonText:{
    fontWeight:'bold',
color:'white',
  },
  circle1:{
    borderWidth:1,
    borderColor:'black',
    height:320,
    width:320,
    borderRadius:160,  
    position:'absolute',
    top:-120,
    left:-120
},
  circle2:{
    borderWidth:1,
    borderColor:'orange',
    height:100,
    width:100,
    borderRadius:50,  
    position:'absolute',
    top:200,
    left:200
},
  circle3:{
    borderWidth:1,
    borderColor:'blue',
    height:200,
    width:200,
    borderRadius:100,  
    position:'absolute',
    top:500,
    left:290
},
  circle4:{
    borderWidth:1,
    borderColor:'black',
    height:80,
    width:80,
    borderRadius:40,  
    position:'absolute',
    top:550,
    left:50
},
  circle5:{
    borderWidth:1,
    borderColor:'black',
    height:400,
    width:400,
    borderRadius:200,  
    position:'absolute',
    top:700,
    left:20
},
})