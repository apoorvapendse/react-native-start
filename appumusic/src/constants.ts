import { Track } from "react-native-track-player";

export const playListData :Track[]=[
    {
        id:1,
        url:require('./musicAssets/Payphone.mp3'),
        artwork:'https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ,artist:'Sungha Jung',
        album:'Unknown'
    },
    {
        id:2,
        url:require('./musicAssets/River-Flows_In_You.mp3'),
        artwork:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRquejErk1aLbWHFCzcSdmC5rmwGIVZVXAqyX_HyCMq4Q&s'
        ,artist:'Sungha Jung',
        album:'Unknown'
    },
]