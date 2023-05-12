import { StyleSheet, Text, View,Image,Linking,TouchableOpacity, Touchable} from 'react-native'
import React from 'react'
import tajImage from './../assets/tajmahal.jpg'

export default function PlaceCards() {
  function openWebsite(link:string){
    // Linking.openURL(link);

    Linking.openURL(link);


}
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <TouchableOpacity onPress={()=>openWebsite('https://en.wikipedia.org/wiki/Eiffel_Tower')}>

      <View style={[styles.card,styles.cardElevated]}>
       <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/375px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg'}} style={styles.cardImage}/>

    <View style={styles.cardLabel}>
      <Text style={styles.cardPlace}>Eiffel Tower</Text>
      <Text style={styles.cardLocation}>Tower in Paris, France</Text>
      <Text style={styles.cardDescription} >

The Eiffel tower is a puddled iron structure, an iron that has lost some of its carbon and therefore rusts less quickly. It is pyramidal in shape with slightly curved sides. It measures 324m high and is divided into 4 parts separated by a floor.</Text>

    </View>
   </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>openWebsite('https://whc.unesco.org/en/list/252/')}>
   <View style={[styles.card,styles.cardElevated]}>
       <Image source={tajImage} style={styles.cardImage}/>

    <View style={styles.cardLabel}>
      <Text style={styles.cardPlace}>Taj Mahal</Text>
      <Text style={styles.cardLocation}>Mausoleum in Agra, Uttar Pradesh</Text>
      <Text style={styles.cardDescription} >The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.</Text>

    </View>
   </View>
   </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontFamily:"Times New Roman",
        fontWeight:500,
        paddingLeft:8,
        color:'white',
        fontStyle:'italic',
        backgroundColor:'#6b68ed'
    },
    card:{
      borderRadius:12,
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center',
        height:'auto',
        borderColor:'white',
        borderWidth:1,
        marginVertical:10,
        marginHorizontal:20
        

    },
    cardElevated:{
        elevation:6

    },
    cardImage:{
      borderRadius:12,
            width:'100%',
            height:300
            
    },
    cardLabel:{
      borderBottomEndRadius:12,
      flexGrow:2,
      backgroundColor:'white',
      width:'100%',
      display:'flex',
      justifyContent:'center'
      ,alignItems:'center',
      elevation:12,
    },
    cardPlace:{
      color:'black',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
      letterSpacing:1.4

    },
    cardLocation:{
      color:'black',
      fontSize:18,
      fontWeight:'500',
      fontStyle:'italic'

    },
    cardDescription:{
      display:'flex',
      color:'black',
      lineHeight:16,
      fontSize:15,
      width:'80%',
      textAlign:'center',
      margin:'auto',
      // backgroundColor:'blueviolet'
      
      paddingVertical:6

    }

})