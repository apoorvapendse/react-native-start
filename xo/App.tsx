import { Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {trigger} from 'react-native-haptic-feedback'
const App = () => {

  const [gameArray, setGameArray] = useState([['', '', ''], ['', '', ''], ['', '', '']])
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [winner,setWinner]=useState('')
  // false means O's turn and true means X's turn 

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };
  




  const changeBox=(x:number,y:number)=>{
    trigger('soft',options); 
    if(gameArray[x][y]!=''){
      return;
    }
    checkWin();
    if(winner!='')//winner already exists, dont let the game play further
    {
      return;
    }
    currentPlayer==true?gameArray[x][y]='😺':gameArray[x][y]='🐶'
    checkWin();
    setCurrentPlayer(!currentPlayer);
  }

  const resetBoard =()=>{
    setGameArray([['', '', ''], ['', '', ''], ['', '', '']])
    setWinner('');

  }

  const checkWin=()=>{
    //first row
    if(gameArray[0][0]!='' && gameArray[0][0]==gameArray[0][1] && gameArray[0][1]==gameArray[0][2]){
      setWinner(gameArray[0][0])
    }
    //second row
   else if(gameArray[1][0]!='' && gameArray[1][0]==gameArray[1][1] && gameArray[1][1]==gameArray[1][2]){
      setWinner(gameArray[1][0])
    }
    //third row
   else if(gameArray[2][0]!='' && gameArray[2][0]==gameArray[2][1] && gameArray[2][1]==gameArray[2][2]){
      setWinner(gameArray[2][0])
    }
    //first col
   else if(gameArray[0][0]!='' && gameArray[0][0]==gameArray[1][0] && gameArray[1][0]==gameArray[2][0]){
      setWinner(gameArray[0][0])
    }
    //second col
   else if(gameArray[0][1]!='' && gameArray[0][1]==gameArray[1][1] && gameArray[1][1]==gameArray[2][1]){
      setWinner(gameArray[0][1])
    }
   
    //third col
   else if(gameArray[0][2]!='' && gameArray[0][2]==gameArray[1][2] && gameArray[1][2]==gameArray[2][2]){
      setWinner(gameArray[0][2])
    }
    //left to right diag
    else if(gameArray[0][0]!='' && gameArray[0][0]==gameArray[1][1] && gameArray[1][1]==gameArray[2][2]){
      setWinner(gameArray[0][0])
    }
    //right to left diag
    else if(gameArray[2][0]!='' && gameArray[2][0]==gameArray[1][1] && gameArray[1][1]==gameArray[0][2]){
      setWinner(gameArray[2][0])
    }
   

  }

  const checkOver =()=>{
    if(gameArray[0].includes('')||gameArray[1].includes('')||gameArray[2].includes('')){
      return false;
    }
    return true;
  }



  return (
    <SafeAreaView>

      <View style={styles.mainContainer}>
        <Text style={styles.headingText}>🐶 VS 😺</Text>
       { winner!=''?<Text style={{fontSize:40,color:'white'}}>{winner} Won!!!</Text>:checkOver()?<Text style={{fontSize:40,color:'white'}}>Its a tie!</Text>:<Text style={{fontSize:20}}>{currentPlayer == true ? '😺' : '🐶'}</Text>}
        <View style={styles.box}>

          <TouchableOpacity onPress={() => {
            changeBox(0, 0);
          }}>
            <View style={styles.gameTile}>
              <Text style={styles.gameTileValue} > {gameArray[0][0]}</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => {
           changeBox(0, 1);

          }}>
            <View style={styles.gameTile}>
              <Text style={styles.gameTileValue}>{gameArray[0][1]}</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => {
           changeBox(0, 2);

          }}><View style={styles.gameTile}>
              <Text style={styles.gameTileValue}>{gameArray[0][2]}</Text>
            </View >
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { changeBox(1, 0); }}>
            <View style={styles.gameTile}>
              <Text style={styles.gameTileValue}>{gameArray[1][0]}
              </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => { changeBox(1, 1); }}><View style={styles.gameTile}><Text style={styles.gameTileValue}>{gameArray[1][1]}</Text></View></TouchableOpacity>


          <TouchableOpacity onPress={() => { changeBox(1, 2); }}><View style={styles.gameTile}><Text style={styles.gameTileValue}>{gameArray[1][2]}</Text></View></TouchableOpacity>


          <TouchableOpacity onPress={() => { changeBox(2, 0); }}><View style={styles.gameTile}><Text style={styles.gameTileValue}>{gameArray[2][0]}</Text></View></TouchableOpacity>


          <TouchableOpacity onPress={() => { changeBox(2, 1) }}><View style={styles.gameTile}><Text style={styles.gameTileValue}>{gameArray[2][1]}</Text></View></TouchableOpacity>


          <TouchableOpacity onPress={() => {  changeBox(2, 2)}}><View style={styles.gameTile}><Text style={styles.gameTileValue}>{gameArray[2][2]}</Text></View></TouchableOpacity>

        </View>



        <TouchableOpacity onPress={()=>{resetBoard()}}>
          {winner!=''||checkOver() ?<Text style={{fontSize:20,color:'white'}}>Start New Game</Text>:<Text style={{fontSize:20,color:'white'}}>Reset</Text>}
        </TouchableOpacity>

<TouchableOpacity style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Text style={{color:'blue',fontSize:11}}>Made by Apoorva and Vivek Pendse
 </Text>
 <View></View>
 </TouchableOpacity>
      </View>

          
    </SafeAreaView>



  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'black', height: '100%'
  },
  headingText: {
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 12,
    margin: 2,
    borderRadius: 12,
    fontSize: 20,

    width: '70%',
    color: '#1FAA59'

  },
  box: {
    width: 370,
    height: 370,
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  gameTile: {
    borderColor: 'greenyellow',
    width: 120,
    height: 120,
    borderWidth: 0.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222'
  },
  gameTileValue: {
    fontSize: 50,
    color: 'greenyellow',
  }


})