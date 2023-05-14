import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

type countryIconProps = PropsWithChildren<{
    imageUrl:ImageSourcePropType,
    name:string
}>



const Country = (props:countryIconProps) => {
  return (
    

    <TouchableOpacity style={styles.countryBox}>
    <View >
        <Image source={{uri:`${props.imageUrl}`}} style={styles.countryImage}></Image>
      <Text style={styles.countryName}>{props.name}</Text>
    </View>
    </TouchableOpacity>
   
   
   
    
   
  )
}

export default Country

const styles = StyleSheet.create({
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