import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer,{
    Event,
    Track,useTrackPlayerEvents
} from 'react-native-track-player'
import SongDetails from '../SongDetails';
import SongSlider from '../SongSlider';
import Controls from '../Controls';
import { playListData } from '../constants';


const {width} =  Dimensions.get('window');



const MusicPlayer = () => {

  

  return (<SafeAreaView>
    <SongDetails track={track}/>
    <Controls/>
  </SafeAreaView>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({})