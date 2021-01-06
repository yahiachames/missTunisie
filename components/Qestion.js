
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CheckBox } from 'react-native-elements'

import colors from '../config/colors';
import AppText from './AppText';
import Screen from './screen';








export default function Qestion({ item, questionNumber, getQuestionAnswer }) {
    const [yesChecked, setYesChecked] = useState(false)
    const [noChecked, setNoChecked] = useState(false)

    return (

        <View style={styles.container}>
            <View style={styles.questionText}>
                <AppText style={styles.questionNum}> {questionNumber})</AppText><AppText style={styles.text}>{item.question}</AppText></View>
            <View style={styles.checkBoxView}>
                <CheckBox
                    center
                    title='Yes'
                    checked={yesChecked}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor={colors.primary}
                    containerStyle={styles.checkBox}
                    textStyle={styles.checkBoxText}
                    onPress={() => {
                        setYesChecked(true)
                        setNoChecked(false)
                        getQuestionAnswer({ item, response: "yes" })
                    }}
                />
                <CheckBox
                    center
                    title='No'
                    checked={noChecked}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    containerStyle={styles.checkBox}
                    textStyle={styles.checkBoxText}
                    checkedColor={colors.primary}
                    onPress={() => {
                        setNoChecked(true)
                        setYesChecked(false)
                        getQuestionAnswer({ item, response: "no" })
                    }}
                />
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 10,

        width: "90%",
        height: "20%",
        backgroundColor: colors.dark,
        borderRadius: 20,
        borderColor: colors.white,
        borderWidth: 1,
        margin: 20,
        flex: 1
    },
    questionText: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    text: {
        color: colors.white,
        marginHorizontal: 4
    },
    questionNum: {
        color: colors.primary,
        marginHorizontal: 4
    },
    checkBoxView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        alignSelf: "center"
    },
    checkBox: {
        backgroundColor: colors.dark,
        borderWidth: 0
    }
    ,
    checkBoxText: {
        color: colors.white,


    }
})
