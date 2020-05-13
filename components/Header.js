import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/Colors';

const Header = (props) =>  {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    );
};
  
  
  const styles = StyleSheet.create({
    header: {
     width:'100%',
     height:90,
     paddingTop:30,
     backgroundColor: colors.primary,
     alignItems:'center',
     justifyContent:'center'
    },
    headerTitle:{
        color:'#000',
        fontSize:18
    }
  });

export default Header; 