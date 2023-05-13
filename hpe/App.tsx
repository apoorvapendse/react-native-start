import { SafeAreaView, ScrollView, StyleSheet, Text, View,Image,TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import hpimage from './assets/hpBuilding.png'
import hplogo from './assets/logo.jpg'
import PuneIntro from './components/PuneIntro'
const App = () => {

  const openWebsite=()=>{
    Linking.openURL('https://hpe.com')
  }
  return (
   <SafeAreaView >
    <ScrollView style={styles.scrollView}>
      <View style={styles.imageAndIntroContainer}>
       <TouchableOpacity onPress={()=>(openWebsite())} style={{width:'100%'}}>

        <Image style={styles.hpImage} source={hplogo}/>
       </TouchableOpacity>
        <Text style={[styles.introText,{textAlign:'center'}]}>HPE Services plays a critical role in differentiating HPE from our competitors. We take great pride in providing an exceptional customer experience, driving automation through innovative technologies, accelerating time to value for our customers, helping them achieve their digital ambitions.
</Text>
     
      </View>

<View>
<View style={styles.puneIntroView}>
    <Text style={styles.puneTeamIntro}>Our HPE Pune Office Address</Text>
</View>
      <View style={styles.addressContainer}>

    <Image source={hpimage} style={styles.addressImage}></Image>
    <Text style={styles.addressText}>

<Text style={{fontSize:20,fontWeight:'bold',}}>
  
  Hewlett Packard Enterprise{'\n'}
  </Text>
2nd & 3rd floor, Block 3, ITPP-K International Tech Park, Grant Rd, Kharadi, Pune, Maharashtra 411014</Text>
      <TouchableOpacity onPress={() => Linking.openURL('google.navigation:q=18.560774450538354+ 73.9570507')}>
<Text style={{backgroundColor:'black',color:'white',paddingVertical:10,paddingHorizontal:20,elevation:5,borderRadius:12,marginTop:10}}>Open on Maps</Text>
      </TouchableOpacity>
      </View>
</View>

<PuneIntro/>
    </ScrollView>
   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor:'white',
   
  },
  imageAndIntroContainer:{
    flex:1,
    margin:20,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    padding:20,
    backgroundColor:'white',
    elevation:10

  },
  hpImage:{
    width:'100%',
    height:150,
    borderRadius:12,
    borderWidth:3,
    borderColor:'turquoise'
  },
  introText:{
    width:'100%',
    backgroundColor:'white',
    color:'black',
    fontWeight:'500'
    // textAlign:'center'
  },
  addressContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    padding:20,
    marginHorizontal:20,
    marginVertical:5,
    elevation:14,
    backgroundColor:'turquoise',
    borderRadius:12
  },
  addressImage:{
    width:200,
    height:200,
    borderRadius:20,
  },
  addressText:{
    color:'black',
    textAlign:'center'
  },  puneTeamIntro:{
    color:'black'
  },
  puneIntroView:{
    backgroundColor:'white',
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    elevation:15,
    borderWidth:1,
    borderColor:'turquoise',
    marginHorizontal:20,
    borderRadius:20,
    padding:10
  }
 
})