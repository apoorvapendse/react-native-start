/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import { playBackService } from './musicService.js';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => playBackService);