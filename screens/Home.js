import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

import colors from '../config/colors';
import Screen from './../components/screen';
import TextTitle from '../components/TextTitle';
import Card from '../components/Card';
import AppText from '../components/AppText';
import { baseURL } from '../controllers/baseURL';



function Home(props) {
    return (
        <ScrollView>
            <Screen style={styles.container}>
                <Animatable.View animation="fadeIn" duration={1500} style={styles.container}>
                    <Image source={require("../assets/logo.jpg")} style={styles.logoImg} />
                    <TextTitle>Become a Modal</TextTitle>
                </Animatable.View>
                <Animatable.View animation="fadeIn" duration={2000} style={styles.container}>
                    <AppText style={styles.description}>Miss Tunisie est le seul concours national et officiel pour élire Miss Tunisie de chaque année.
                    Miss Tunisie est le symbole de la femme tunisienne moderne,
                    engagée, mûre, épanouie et consciente de ses devoirs envers
sa famille, sa région et son pays</AppText>
                </Animatable.View>
                <View style={styles.content}>
                    <Animatable.View animation="fadeIn" duration={2500} style={styles.container}>
                        <Card image={{ uri: baseURL + "1608134236752-Miss2020.jpg" }} title='Meriem Darragi' subTitle='Miss Tunisie 2020' />
                    </Animatable.View>
                    <Animatable.View animation="fadeIn" duration={3000} style={styles.container}>
                        <Card image={require('../assets/Miss2019.jpg')} title='Sabrine Khalifa' subTitle='Miss Tunisie 2019' />
                    </Animatable.View>
                    <Animatable.View animation="fadeIn" duration={3500} style={styles.container}>
                        <Card image={require('../assets/Miss2017.jpg')} title='hayfa ghedira' subTitle='Miss Tunisie 2017' />
                    </Animatable.View>
                </View>

            </Screen>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: "center",
        width: "100%"
    },
    logoTitle: {
        marginTop: 8,
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: "flex-start",
        width: "100%"
    },
    content: {
        marginTop: 45,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },

    logoImg: {
        width: 90,
        height: 90,
        borderRadius: 30
    },
    description: {
        padding: 20,
        textAlign: "center",
        color: colors.white
    }
})


function StackHome(props) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Menu' screenOptions={{ headerStyle: { backgroundColor: colors.black }, headerTintColor: "white" }}>
            <Stack.Screen
                name='Accueil'
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
                {(props) => <Home {...props} />}
            </Stack.Screen>

        </Stack.Navigator>
    );
}



export default StackHome;