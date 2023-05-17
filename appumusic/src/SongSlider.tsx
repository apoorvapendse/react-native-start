import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { useProgress ,Track, useTrackPlayerEvents, Event} from "react-native-track-player";
import getAudioDurationInSeconds from "get-audio-duration";

const SongSlider = () => {

    const [track,setTrack] = useState<Track|null>()
    useTrackPlayerEvents([Event.PlaybackTrackChanged],async event=>{
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
                setTrack(playingTrack);
                break;
        
            default:
                break;
        }
    })

const {position,duration} = useProgress()
console.log("postion:",position);
async function tellDuration() {
    
    const myDuration = await getAudioDurationInSeconds(track.url)
    console.log("myduration",myDuration)
}
tellDuration();
return (
    <View>
      <Slider
      value={position}
  style={{width: 300, height: 40}}
  minimumValue={0}
  maximumValue={duration}
  thumbTintColor="white"
  minimumTrackTintColor="white"
  maximumTrackTintColor="white"
/>
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    <Text>{new Date(position*1000).toISOString().substring(15,19)}</Text>
    <Text>{new Date((duration-position)*1000).toISOString().substring(15,19)}</Text>
</View>
    </View>
  )
}

export default SongSlider

const styles = StyleSheet.create({})