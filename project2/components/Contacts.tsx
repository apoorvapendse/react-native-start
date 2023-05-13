import { StyleSheet, Text, View ,Image, TouchableOpacity,Linking} from 'react-native'
import React from 'react'

const Contacts = () => {

  const  openContact=(phoneNumber:string)=>{
        Linking.openURL(`tel:${phoneNumber}`)
    }

    const contacts=[
        {
            name:'Hrishikesh Potnis',
            uid:1,
            photoURL:'https://pps.whatsapp.net/v/t61.24694-24/341748576_1353252512073708_1024515538919955623_n.jpg?ccb=11-4&oh=01_AdSC74smXyeOfh5l_FOuPuJ9I6vBtssK2r6l1xDbC0tzXQ&oe=646ACD3B',
            status:'*whistles song*',
            phoneNumber:'+917058982813'
        },

        {
            uid:2,
            name:'Srujan Patwardhan',
            status:"Trusting the prcoess",
            photoURL:'https://pps.whatsapp.net/v/t61.24694-24/321083082_634374691705815_346537577382888249_n.jpg?ccb=11-4&oh=01_AdTsifFxppsVzuGOFx9F3-o2Af76leNTKg2NfrwxZuRm8Q&oe=646AD856',
            phoneNumber:'+918764798644'

        },{
            uid:3,
            name:'Vivek Pendse',
            status:'The joys of being a jack of all trades, master of none is that I work with a lot of products that are fun,even if I only see them few times',
            photoURL:'https://pps.whatsapp.net/v/t61.24694-24/325780952_1351139642395962_6969388178581145019_n.jpg?ccb=11-4&oh=01_AdQLz33Z9V5fYEa4yDYQN-G_Ihc2h0FH6CA5ufCLo0CdmA&oe=646B5092',
            phoneNumber:'+919422712237'

        }
    ]


  return (
    <View>
      <Text style={styles.headingText}>My Contacts</Text>
      <View style={styles.mainContainer}>
            {/* for every individual card */}
            {contacts.map((item,index)=>(
                <TouchableOpacity onPress={()=>{openContact(item.phoneNumber)}}>

                     <View style={styles.contactContainer}>
                     <Image source={{uri:item.photoURL}} style={styles.contactImage} ></Image>
                     <View style={styles.textContainer}>
                        <Text style={styles.personName}>{item.name}</Text>
                        <Text numberOfLines={2} style={styles.personStatus}>{item.status}</Text>
                     </View>
                 </View>
                </TouchableOpacity>
            ))}
            
           

      </View>

    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
    mainContainer:{
        marginBottom:12,
    },
    headingText:{
        fontSize:24,
        padding:8,
        color:'white'
    },
    contactImage:{
        height:80,
        width:80,
        borderRadius:50,
        
    },
    contactContainer:{
    backgroundColor:'#383CC1',
    borderWidth:1,
    borderRadius:4,
    
    padding:10,
    borderColor:'turquoise',
    // marginVertical:3,
    flex:1,
    flexDirection:'row',
    marginHorizontal:5,
    // justifyContent:'center',
    alignItems:'center'
},
textContainer:{
    flex:1,
    justifyContent:'center',
    color:'black',
    // alignItems:'center'
    marginLeft:6,
    padding:10
},
personName:{
    fontWeight:'bold',
    color:'white'
},
personStatus:{
    color:'white',
    fontSize:11,
    fontWeight:'300',
    fontStyle:'italic'


}

})