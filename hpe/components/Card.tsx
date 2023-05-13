import { StyleSheet, Text, View ,Image,TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import mailLogo from './../assets/mailLogo.png';
import WhatsappLogo from './../assets/whatsappLogo.jpeg'
import phoneLogo from './../assets/phonelogo.png'

const Card = ({name,mail,number,position}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.memberName}>{name}</Text>
      <Text style={styles.memberPosition}>({position})</Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={()=>{Linking.openURL(`mailto:${mail}`)}}>

        <Image source={mailLogo} style={styles.logo}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{Linking.openURL(`whatsapp://send?phone=${number}&text=`)}}>

        <Image source ={WhatsappLogo} style={styles.logo}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${number}`)}}>
        <Image source={phoneLogo} style={styles.logo}></Image>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card:{
        borderColor:'blueviolet',
        borderWidth:2,
        backgroundColor:'black',
        height:200,
        width:200,
        borderRadius:10,
        padding:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        marginHorizontal:10,
        marginBottom:12
    },
    memberName:{
        color:'white',
        textAlign:'center',
        fontWeight:'600',
        fontSize:15
        },
    memberPosition:{
      fontStyle:'italic',
      color:'white'
    },
    linksContainer:{
        display:'flex',
        flexDirection:'row'
    },
    logo:{
        height:50,
        width:50,
        borderRadius:25,
        borderWidth:2,
        borderColor:'turquoise',
        marginVertical:10,
        marginHorizontal:4
    }
})