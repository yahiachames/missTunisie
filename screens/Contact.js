import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Linking } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

import colors from '../config/colors';
import AppText from '../components/AppText';
import { Image } from 'react-native';




function Contact() {
    return (
        <Animatable.View style={styles.container}>
            <View style={styles.container} source={require('../assets/missslogo.jpg')} resizeMode="stretch" >
                <Image source={require('../assets/missslogo.jpg')} style={styles.logo} />
                <View style={styles.contactContainer}>
                    <AppText style={styles.title}>Vous souhaitez nous contacter ?</AppText>

                    <View style={styles.cordContact} >
                        <View style={styles.textContainer}>
                            <AppText style={styles.label}>Email : </AppText>
                            <AppText style={styles.textContent} >meriem.darragi@edu.isetcom.tn</AppText>

                        </View>
                        <View style={styles.textContainer}>
                            <AppText style={styles.label}>phone : </AppText>
                            <AppText style={styles.textContent}>+2162099221</AppText>

                        </View>
                        <View style={styles.textContainer}>
                            <AppText style={styles.label}>Site :  </AppText>
                            <AppText style={styles.textContent}>www.exemple.tn</AppText>

                        </View>
                    </View>

                    <View style={styles.iconContainer} >
                        <MaterialCommunityIcons
                            name="facebook"
                            size={45}
                            color="#f2dbaf"
                            style={styles.icon}
                            onPress={() => Linking.openURL('https://www.facebook.com/Miss.Tunisia/photos/?ref=page_internal')}
                        />
                        <MaterialCommunityIcons
                            name="instagram"
                            size={45}
                            color="#f2dbaf"
                            style={styles.icon}
                            onPress={() => Linking.openURL('https://www.instagram.com/misstunisiaofficial/?hl=fr')}


                        />

                    </View>

                </View>
            </View>
        </Animatable.View>


    )
}

function StackContact(props) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Menu' screenOptions={{ headerStyle: { backgroundColor: colors.black }, headerTintColor: "white" }}>
            <Stack.Screen
                name='Contact'
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
                {(props) => <Contact {...props} />}
            </Stack.Screen>

        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212121",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",

    },
    cordContact: {

        padding: 10,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",


    },
    contactContainer: {
        height: 350,
        borderColor: "#f2dbaf",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 30,
        width: "90%",
        backgroundColor: "rgba(0,0,0,0.2)",
        marginBottom: 60

    },
    title: {

        color: colors.white,
        fontSize: 20,
        fontWeight: "bold",

    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        flexDirection: "row"

    },
    label: {
        color: colors.primary,
        fontWeight: "bold",

    },
    textContent: {
        color: colors.white,
        fontWeight: "bold",
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "space-around",
        width: "70%",


    },
    icon: {
        margin: 20,

    },
    logo: {
        width: 150,
        height: 150

    }

})

export default StackContact
