const localhost = 'http://localhost:8000'

export const getUser = `${localhost}/api/v1/user/getUser`;

export const signupAPI= `${localhost}/api/v1/user/register`;

export const loginAPI = `${localhost}/api/v1/user/login`;

export const logoutAPI = `${localhost}/api/v1/user/logout`;

export const sendMessageAPI = `${localhost}/api/v1/user/sendMessage/:`;

export const getAllUserData = `${localhost}/api/v1/user/getAllUserData`;

export const getMessage = `${localhost}/api/v1/user/getMessage/:`;

export const getOneUserConversation = `${localhost}/api/v1/user/getOneUserConversation/`;

export const sendMessage = `${localhost}/api/v1/user/sendMessage/`;

export const connectSocket = `${localhost}/?userId=`;