import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Tile } from 'react-native-elements'
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'


import { getMisses } from '../controllers/authApi';
import colors from "../config/colors"
import Screen from './../components/screen';
import Loading from './../components/Loading';
import { baseURL } from './../controllers/baseURL';
import * as Animatable from 'react-native-animatable';
import CategoryPicker from '../components/CategoryPicker';
import MissDetails from './MissDetails';
import MissListItem from './../components/MissListItem';


function MissList(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [misses, setMisses] = useState([])
    const [selectedItem, setSelectedItem] = useState("all")
    const [filterMisses, setFilterMisses] = useState([])

    console.log("props", props)

    const { navigation } = props.navigation

    const getSelectedItem = (item) => {
        setSelectedItem(item)
        setFilterMisses(misses.filter(el => el.etat == item))

    }

    useEffect(() => {
        getMissesResult()
    }, [JSON.stringify(misses)])


    const getMissesResult = async () => {
        const notSortedMisses = await getMisses()

        setMisses(notSortedMisses)
        setIsLoading(false)
        console.log(misses)
    }

    const renderMenuItem = ({ item, index }) => {
        return (
            <Animatable.View animation="fadeIn" duration={2000}>
                <MissListItem
                    index={index}
                    item={item}
                    onPress={() => props.navigation.navigate("A Propos Miss", { details: item })}
                />
            </Animatable.View>
        );
    };

    if (isLoading) return <Loading />
    else {
        return (
            <Screen style={styles.container} >
                <CategoryPicker getSelectedItem={getSelectedItem} />
                <FlatList
                    data={selectedItem == "all" ? misses : filterMisses}
                    renderItem={renderMenuItem}
                    keyExtractor={(item) => item.id}
                />
            </Screen>



        )
    }

}

export default function StackMissList(props) {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Liste des Miss' screenOptions={{ headerStyle: { backgroundColor: colors.black }, headerTintColor: "white" }}>
            <Stack.Screen
                name='Liste des Miss'
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
                {(props) => <MissList {...props} />}
            </Stack.Screen>
            <Stack.Screen
                name='A Propos Miss'
                options={({ navigation }) => ({
                    headerLeft: (props) => (
                        <AntDesign
                            name="arrowleft"
                            size={35}
                            style={styles.icon}
                            color={colors.primary}
                            onPress={() => navigation.navigate("Liste des Miss")}
                        />

                    ),

                })}
            >
                {(props) => <MissDetails {...props} />}
            </Stack.Screen>

        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,

    }
})
