import React from "react";
import { StyleSheet ,Image } from "react-native";
import * as Yup from "yup";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { createStackNavigator } from "@react-navigation/stack";


import Screen from "../components/screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/form";
import colors from "../config/colors"


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export function Register() {
  return (
    <Screen style={styles.container}>
        <Image  style={styles.logo} source={require('../assets/logo.jpg')}  />
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

function StackRegister(props) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator   screenOptions={{ headerStyle: { backgroundColor: colors.black  } ,headerTintColor:"white" }}>
      <Stack.Screen
        name='Register'
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
        {(props) => <Register {...props} />}
      </Stack.Screen>
   
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:colors.dark
  },
  logo : {
    width:80,
    height: 80 , 
    alignSelf: 'center',
    marginBottom: 40
    
        }
});

export default StackRegister;
