import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>

      <Text>Apoorva App</Text>
      <View style={{flex:1,flexDirection:'row',overflow:'scroll',width:5000,}}>

<FlatCards cardName={'red'}/>
<FlatCards cardName={'red'}/>
<FlatCards cardName={'red'}/>
<FlatCards cardName={'red'}/>
<FlatCards cardName={'red'}/>
    </View>




      </ScrollView>

    
    </SafeAreaView>
  )
}

export default App