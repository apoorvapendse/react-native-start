import { Image, ImageURISource, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import SongSlider from './SongSlider'
import { Track } from 'react-native-track-player'

type SongInfoProps = PropsWithChildren<{
    track:Track |null|undefined;

}> 


const SongDetails = ({track}:SongInfoProps) => {
    // console.log("track is:",track);


  return (
    <View style={styles.detailsContainer}>
        <View>
            <Image source={{uri:track?.artwork?.toString()}} style={styles.artwork} ></Image>
        </View>
        <View>
            <Text style={styles.title}>{track?.title}</Text>
      <Text style={styles.album}>{track?.artist}<Text> {'\n'}{track?.album}</Text></Text>

        </View>
        <View>
            <SongSlider/>
        </View>
    </View>
  )
}

export default SongDetails

const styles = StyleSheet.create({
    detailsContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly'
        ,height:'70%'
        ,marginTop:40
    },
    artwork:{
        height:300,
        width:300,
    },
    album:{
        fontSize:12,
        textAlign:'center',
        color:'white'},
    title:{
        fontSize:20,
        textAlign:'center',
        color:'white'
    }
})