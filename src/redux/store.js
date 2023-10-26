import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducer';
import { dashboardReducer } from './reducers/dashboardReducer';

export const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1`;

const store = configureStore({
    reducer: {
        user: userReducer,
        dashboardReducer,
    },
})
export default store;