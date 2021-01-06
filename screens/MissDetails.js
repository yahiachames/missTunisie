import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, Platform, Linking } from 'react-native'

import { baseURL } from './../controllers/baseURL';
import MissCard from './../components/MissCard';
import colors from '../config/colors';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { vote, checkvote } from './../controllers/authApi';
import AuthContext from './../reactContext/authContext';

export default function MissDetails(props) {
    const authContext = useContext(AuthContext)
    const [heartClicked, setHeartClicked] = useState(false)
    const { details } = props.route.params
    console.log(details)
    return (
        <ScrollView contentContainerStyle={styles.container} >
            <MissCard title={details.username} subTitle={details.etat} image={baseURL + details.img}
                description="sdqsdqdqlfjklfjsklfjskljfslkdjfsdlkjflsdkjflksdjfklsdjfkljdsklfjsldkjfkldsjfldsjlfjsdljflskdjflsdjfkjsdkljfdskj"
                ComponentLike={() => (authContext.user && authContext.user.role == "client" ? <View style={{
                    flexDirection: "row", justifyContent: "center", alignItems: "center",
                    justifyContent: "space-around", width: 100
                }}>
                    <FontAwesome5

                        name="sms"
                        size={40}
                        onPress={() => {
                            const separator = Platform.OS === 'ios' ? '&' : '?'
                            const url = `sms:${50652481}${separator}body=${50}`
                            Linking.openURL(url)
                        }}
                        color={colors.secondary}

                    />
                    <FontAwesome

                        name={heartClicked ? "heart" : "heart-o"}
                        size={40}

                        color={colors.danger}
                        onPress={async () => {
                            const isValid = await checkvote(authContext.user._id)
                            if (isValid) {
                                setHeartClicked(true)
                                await vote(details.id, authContext.user._id)
                            }
                        }}
                    />
                </View> : <></>)

                }
            />


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",

        flex: 1,
        backgroundColor: colors.dark
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    icon: {
        backgroundColor: "rgba(0,0,0,0.7)",
        borderRadius: 35,
        padding: 10,


    }
})
