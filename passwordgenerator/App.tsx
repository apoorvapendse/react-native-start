import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {Formik} from 'formik'

//form validation
import * as Yup from 'yup'
const passwdSchema = Yup.object().shape({
  passwordLength:Yup.number().min(4,'Password length should atleast be 4 chars')
  .max(16,'password length cannot exceed 16 chars')
  .required('length is required')
})

const App = () => {

  const[password,setPassword] = useState('');
  const[isPasswordGenerated,setIsPasswordGenerated] = useState(false);
  const[lowercase,setLowercase] = useState(true);
  const[uppercase,setUpperCase] = useState(false);
  const[useNumbers,setUseNumbers] = useState(false);
  const[useSymbols,setUseSymbols] = useState(false);
  

  const generateCharacterString=(passwordLength:number)=>{

    let characters ='';
    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseCharacters = 'abcdefghikjlmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '~!@#$%^&*()_+?/<>{}[]'

    if(uppercase){
      characters += uppercaseCharacters;
    }
    if(lowercase){characters.concat(lowercaseCharacters)};
    if(useNumbers){characters.concat(numbers)};
    if(useSymbols){characters.concat(specialChars)}

    const password = createPassword(characters,passwordLength)
    setPassword(password);
    setIsPasswordGenerated(true);
  }

  const createPassword=(characters:string,passwordLength:number)=>{
    let result='';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round( Math.random()*characters.length);
      result.concat(characters.charAt(characterIndex));
}
  return result;
  }

  const resetPassword=()=>{
    setPassword('');
    setIsPasswordGenerated(false);
    setUpperCase(false);
    setUseNumbers(false);
    setUseSymbols(false);
    setLowercase(true);

  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
        <SafeAreaView style={{backgroundColor:'greenyellow'}}>

    <View style={{display:'flex' ,alignItems:'center'}}>
      <Text style={styles.appHeadingText}>Password Generator</Text>
      <View style={styles.formContainer}>

      <Formik
       initialValues={{ passwordLength:'' }}
       validationSchema={passwdSchema}
       onSubmit={values=>{
        console.log(values);

        generateCharacterString(Number(values.passwordLength))
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
        handleReset,
         isSubmitting,
         /* and other goodies */
       }) => (
         <>
         {/* for password length */}
          <View style={styles.inputWrapper}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <Text>Password Length:</Text>
            {touched.passwordLength&&errors.passwordLength&&(<Text style={{color:'red'}}>{errors.passwordLength}</Text>)}
            <TextInput style={styles.inputStyle} 
            value={values.passwordLength}
             onChangeText={handleChange('passwordLength')}
            placeholder='enter length'
            keyboardType='numeric'
            />
          </View>

          </View>


          <View style={styles.inputWrapper}>
            <Text style={styles.optionText}>Include Lowercase</Text>
            <BouncyCheckbox
             size={40}
            style={styles.checkbox}
            disableBuiltInState
            isChecked={lowercase}
            onPress={()=>setLowercase(!lowercase)}
            fillColor='blue'
            ></BouncyCheckbox>
          </View>


          <View style={styles.inputWrapper}>
            <Text style={styles.optionText}>Include UpperCase</Text>
            <BouncyCheckbox
            style={styles.checkbox}
            size={40}
            disableBuiltInState
            isChecked={uppercase}
            onPress={()=>setUpperCase(!uppercase)}
            fillColor='blue'
            ></BouncyCheckbox>
          </View>


          <View style={styles.inputWrapper}>
            <Text style={styles.optionText}>Include Numbers</Text>
            <BouncyCheckbox
            style={styles.checkbox}
            size={40}
            disableBuiltInState
            isChecked={useNumbers}
            onPress={()=>setUseNumbers(!useNumbers)}
            fillColor='blue'
            ></BouncyCheckbox>
          </View>


          <View style={styles.inputWrapper}>
            <Text style={styles.optionText}>Include Symbols</Text>
            <BouncyCheckbox
            style={styles.checkbox}
            size={40}
            disableBuiltInState
            isChecked={useSymbols}
            onPress={()=>setUseSymbols(!useSymbols)}
            fillColor='blue'
            ></BouncyCheckbox>
            
          </View>
        
         

        <View style={styles.formButtons}>
        <TouchableOpacity><Text>Submit</Text></TouchableOpacity>
        <TouchableOpacity><Text>Reset</Text></TouchableOpacity>

        </View>
         </>
       )}
     </Formik>



      </View>

    </View>
        </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  appHeadingText:{
    color:'black',
    fontSize:20
  },
  formContainer:{
    flex:1,
    padding:20,
    backgroundColor:'black',
    width:'100%'
  },
  inputWrapper:{
    margin:20,
    flex:1,
    flexDirection:'row',
    alignItems:'center'
    ,justifyContent:'space-between'
  },
  
  formButtons:{

  },
  inputStyle:{
    backgroundColor:'black',
    borderWidth:1,
    borderColor:'turquoise',
    paddingHorizontal:20
  },
  optionText:{
    color:'yellow'
  },
  checkbox:{
    height:50
  }
})