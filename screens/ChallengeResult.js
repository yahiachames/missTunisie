import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView, RefreshControl } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from '@expo/vector-icons'


import ChallengeListItem from '../components/ChallengeListItem';
import colors from '../config/colors'
import Screen from './../components/screen';
import ListItemSeparator from './../components/ListItemSeparator';
import AppText from './../components/AppText';
import Loading from './../components/Loading';
import { getMisses } from '../controllers/authApi';




function ChallengeResult() {
    const [isLoading, setIsLoading] = useState(true)
    const [misses, setMisses] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        getMissesResult().then(() => setRefreshing(false))
    })

    const getMissesResult = async () => {
        const notSortedMisses = await getMisses()
        const sortedMisses = notSortedMisses.sort((a, b) => b.challengeResult - a.challengeResult)
        setMisses(sortedMisses)
        setIsLoading(false)
    }

    useEffect(() => {
        getMissesResult()
    }, [JSON.stringify(misses)])

    if (isLoading) return <Loading />
    else {
        return (
            <Screen style={styles.container}>


                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    ListHeaderComponent={() => {
                        return (
                            <View style={styles.header}>
                                <AppText style={styles.classement}  >Classement</AppText>
                                <AppText style={styles.nom}  >Nom et Prenom</AppText>
                                <AppText style={styles.points}   >Points</AppText>
                            </View>
                        )
                    }}
                    data={misses}
                    keyExtractor={(el, i) => {

                        return el.id
                    }}
                    renderItem={({ item, index }) => <ChallengeListItem item={item} num={index + 1} />}
                    ItemSeparatorComponent={ListItemSeparator}
                    contentContainerStyle={[{ justifyContent: "space-evenly", backgroundColor: colors.dark }]
                    }
                />


            </Screen>

        )
    }


}



export default function StackRegister(props) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.black }, headerTintColor: "white" }}>
            <Stack.Screen
                name='Resultat Challenge'
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
                {(props) => <ChallengeResult {...props} />}
            </Stack.Screen>

        </Stack.Navigator>
    );
}



const styles = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: "100%",
        backgroundColor: colors.dark

    },
    text: {
        color: colors.white
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        justifyContent: "space-evenly",
    },
    classement: {
        textAlign: "center",
        flex: 1,
        paddingTop: 3,
        fontWeight: "bold",
        color: colors.primary
    },
    nom: {
        textAlign: "center",
        flex: 1,
        paddingTop: 3,
        fontWeight: "bold",
        color: colors.primary
    },
    points: {
        textAlign: "center",
        flex: 1,
        paddingTop: 3,
        fontWeight: "bold",
        color: colors.primary
    }

})
