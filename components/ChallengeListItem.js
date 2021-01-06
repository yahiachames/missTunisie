import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from './AppText';



export default function ChallengeListItem({ item, num }) {

    return (
        <View style={styles.container} >
            <AppText style={[styles.num, { color: num == 1 ? colors.yellowFlash : colors.white }]} >{num == 1 ? <FontAwesome
                name="trophy"
                size={30}
                color={colors.yellowFlash}
            /> : num}</AppText>
            <AppText style={[styles.name, { color: num == 1 ? colors.yellowFlash : colors.white }]} >{item.username}</AppText>
            <AppText style={[styles.points, { color: num == 1 ? colors.yellowFlash : colors.white }]}  >{item.challengeResult}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: "20%",
        // width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // flex: 1,

        // alignSelf: "center"
        paddingVertical: 15

    },
    paddingEL: {
        paddingHorizontal: 10
    },
    num: {
        textAlign: "center",
        color: colors.white,
        flex: 1,

    },
    name: {
        textAlign: "center",
        color: colors.white,

        flex: 1,

    },
    points: {
        textAlign: "center",
        color: colors.white,

        flex: 1,

    },


})
