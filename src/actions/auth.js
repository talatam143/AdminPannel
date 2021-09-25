import {AUTH,SIGNUPMESSAGE,ACTIVATEMESSAGE,ERRORMESSAGE,MOBILEMESSAGE, START_LOADING,END_LOADING} from "../constants/actionTypes";
import * as api from "../api/index";


export const signin = (formData,history) => async(dispatch) =>{
    try{
        dispatch({type : START_LOADING});
        const {data} = await api.signIn(formData);
        dispatch({type: AUTH, data});
        dispatch({type: END_LOADING});
        history.push("/");
    }
    catch(error){
        dispatch({type : START_LOADING});
        console.log(error);
        dispatch({type: ERRORMESSAGE, payload : error.response.data.error});
        dispatch({type: END_LOADING});
    }
}

export const signup = (formData,history) => async(dispatch) =>{
    try{
        dispatch({type : START_LOADING});
        const {data} = await api.signUp(formData);
        dispatch({type:SIGNUPMESSAGE, payload: data.message});
        dispatch({type: END_LOADING});
    }
    catch(error){
        dispatch({type : START_LOADING});
        console.log(error);
        dispatch({type: ERRORMESSAGE, payload : error.response.data.error});
        dispatch({type: END_LOADING});
    }
}

export const activate = (token) => async(dispatch) => {
    try{
        dispatch({type : START_LOADING});
        const {data} = await api.Activate(token);
        dispatch({type:ACTIVATEMESSAGE, payload: data.message});
        dispatch({type: END_LOADING});
    } catch(error){
        dispatch({type : START_LOADING});
        console.log(error);
        dispatch({type: ERRORMESSAGE, payload : error.response.data.error});
        dispatch({type: END_LOADING});
    }
}

export const mobilesignup = (numberData) =>  async(dispatch) => {
    try{
        dispatch({type : START_LOADING});
        const {data} = await api.mobilesignUp(numberData);
        dispatch({type:MOBILEMESSAGE, payload: data.message});
        dispatch({type: END_LOADING});

    } catch(error){
        dispatch({type : START_LOADING});
        console.log(error);
        dispatch({type: ERRORMESSAGE, payload : error.response.data.error});
        dispatch({type: END_LOADING});
    }
}

export const mobilesignin = (numberData,history) =>  async(dispatch) => {
    try{
        dispatch({type : START_LOADING});
        const {data} = await api.mobilesignIn(numberData);
        dispatch ({type: AUTH, data});
        dispatch({type: END_LOADING});
        history.push("/");
    } catch(error){
        dispatch({type : START_LOADING});
        console.log(error);
        dispatch({type: ERRORMESSAGE, payload : error.response.data.error});
        dispatch({type: END_LOADING});
    }
}