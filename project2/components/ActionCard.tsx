import { StyleSheet, Text, View,TouchableOpacity, Linking, Image, Touchable} from 'react-native'
import React from 'react'

const ActionCard = () => {
    const message = "Hi Apoorva, your app is the best app in the world";
    const number = 9921847362
    function openWebsite(link:string){
        // Linking.openURL(link);

        Linking.openURL(link);


    }

  return (<>
      <Text style={styles.headingText}>Some Links</Text>
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>openWebsite('https://github.com/ApoorvaPendse')}>

        <View style={styles.actionCard}>

        <Image source={{uri:'https://avatars.githubusercontent.com/u/102853901?v=4'}} style={styles.imgCard}></Image>
        <Text style={styles.cardTitle}>Github</Text>

        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>openWebsite(`whatsapp://send?phone=${number}&text=${message}`)}>

        <View style={styles.actionCard}>

        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZEIiZ0_pEG4bxUWNDl1Bd-reFsABbfDTfg&usqp=CAU'}} style={styles.imgCard}></Image>
        <Text style={styles.cardTitle}>Feedback</Text>

        </View>
      </TouchableOpacity>


    </View>
    </>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headingText:{
        alignSelf:'center',
        fontSize:25,
        padding:8,
        color:'white',
        fontWeight:'bold',
        backgroundColor:'green'
    }
    ,
    actionCard:{
        width:120,
        height:120,
       
        marginVertical:30,
        marginHorizontal:10,
        borderRadius:75,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        

    },
    imgCard:{
        borderColor:'turquoise',
        borderWidth:1,
        width:'100%',
        height:'100%',
        borderRadius:75
        
    },
    cardTitle:{
        fontStyle:'italic'
    }

})