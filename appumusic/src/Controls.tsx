import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { playBackService } from '../musicService'





const Controls = () => {
  const [isPlaying,setIsPlaying] =  useState(false);
  const playback = usePlaybackState();
  const PlayPause= async(playback:State)=>{
    const currentTrack = await TrackPlayer.getCurrentTrack();
    console.log(currentTrack)
    if(currentTrack!=null){
      if(playback==State.Paused || playback===State.Ready){
        await TrackPlayer.play();
        setIsPlaying(true);
      }else{

        await TrackPlayer.pause();
        setIsPlaying(false)
      }
    }


  }
  
  const NextSong=async()=>{
    await TrackPlayer.skipToNext();
  }
  
  const PreviousSong =async()=>{
    await TrackPlayer.skipToPrevious();
  }


  return (
    <View style={styles.controlsContainer}>
     
     
      <TouchableOpacity onPress={()=>{PreviousSong()}}>
      <Icon name="skip-previous" size={80} color='white' ></Icon>
      </TouchableOpacity>
     
     
      <TouchableOpacity onPress={()=>{PlayPause(playback)}}>
      {isPlaying?<Icon name="pause" size={100} color='white' ></Icon>:  <Icon name="play" size={100} color='white' ></Icon>}  
        

      
      </TouchableOpacity>
     
     
      <TouchableOpacity onPress={()=>{NextSong()}}>
        <Icon name='skip-next' size={70} color='white'></Icon>
      </TouchableOpacity>
    </View>
  )
}

export default Controls

const styles = StyleSheet.create({
  controlsContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
})