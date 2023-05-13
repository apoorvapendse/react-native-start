import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
        {
            name:'Pushkar Waghmare',
            uid:1,
            photoURL:'https://randomuser.me/api/portraits/men/63.jpg',
            status:'The way to get started is to quit talking and begin doing'
        },

        {
            uid:2,
            name:'Ganesh Dhotre',
            status:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            photoURL:'https://randomuser.me/api/portraits/men/46.jpg',

        },{
            uid:3,
            name:'Chote Dole',
            status:'think BIG!',
            photoURL:'https://randomuser.me/api/portraits/men/90.jpg'
        }
    ]


    const loadImage =(photoURL)=>{
        Linking.openURL(photoURL)
    }
    

  return (

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{padding:20}}>
        {contacts.map((item,index)=>{
            return(
                
                <View style={styles.profileContainer} key={index}>
                    <TouchableOpacity onPress={()=>loadImage(item.photoURL)}>
                    <Image source={{uri:item.photoURL}} style={styles.contactImage}/>
                </TouchableOpacity>
                    <Text style={styles.personName}>{item.name}</Text>
                    <Text style={styles.status}>"{item.status}"</Text>
                </View>
            );
        })}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    profileContainer:{
        height:300,
        width:300,
        backgroundColor:'white',
        marginVertical:20,
        marginHorizontal:12,
        flex:1,
        alignItems:'center',
        borderRadius:12,padding:10,
        
    },
    contactImage:{
        height:150,
        width:150,
        borderRadius:75,
        borderColor:'blueviolet',
        borderWidth:2,
        marginTop:4,
    },
    personName:{
        fontStyle:'italic',
        color:'black',
        fontWeight:'500',
        elevation:4,
        fontSize:16
    },
    status:{
        color:'black',
        fontFamily:'Roboto',
        textAlign:'center',
        fontWeight:'400'
        ,padding:10,
    }
})