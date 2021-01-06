import React from "react";
import { Text} from "react-native";
import defaultSyles from '../config/styles'
import { StyleSheet } from 'react-native'
import { useFonts, Yellowtail_400Regular } from '@expo-google-fonts/yellowtail';



function TextTitle({ children, style,...otherProps }) {
    let [fontsLoaded] = useFonts({
        Yellowtail_400Regular,
      });
  return <Text style={[  defaultSyles.text,style , styles.textTitle,, {fontFamily: 'Yellowtail_400Regular'  } ]} {...otherProps}  >{children}</Text>;
}

const styles = StyleSheet.create({
    textTitle:{
        color: defaultSyles.colors.white,
        fontSize: 28,
      
        margin:10,
       
    }
})

export default TextTitle;
