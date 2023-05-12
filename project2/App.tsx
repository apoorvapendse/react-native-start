import { View, Text, SafeAreaView, ScrollView, StyleSheet,FlatList} from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollAbleCards from './components/ScrollAbleCards'

const App = () => {
  return (
    <SafeAreaView>
      {/* vertical scroll view for the entire app */}
      <ScrollView >

{/* non scrollable cards */}
<Text style={styles.headingFont}>Cards Without Horizontal Scroll</Text>
<View style={styles.CardView}>
<FlatCards cardName={'red'}/>
<FlatCards cardName={'green'}/>
<FlatCards cardName={'blue'}/>
<FlatCards cardName={'blue'}/>
<FlatCards cardName={'blue'}/>
</View>
        

  {/* scrollable cards */}
<Text style={styles.headingFont}>ScrollAble Cards</Text>
<View style={styles.CardView}>
<ScrollAbleCards/>
</View>



 </ScrollView>

    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingFont:{
    fontSize:25,
    fontFamily:"Times New Roman",
    fontWeight:'bold',
    padding:8,
    color:'white'
  },
  CardView:{flex:1,flexDirection:'row',padding:12,}
})

export default App