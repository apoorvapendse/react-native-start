import { StyleSheet, Text, View ,SafeAreaView,ScrollView,FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import {setUpPlayer,loadTracks,playBackService} from './../musicService'

const App = () => {
  const [isPlayerReady,setIsPlayerReady] = useState(false);

  async function setup(){
    let isSetup = false;
    if(isSetup){
      await loadTracks();
    }
    setIsPlayerReady(isSetup)
  }




  useEffect(() => {
    //this setup function will run once the components are loaded
    setup();

  
    
  }, [])
  
  if(!isPlayerReady){
    return(
      <SafeAreaView style={{display:'flex',flex:1, justifyContent:'center' ,alignItems:'center',backgroundColor:"black"}}>
        <ActivityIndicator size={200} color={'greenyellow'} />
      </SafeAreaView>
    )
  }



  return (
    <SafeAreaView>

    <View>
      <Text>App</Text>
    </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
container:{
  display:'flex',
  backgroundColor:'black'
  
}

})