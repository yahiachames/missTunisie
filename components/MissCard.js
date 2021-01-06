import React from 'react';
import { Image, StyleSheet, View, ImageBackground } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';


function MissCard({ title, subTitle, image, description, ComponentLike }) {
    console.log(image)
    return (
        <View style={styles.card} >
            <ImageBackground style={[styles.image]} source={{ uri: image }} resizeMode="cover" resizeMethod="auto" >

            </ImageBackground>
            {/* <Image style={[styles.image]} source={{ uri: image }} resizeMode="cover" resizeMethod="auto" /> */}
            <View style={styles.detailsContainer}  >
                <View style={styles.header} >
                    <AppText style={styles.title} >{title}</AppText>
                    {<ComponentLike />}
                </View>

                <AppText style={styles.subTitle}  >{subTitle}</AppText>
                <AppText style={styles.description}  >{description}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.grey,

        overflow: "hidden",
        width: "96%",

    },
    detailsContainer: {
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "space-around"
    },
    image: {
        width: "100%",
        height: 400,
        alignItems: "center",
        justifyContent: "center"

    },
    subTitle: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 20,

    },
    title: {

        color: colors.primary,
        fontWeight: "bold",
        fontSize: 23,
        flex: 1

    },
    description: {
        paddingTop: 20,
        color: colors.white
    }
})

export default MissCard;