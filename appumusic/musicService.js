import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player';
import { playListData } from './src/constants';
import { transformer } from './metro.config';


export async function setUpPlayer(){
    let isTrackPlayerSetUp = false;
    try {
        
        await TrackPlayer.getCurrentTrack();
        isTrackPlayerSetUp = true;
    } catch (error) {
        await TrackPlayer.setupPlayer();
        isTrackPlayerSetUp = true;
    }
    finally{
        return isTrackPlayerSetUp;
    }
}

export async function loadTracks(){
    await TrackPlayer.add(playListData)
    // RepeatMode.Queue makes the entire playlist to repeat
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}


export async function playBackService(){

    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
    TrackPlayer.addEventListener(Event.RemoteSkip,()=>TrackPlayer.skip())
    TrackPlayer.addEventListener(Event.RemoteNext,()=>TrackPlayer.skipToNext())
    TrackPlayer.addEventListener(Event.RemotePrevious,()=>TrackPlayer.skipToPrevious())
    TrackPlayer.addEventListener(Event.RemoteSeek,()=>TrackPlayer.seekTo())

}