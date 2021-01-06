import axios from 'axios'
import { baseURL } from './baseURL';


export const login = async (data) => {

  try {
    const result = await axios.post(baseURL + 'auth/login', { email: data.email, password: data.password })

    return result.data
  } catch (e) {
    console.log(e)
  }

}

export const getMisses = async () => {
  try {
    const result = await axios.get(baseURL + 'auth/getmisses')
    return result.data.misses
  } catch (e) {
    console.log("error from get misses ", e)
  }
}

export const vote = async (missID, clientID) => {
  console.log(missID, clientID)
  try {
    const result = await axios.post(baseURL + 'auth/vote', { miss: missID, client: clientID })
    return result.data
  } catch (e) {
    console.log("did not vote ", e)
  }
}

export const checkvote = async (clientID) => {

  try {
    const result = await axios.post(baseURL + 'auth/checkvote', { id: clientID })
    console.log("check", result.data)
    return result.data
  } catch (e) {
    console.log("did not check ", e)
  }
}