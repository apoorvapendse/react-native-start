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
            phoneNumber:'7058982813'
        },

        {
            uid:2,
            name:'Vishwajeet',
            status:"My life my journey my rules 🤟",
            photoURL:'https://pps.whatsapp.net/v/t61.24694-24/302121642_197112542690191_6682394584226465002_n.jpg?ccb=11-4&oh=01_AdQLTF_2N7_qNBZeGnfYWrLmSfdgRe4OpVWw7eMdZSpc-w&oe=646AD707',
            phoneNumber:'7774909121'

        },
        {
            uid:4,
            name:'Srujan Patwardhan',
            status:'Trusting the process',
            photoURL:'https://pps.whatsapp.net/v/t61.24694-24/321083082_634374691705815_346537577382888249_n.jpg?ccb=11-4&oh=01_AdTsifFxppsVzuGOFx9F3-o2Af76leNTKg2NfrwxZuRm8Q&oe=646AD856',
            phoneNumber:'8767498644'

        },
        
        
        
        {
            uid:3,
            name:'Shreya Patwardhan',
            status:'VR Veloce 🏎️🏎️🏎️ ',
            photoURL:'https://pps.whatsapp.net/v/t61.24694-24/311460345_184911064083691_8462246825487457871_n.jpg?ccb=11-4&oh=01_AdSJkWf4cIGU-SuWmCKVr2xVXf6WBrDOeMoi597GHs8l0g&oe=646AD22B',
            phoneNumber:'9158994184'

        },
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
    // borderWidth:1,
    borderRadius:4,
    marginVertical:3,
    paddingHorizontal:10,
    paddingVertical:5,
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