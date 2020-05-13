import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import colors from '../constants/Colors';
import Input  from '../components/Input';
 import NumberContainer from "../components/NumberContainer";
import Colors from '../constants/Colors';

const StartGameScreen = (props) =>  {

    const[enteredValue, setEnteredValue] = useState('');
    const[confirmed , setConfirmed] = useState(false);
    const[selectedNumber, setSelectedNumber] = useState();
    
    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = ()=>{
        setEnteredValue('');
        setConfirmed(false);
    };

    const confimrInputHandler = ()=>{
         const chosenNumber = parseInt(enteredValue);
          if(isNaN(chosenNumber)  || chosenNumber < 0 || chosenNumber > 99){
              Alert.alert('Invalid Number!',
                            'Number has to be a number between 1 to 99 .' , 
                            [{text:'Okay' , style:'destructive', onPress: resetInputHandler}]);
              return;
          }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput ;
    
    if(confirmed){
    confirmedOutput = (
    <Card style={styles.summaryContainer}>
        <Text>Selected Number </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title='START A GAME' color={colors.purple} onPress={()=>props.onStartGame(selectedNumber)}/>
        </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
             <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputConatiner}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        keyboardType='number-pad' 
                        // maxLength={2} 
                        bulrOnsubmit 
                        autoCorrect={false} 
                        onChangeText={numberInputHandler} 
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={colors.accent}/></View>
                        <View style={styles.button}><Button title="Conform" onPress={confimrInputHandler} color={colors.primary}/></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>

     
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical: 10,
        fontWeight:'bold'
    },
    inputConatiner:{ 
        width:300,
        maxWidth:'80%',
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal: 15
    },
    button:{
        width:90
    },
    input:{
        width: 50,
        textAlign:'center'
    },
    summaryContainer:{
        width:'60%',
        marginTop:20,
        alignItems:'center'
    }
});

export default StartGameScreen ;