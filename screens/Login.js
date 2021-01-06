import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, View, TouchableHighlight } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Screen from '../components/screen';
import * as Yup from 'yup'
import { MaterialCommunityIcons } from '@expo/vector-icons'



import { AppForm, AppFormField, SubmitButton, ErrorMessage } from '../components/form'
import colors from '../config/colors'
import AppText from '../components/AppText';

import { login } from './../controllers/authApi';
import AuthContext from '../reactContext/authContext';




const validationSchema = Yup.object({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

export function Login(props) {

  const [errMess, setErrMsg] = useState({ errMsg: "", visibble: false })
  const authContext = useContext(AuthContext)


  const checkLogin = async (values) => {

    try {

      const result = await login(values)

      if (result.success) {
        setErrMsg({ errMsg: "", visible: true })
        authContext.setUser(result.user)

        props.navigation.navigate("Main", { role: result.user.role })


      }
      else if (!result.success) {

        setErrMsg({ errMsg: result.msg, visible: true })
        console.log(result.msg)
      }
    }
    catch (e) {
      // setErrMsg({ errMsg: e, visible: true })
      console.log(e)
    }
  }


  return (
    <Screen style={styles.container}  >
      <Image style={styles.logo} source={require('../assets/logo.jpg')} />
      <View style={styles.formContainer} >
        <AppForm initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {

            checkLogin(values)

          }}
          validationSchema={validationSchema}
        >

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"

          />
          {/* {errMess.errMsg && errMess.visibble && <ErrorMessage error={errMess.errMsg} visible={errMess.visibble} />} */}
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"

          />


          <SubmitButton title="Login" />
        </AppForm>
      </View>


      { props.isFirst && (<View style={styles.packNav} >
        <TouchableHighlight onPress={() => props.navigation.navigate("Register")} ><AppText style={styles.registerNav} >Register</AppText></TouchableHighlight>

        <AppText style={styles.orNav} >or</AppText>
        <TouchableHighlight onPress={() => props.navigation.navigate("Main", { role: "" })} ><AppText style={styles.visitorNav} >continuer en tant que visiteur</AppText></TouchableHighlight>

      </View>)}

    </Screen>
  );
}

function StackLogin(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.black }, headerTintColor: "white" }}>
      <Stack.Screen
        name='Login'
        options={({ navigation }) => ({
          headerLeft: (props) => (
            <MaterialCommunityIcons
              name="menu"
              size={35}
              color={colors.primary}
              onPress={() => navigation.toggleDrawer()}
            />

          ),

        })}
      >
        {(props) => <Login {...props} isFirst={false} />}
      </Stack.Screen>

    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.dark
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 30,
    alignSelf: "center",
    margin: 5

  },
  packNav: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 10
  }
  ,
  registerNav: {
    color: colors.white,
    padding: 10

  },
  orNav: {
    color: colors.primary,
    fontWeight: "bold"

  },
  visitorNav: {
    color: colors.white,
    padding: 10

  }
})

export default (StackLogin);



