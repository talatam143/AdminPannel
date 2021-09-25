import * as actionType from "../constants/actionTypes";

const userstateReducer = ( userState = 
                  {isLoading : false ,
                  signupsuccess: false,
                  failurestatus: false, 
                  signupmessage: " ", 
                  errormessage: " ",
                  activatemessage: " ",
                  activatestatus: false,
                  mobilestatus:false,
                  mobilemessage:" ",
                }, action) => {
  switch (action.type) {
    case actionType.DEFAULTMESSAGE:
      return{
        ...userState,
        mobilestatus:false,
        failurestatus:false,
        activatestatus:false,
        signupsuccess:false,
      };
    case actionType.START_LOADING:
      return {...userState, isLoading : true};
    case actionType.END_LOADING:
      return {...userState, isLoading : false};
    case actionType.SIGNUPMESSAGE:
      return {
        ...userState,
        activatestatus:false,
        failurestatus:false,
        errormessage:" ",
        activatemessage: " ",
        signupsuccess: true,
        signupmessage: action.payload,
      }
    case actionType.MOBILEMESSAGE:
      return{
        ...userState,
        mobilestatus:true,
        mobilemessage:action.payload,
        signupsuccess: false,
        failurestatus: false, 
        signupmessage: " ", 
        errormessage: " ",
        activatemessage: " ",
        activatestatus: false,
      }
    case actionType.ERRORMESSAGE:
      return{
        ...userState,
        activatestatus:false,
        successstatus:false,
        successmessage: " ",
        activatemessage: " ",
        failurestatus: true,
        errormessage: action.payload,
      }
    case actionType.ACTIVATEMESSAGE:
      return{
        ...userState,
        activatestatus:true,
        successstatus:false,
        failurestatus:false,
        successmessage: " ",
        errormessage:" ",
        activatemessage: action.payload,
      }
    default:
      return userState;
  }
};

export default userstateReducer;