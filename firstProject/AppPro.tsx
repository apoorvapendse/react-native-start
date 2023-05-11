import React from 'react';
import {
    SafeAreaView,View,Text,Button,StyleSheet,useColorScheme
} from 'react-native';

function AppPro():JSX.Element{
    
    const isDarkMode = useColorScheme()==='dark';


    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Hello from appPro</Text>

            </View>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})

export default AppPro;