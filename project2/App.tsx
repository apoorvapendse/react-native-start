import { View, Text, SafeAreaView, ScrollView, StyleSheet,FlatList} from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollAbleCards from './components/ScrollAbleCards'
import PlaceCards from './components/PlaceCards'
import ActionCard from './components/ActionCard'

const App = () => {
  return (
    <SafeAreaView style={{
      backgroundColor:'#222224'
    }}>
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


{/* place cards */}
<View>
<PlaceCards/>

</View>

{/* Action card making use of touchable opacity */}
<ActionCard/>



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