import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducer';
import { dashboardReducer } from './reducers/dashboardReducer';

export const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1`;
export const params = {
    'refresh_token': process.env.REACT_APP_REFRESH_TOKEN,
    'client_id': process.env.REACT_APP_CLIENT_ID,
    'client_secret': process.env.REACT_APP_CLIENT_SECRET,
    'grant_type': process.env.REACT_APP_API_GRANT_TYPE,
};



const store = configureStore({
    reducer: {
        user: userReducer,
        dashboardReducer,
    },
})
export default store;