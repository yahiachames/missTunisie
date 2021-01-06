import * as ActionTypes from './actionTypes'
import { login } from './../../controllers/authApi';


export const set_user = () => {
    console.log("i am working")
    return ({
    type:ActionTypes.SET_USER 
})}

export const try_login = userData => dispatch => {
    console.log("data" , userData)
    return login(userData).then(res => dispatch(success_login(res)) )
    .catch(err => dispatch(failed_login(err)))
}
export const failed_login = (err) => ({
    type:ActionTypes.FAILED_LOGIN  , payload : err
    })

export const success_login = (userData) => {  
    
    return ({

type:ActionTypes.SUCCESS_LOGIN , payload : userData
})
}
export const try_register = (userData) => ({
    type:ActionTypes.TRY_REGISTER , payload : userData
    })

export const failed_register = () => ({
        type:ActionTypes.TRY_LOGIN
        })
export const success_register = (userData) => ({
    type:ActionTypes.SUCCESS_REGISTER, payload : userData
 })     