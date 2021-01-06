import * as ActionTypes from "../actions/actionTypes";

export const user = (
  state = {
    isLoggedIn : false , 
    isLoading: false,
    errMess: null,
    name: "",
    email: "",
    role :"",
    id:""
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        isLoggedIn : true
      }
    case ActionTypes.USER_LOGOUT : 
    return {
      ...state,
      isLoggedIn : false 
    } 
    case ActionTypes.SET_USER :
    return {
      ...state,
      name:"",
      id:"",
      role:"",
      email:"",
      isLoggedIn: false
    };
    case ActionTypes.TRY_LOGIN:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        
      };

    case ActionTypes.FAILED_LOGIN:
      console.log("failed login" , action.payload)

      return { ...state, isLoading: false, errMess: action.payload };

    case ActionTypes.SUCCESS_LOGIN:
      console.log("success_Login" , action.payload)
      return {
        ...state,
        isLoggedIn : true ,
        isLoading: false,
        errMess: null,
        id: action.payload._id,
        
      role: action.payload.role
      };
      case ActionTypes.TRY_REGISTER:
        return {
          ...state,
          isLoading: true,
          errMess: null,
         
        };
        case ActionTypes.FAILED_REGISTER:
            return {
              ...state,
              isLoading: false,
              errMess: action.payload,
              
            };
            case ActionTypes.SUCCESS_REGISTER:
                return {
                  ...state,
                  isLoading: false,
                  errMess: null,
                  name: action.payload.name,
                  email:action.payload.email,
                  
                };

    default:
      return state;
  }
};
