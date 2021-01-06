import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons'


import Tech from './TechChallenge'
import Frensh from './FrenshChallenge';
import English from './EnglishChallenge'
import colors from '../config/colors';
import Screen from './../components/screen';
import { getQuestionsTech } from './../controllers/challengeApi';
import Loading from './../components/Loading';


function Challenge(props) {
  const [questions, setQuestions] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getQues = async () => {
    const result = await getQuestionsTech()
    setQuestions(result)
    setIsLoading(false)
  }

  useEffect(() => {
    getQues()
  }, [JSON.stringify(questions)])

  const Tab = createBottomTabNavigator();
  if (isLoading) return <Loading />
  else {
    return (

      <Screen style={styles.container}>



        <Tab.Navigator


          tabBarOptions={{
            activeBackgroundColor: colors.dark, activeTintColor: colors.primary,
            inactiveTintColor: 'white', inactiveBackgroundColor: colors.dark,
            tabStyle: { borderRadius: 20, alignItems: 'center', justifyContent: 'center', borderColor: "white", width: 10, height: 40, margin: 5, borderWidth: 3 },
            labelStyle: { fontSize: 15 },
            activeTintColor: colors.primary,
            inactiveTintColor: 'white',
            style: { backgroundColor: colors.dark, borderWidth: 0 }
          }}
        >
          <Tab.Screen name="Techniques"  >
            {(props) => <Tech {...props} data={questions.techQuestions} />}
          </Tab.Screen>
          <Tab.Screen name="Francais"  >
            {(props) => <Frensh {...props} data={questions.FrQuestions} />}
          </Tab.Screen>
          <Tab.Screen name="Anglais"  >
            {(props) => <English {...props} data={questions.EngQuestions} />}
          </Tab.Screen>
        </Tab.Navigator>


      </Screen>

    )
  }
}


export default function StackChallengeResult(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Challenge' screenOptions={{ headerStyle: { backgroundColor: colors.black }, headerTintColor: "white" }}>
      <Stack.Screen
        name='Challenge'
        options={({ navigation }) => ({
          headerLeft: (props) => (
            <MaterialCommunityIcons
              name="menu"
              size={35}
              style={styles.icon}
              color={colors.primary}
              onPress={() => navigation.toggleDrawer()}
            />

          ),

        })}
      >
        {(props) => <Challenge {...props} />}
      </Stack.Screen>

    </Stack.Navigator>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    justifyContent: "center",
    flex: 1
  },
  tab: {
    backgroundColor: colors.dark
  }
})
