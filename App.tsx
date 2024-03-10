/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//uygfvyv

function App(): React.JSX.Element {
  const [bg,setBg]=useState('#ff006e')
   const colorHandle=()=>{
     const hexRange='0123456789ABCDEF'
     let temp='#'
     for (let i = 1; i < 7; i++) {
          temp+=hexRange[Math.floor(Math.random() *16)] 
     }
     setBg(temp)
  }
  return (
        <>
           {/* <StatusBar/>   */}
           <View style={[styles.container,{backgroundColor:bg}]}>
            <View>
             < TouchableOpacity onPress={colorHandle} style={styles.buttonsty}>
              
                <View style={styles.button}>
                <Text style={styles.textsty}>Press Me</Text>
                </View>
               
             
             </TouchableOpacity>
             </View>
           </View>
        </>
                
  );
}

const styles = StyleSheet.create({
    container:{
   // backgroundColor:'#ccd5ae',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    buttonsty:{
      height:75,
      width:200,
     // backgroundColor:'white',
      //color:'black'
      // backgroundColor:'green',
      borderRadius:10
      
      
    },
    textsty:{
      color:'white',
      fontSize:50
    },
    button:{
      backgroundColor:'while',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10
      
    }

});

export default App;
