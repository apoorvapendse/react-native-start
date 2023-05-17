import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, } from '@react-navigation/native-stack'

//screens
import Home from './src/screens/Home'
import Details from './src/screens/Details'
import About from './src/screens/About'
 

// export type RootStackParamList={
//   Home:undefined;
//   Details:{productID:string}
//  }

 const Stack = createNativeStackNavigator();

const App = () => {


  return (
  <NavigationContainer >
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name='Home' component={Home} options={{
      title:'HomeScreen',
      headerTitleAlign:'center',
      animation:'slide_from_bottom'}}/>
     
      <Stack.Screen name='Details' component={Details} options={{title:'Details',animation:'fade'}}/>
      <Stack.Screen name='About' component={About} options={{title:'About'}}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})