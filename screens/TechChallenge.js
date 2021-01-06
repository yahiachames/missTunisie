import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'

import AppText from './../components/AppText';
import colors from '../config/colors';
import Qestion from './../components/Qestion';
import AppButton from './../components/AppButton';
import Loading from './../components/Loading';
import { checkQuestions } from '../controllers/challengeApi';
import AuthContext from '../reactContext/authContext';





export default function TechChallenge(props) {
    const [questionsResult, setQuestionsResult] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [questions, setQuestions] = useState([])
    const [disabled, setDisabled] = useState(false)
    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.user.isTechValid ? setDisabled(true) : setDisabled(false)
    }, [authContext.user.isTechValid])


    useEffect(() => {
        setQuestions(props.data)
        setIsLoading(false)
    }, [JSON.stringify(questions)])

    const handleSubmit = async (responses) => {
        const result = await checkQuestions({ candidatAnswers: responses, candidatID: authContext.user._id, challengeType: "tech" })

    }


    const getQuestionAnswer = (questionAnswer) => {
        if (questionsResult.some(el => el.item._id == questionAnswer.item._id)) {
            let newArray = []
            newArray = questionsResult.map(el => el.item._id == questionAnswer.item._id ? el = questionAnswer : el)
            setQuestionsResult(newArray)
        } else setQuestionsResult([...questionsResult, questionAnswer])

    }

    if (isLoading) return <Loading />
    else {
        return (
            <SafeAreaView style={styles.container} >
                <AppText style={styles.title}>Technique Test</AppText>
                <FlatList
                    data={questions}
                    keyExtractor={(question) => question._id.toString()}
                    renderItem={({ item, index }) => <Qestion item={item} questionNumber={index + 1} getQuestionAnswer={getQuestionAnswer} />}
                />
                <AppButton title="Submit" color={colors.dark} style={{ borderWidth: 2, borderColor: colors.white }}
                    textColor={colors.primary} onPress={() => {
                        handleSubmit(questionsResult)
                        setDisabled(true)
                    }} disabled={disabled} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",

        justifyContent: "center",
        flex: 1,
        backgroundColor: colors.dark,
        color: colors.dark,
    },
    title: {
        color: colors.primary
    }

})
