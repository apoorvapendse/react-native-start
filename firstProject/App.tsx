import React from 'react';
import {
  View,Text,SafeAreaView
} from 'react-native';

import AppPro from './AppPro';
function App(){
return(
  <SafeAreaView>
<View>
  <Text style={{color:'green',fontFamily:'system-ui'}}>
    Hello World!
   </Text>
   <AppPro/>
  
</View>
</SafeAreaView>
)

}

export default App;