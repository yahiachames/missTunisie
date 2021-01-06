import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Modal, Button, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import ListItemSeparator from './ListItemSeparator';
import CategoryItem from '../components/CategoryItem'
import AppButton from './AppButton';

const etats = ["all", 'tunis', 'sfax', 'sousse', 'bizerte', 'beja', "gafsa", "jandouba", "mednin"]

export default function CategoryPicker({ getSelectedItem }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedItem, setSelectedItem] = useState("All")



    return (<>
        <TouchableHighlight onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                <Text style={styles.category} >{selectedItem}</Text>
                <MaterialCommunityIcons name="chevron-down" size={25} color={colors.white} style={styles.icon} />
            </View>
        </TouchableHighlight>
        <Modal visible={modalVisible} animationType="slide" style={styles.model}  >
            <View style={styles.model}>
                <AppButton title="close" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={etats}
                    keyExtractor={(el, index) => index.toString()}
                    ItemSeparatorComponent={({ item }) => <ListItemSeparator />}
                    renderItem={({ item }) => <CategoryItem label={item} onPress={() => {
                        setModalVisible(false)
                        setSelectedItem(item)
                        getSelectedItem(item)
                    }} />}
                />
            </View>
        </Modal>

    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.dark,
        borderColor: colors.white,
        borderWidth: 1,
        width: 150,
        height: 50,
        marginBottom: 10
    },
    category: {
        flex: 1,
        color: colors.white,
        fontSize: 18,
        textAlign: "center"
    },
    icon: {
        paddingRight: 5
    },
    model: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.dark,
        flex: 1,
        width: "100%"
    },
    modelText: {
        color: colors.white
    }

})
