import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";




import {Login} from './screens/Login'
import Main from './Main'
import{ Register} from './screens/Register'
import colors from './config/colors';
import {login } from "./controllers/authApi"
import AuthContext from './reactContext/authContext';


export default function Auth() {
const [user,setUser] = useState()
    const Stack = createStackNavigator();
    return (
      <AuthContext.Provider value={{user , setUser}} >
        <NavigationContainer><Stack.Navigator initialRouteName='Login'  headerMode='none'>
      
      <Stack.Screen
          name='Login'
          
        >
          {(props) => <Login {...props} data={props} isFirst={true}/>}
        </Stack.Screen>
       <Stack.Screen
          name='Main'
        >
          {(props) => <Main {...props} data={props} />}
        </Stack.Screen>
        <Stack.Screen
          name='Register'
        >
          {(props) => <Register {...props} data={props} />}
        </Stack.Screen>
      
     
      </Stack.Navigator></NavigationContainer>
      </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({})
