import React, { useContext } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'


import Screen from './components/screen'
import Home from './screens/Home'
import colors from './config/colors';
import TextTitle from './components/TextTitle';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Register from './screens/Register';
import Challenge from './screens/Challenge';
import StackChallengeResult from './screens/ChallengeResult'
import MissList from './screens/MissList'
import { set_user } from './redux/actions/userActionCreator';
import AuthContext from './reactContext/authContext';




const CustomDrawerContentComponent = (props) => {
  let authContext = useContext(AuthContext)
  return (
    <DrawerContentScrollView {...props}>

      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.drawerImage}
            source={require("./assets/logo.jpg")}
          />
        </View>
        <View style={{ flex: 2 }}>
          <TextTitle >Miss Tunisie</TextTitle>
        </View>
      </View>
      <DrawerItemList {...props} />
      { !authContext.user &&
        <DrawerItem activeTintColor='#e91e63' inactiveTintColor="#e91e63"
          icon={() => <MaterialCommunityIcons
            name="login"
            size={35}
            color={colors.primary}
          />}
          label="Login" onPress={() => {

            props.navigation.navigate('Login')
          }} />}
      { authContext.user && <DrawerItem activeTintColor='#e91e63' inactiveTintColor="#e91e63"
        icon={() => <MaterialCommunityIcons
          name="logout"
          size={35}
          color={colors.primary}
        />}
        label="Se Déconnecter" onPress={() => {
          authContext.setUser(null)
          props.navigation.navigate('Login')
        }} />}


    </DrawerContentScrollView>
  );
};



function Main(props) {

  let authContext = useContext(AuthContext)
  let user = authContext.user


  const Drawer = createDrawerNavigator();
  return (


    <Drawer.Navigator
      initialRouteName='Accueil'
      overlayColor='transparent'
      drawerStyle={{ backgroundColor: colors.black }}
      drawerContent={(props) => <CustomDrawerContentComponent {...props} authContext={authContext} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 10 },
        inactiveTintColor: '#e91e63'
      }}
    >
      <Drawer.Screen
        name='Accueil'
        component={Home}
        options={{

          drawerIcon: () => (
            <MaterialCommunityIcons
              name="home"
              size={35}
              color={colors.primary}
            />
          ),
        }}

      />



      { !user &&
        <Drawer.Screen
          name='Register'
          component={Register}
          options={{

            drawerIcon: () => (
              <MaterialCommunityIcons
                name="pen"
                size={35}
                color={colors.primary}
              />
            ),
          }}

        />}
      <Drawer.Screen
        name='Liste des Miss'
        component={MissList}
        options={{

          drawerIcon: () => (
            <MaterialCommunityIcons
              name="chess-queen"
              size={35}
              color={colors.primary}
            />
          ),
        }}

      />

      {user ? user.role == "miss" ? <Drawer.Screen
        name='Challenge'
        component={Challenge}
        options={{

          drawerIcon: () => (
            <MaterialCommunityIcons
              name="head-check"
              size={35}
              color={colors.primary}
            />
          ),
        }}

      /> : <></> : <></>}

      <Drawer.Screen
        name='Resultat Challenge'
        component={StackChallengeResult}
        options={{

          drawerIcon: () => (
            <FontAwesome
              name="trophy"
              size={35}
              color={colors.primary}
            />
          ),
        }}

      />
      <Drawer.Screen
        name='Contacts'
        component={Contact}
        options={{

          drawerIcon: () => (
            <MaterialCommunityIcons
              name="contacts"
              size={35}
              color={colors.primary}
            />
          ),
        }}

      />


    </Drawer.Navigator>



  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textFont: {
    fontFamily: "Yellowtail_400Regular"
  }
  ,
  drawerHeader: {
    backgroundColor: colors.primary,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },

  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
})

export default Main; 