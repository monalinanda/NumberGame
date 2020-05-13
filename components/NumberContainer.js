import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer = props => {
    return(
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    numberContainer:{
        borderWidth: 2,
        borderColor: Colors.primary,
        padding:10,
        marginVertical:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color: Colors.accent,
        fontSize: 16,
        fontWeight: 'bold'
    }

});

export default NumberContainer;