import axios from 'axios';
import { API_BASE_URL } from '../store.js';

export const login = (email, password, navigate) => async (dispatch) => {
    try {
        dispatch({ type: "loginRequest" });
        const res = await axios.post(`${API_BASE_URL}/login-user`, { email, password }, { withCredentials: true });
        console.log(res);
        navigate('/');
        dispatch({ type: 'loginSuccess', payload: res?.data || {} });
    }
    catch (error) {
        console.log(error.response.data);
        dispatch({ type: 'loginFail', payload: error.response.data });

    }
}


export const getMyProfile = () => async (dispatch) => {
    dispatch({ type: "loadUserRequest" });
    try {
        const auth = localStorage.getItem('isAuth');
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (auth && user && token) {
            dispatch({
                type: 'loadUserSuccess', payload: {
                    user: JSON.parse(localStorage.getItem('user'))
                    , token: token
                }
            });
        }
        else dispatch({ type: 'loadUserFail' });
    } catch (e) { dispatch({ type: 'loadUserFail' }); }
}


export const logout = (navigate) => async (dispatch) => {
    dispatch({ type: "logoutRequest" });
    try {
        console.log("logout");
        dispatch({ type: 'logoutSuccess' })
        navigate('/login');
    }
    catch (e) { dispatch({ type: 'logoutFail' }); }
}


export const register = (formData, email, password) => async (dispatch) => {
    dispatch({ type: "registerRequest" });
    try {
        const { data } = await axios({
            method: "post",
            url: `${API_BASE_URL}/register-user`,
            data: formData,


        });
        console.log(data);
        dispatch(login(email, password));
        dispatch({ type: 'registerSuccess' });


    }
    catch (e) {
        dispatch({ type: 'registerFail', payload: e.response.data.message });
        console.log(e.response);
    }
}