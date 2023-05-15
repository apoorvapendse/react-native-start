import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'
import App from './App'

//countryIconProps is a custom datatype which has two components
type countryIconProps = PropsWithChildren<{
  countryIcon:ImageSourcePropType,
    countryName:string,
    countryExchangeRate:number
}>



const Country = (props:countryIconProps):JSX.Element => {
  // console.log(countryIcon)
  return (
    

   
    <View >
        <Image source={{uri:`${props.countryIcon}`}} style={styles.countryImage}></Image>
      <Text style={styles.countryName}>{props.countryName}</Text>
    </View>
   
   
   
    
   
  )
}

export default Country

const styles = StyleSheet.create({
  
    countryImage:{
        height:50,
        width:50,
        borderRadius:25,
        

    },
    countryName:{
        fontSize:14,
        fontStyle:'italic',
        color:'white',
        textAlign:'center'
    }
})