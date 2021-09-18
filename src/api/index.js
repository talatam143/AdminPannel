import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000/user"});

export const signIn = (formData) => API.post("/signin", formData);

export const signUp = (formData) => API.post("/signup", formData);

export const mobilesignUp = (numberData) => API.post("/mobileusersignup", numberData);

export const mobilesignIn = (numberData) => API.post("/mobileusersignin", numberData);

export const mobilesignUpdate = (numberData) => API.post("/updatemobileuser", numberData);

export const Activate = (token) => API.post(`/accountVerification/${token}`);

