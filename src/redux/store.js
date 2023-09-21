import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducer';

export const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1`;
console.log({API_BASE_URL})

const store = configureStore({
    reducer :{
user : userReducer,

    },
})
export default store;