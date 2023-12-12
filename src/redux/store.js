import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducer';
import { dashboardReducer } from './reducers/dashboardReducer';
import formSlice from './reducers/formData';

export const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1`;

const store = configureStore({
    reducer: {
        user: userReducer,
        dashboardReducer,
        formReducer:formSlice,
    },
})
export default store;