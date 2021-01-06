import { baseURL } from './baseURL';
import axios from 'axios'

export const getQuestionsTech = async () => {

    try {
        const result = await axios.get(baseURL + 'questions/getquestions')

        return result.data
    } catch (e) {
        console.log(e)
    }

}


export const checkQuestions = async (candidatAnswers) => {
    try {
        const result = await axios.post(baseURL + 'questions//checkquestions', { ...candidatAnswers })
        return result.data
    } catch (e) {
        console.log(e)
    }
}