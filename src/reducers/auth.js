import * as actionType from "../constants/actionTypes";

const authReducer = (state = { authData:" ", isLogin:false }, action) => {
  switch (action.type) {

    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, isLogin : true };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData:null };
    default:
      return state;
  }
};

export default authReducer;