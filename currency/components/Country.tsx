import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'
import App from './App'

type countryIconProps = PropsWithChildren<{
    imageUrl:ImageSourcePropType,
    name:string
}>



const Country = ({countryName,countryIcon,countryExchangeRate}) => {
  // console.log(countryIcon)
  return (
    

   
    <View >
        <Image source={{uri:`${countryIcon}`}} style={styles.countryImage}></Image>
      <Text style={styles.countryName}>{countryName}</Text>
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