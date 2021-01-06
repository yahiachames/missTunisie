import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'


import AppText from './AppText'
import { baseURL } from './../controllers/baseURL';
import colors from '../config/colors';


export default function MissListItem({ item, index, onPress }) {

    return (
        <TouchableOpacity onPress={onPress}  >
            <ImageBackground source={{ uri: baseURL + item.img }} style={styles.container} resizeMode="stretch" imageStyle={styles.imageStyle} >
                <View style={styles.dataContainer}  >
                    <View style={styles.numContainer} >
                        <AppText style={[styles.num]}  > {index + 1}</AppText>
                    </View >
                    <View style={styles.textContainer} >
                        <AppText style={styles.name} >{item.username}</AppText>
                        <AppText style={styles.etat}  > {item.etat} </AppText>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        width: "100%",
        height: 600,
        overflow: "hidden"

    },

    dataContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",

        backgroundColor: "rgba(0,0,0,0.5)",
        width: "100%",
        height: "15%"
    },
    numContainer: {
        width: 60,
        height: 60,
        backgroundColor: "rgba(255,172,65,0.5)",
        borderRadius: 30,
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderColor: colors.white,
        borderWidth: 1
    },
    textContainer: {
        marginRight: 100
    },
    name: {
        color: colors.primary,
        fontSize: 30,

    },
    etat: {
        color: colors.white,
        fontSize: 20,

    },
    num: {
        color: colors.white,
        fontSize: 30,
        textAlign: "center",
        paddingRight: 4
    }

})
