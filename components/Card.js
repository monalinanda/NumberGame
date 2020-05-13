import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) =>{
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );

};

// shadow property is only work for ios and not for android so (elevation) use in android  for support shadow property

const styles = StyleSheet.create({
    card:{
        shadowColor:'#000',
        shadowOffset:{width:0 , height:2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation:5,
        backgroundColor:'#fff',
        padding:20,
        borderRadius: 8
    }
});

export default Card;