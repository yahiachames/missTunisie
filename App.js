import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Yellowtail_400Regular } from '@expo-google-fonts/yellowtail';
import AppLoading from 'expo-app-loading';


import Auth from './Auth'
import Main from './Main'
import Challenge from './screens/Challenge';
import Question from './components/Qestion';
import ChallengeResult from './screens/ChallengeResult';
import MissList from './screens/MissList';
import MissListItem from './components/MissListItem';


export default function App() {



  let [fontsLoaded] = useFonts({
    Yellowtail_400Regular,
  });
  if (!fontsLoaded) return <AppLoading />
  else return (

    <Auth />


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
