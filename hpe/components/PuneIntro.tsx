import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
const PuneIntro = () => {
  return (
    <>
    <View style={styles.puneIntroView}>
    <Text style={styles.puneTeamIntro}>HPE Services Pune Team introduction</Text>
</View>
    <ScrollView horizontal style={styles.cardViewer}>
    <Card name='Anant Gandhi' position='District Manager' number='+919920466998' mail='anant.gandhi@hpe.com'/>
    <Card name='Hemant Doshi' position='MVS Support' number='+919822045489' mail=' hemant.doshi@hpe.com'/>
    <Card name='Ashwini Rajput' position='Co-ordinator' number='+919767873754' mail='suhas.bawker@hpe.com'/>
    <Card name='Suhas Bawkar' position='On-Site Support' number='+919822064893' mail='anant.gandhi@hpe.com'/>
    <Card name='Vivek Pendse' position='On-Site Support' number='+919922991797' mail='vivekp@hpe.com'/>
    <Card name='Harish Mohite' position='On-Site Support' number='+919850556182' mail='harish-hambirrao.mohite@hpe.com'/>
    <Card name='Nilesh Azgaokar' position='On-Site Support' number='+918411041177' mail='nilesh.azagaokar@hpe.com'/>
    <Card name='Suryakant Gavade' position='On-Site Support' number='+919923418085' mail='gavade.suryakant@hpe.com'/>
    <Card name='Sidharud Bhatade' position='On-Site Support' number='+919881236280' mail=' sidharud.bhatade@hpe.com'/>
    <Card name='Nitin Chaudhari' position='On-Site Support' number='+918208187356' mail=' nitin-suresh.chaudhari@hpe.com'/>
    <Card name='Sagar Shitole' position='On-Site Support' number='+917776097998' mail='sagar.shitole@hpe.com'/>
    
    
    </ScrollView>
    </>

  )
}

export default PuneIntro

const styles = StyleSheet.create({
    puneTeamIntro:{
        color:'black'
      },
      puneIntroView:{
        backgroundColor:'white',
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        elevation:15,
        borderWidth:1,
        fontSize:16,
        padding:12,
        borderColor:'turquoise',
        marginHorizontal:20,
        marginTop:20,
        borderRadius:20
      },
      cardViewer:{
        padding:20,
        elevation:12,
        backgroundColor:'turquoise',
        marginTop:10,
        marginHorizontal:6
      }
})