import { combineReducers } from 'redux';

import auth from './auth';
import userState from "./autherrors";


export const reducers = combineReducers({ auth,userState });