import React, {useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';


const GameOverScreen = props =>{
    return(
        <View style={styles.screen}> 
            <Text>Game is Over</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart}></Button>
        </View>
    )

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default GameOverScreen;