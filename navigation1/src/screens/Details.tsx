import * as React from 'react';
import { Button, View, Text ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App'


// type HomeProps = NativeStackScreenProps<
//     RootStackParamList,'Home','About'
// >


function Details({ navigation}) {

    // setTimeout(() => {
    //     navigation.navigate('Home')
    // }, 3000);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details',{productID:'1234'})}

      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}

      />
    
   
    </View>
  );
}

export default Details

const styles = StyleSheet.create({})