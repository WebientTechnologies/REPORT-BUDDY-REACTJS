import axios from 'axios';
import { API_BASE_URL } from '../store.js';
import { params } from '../store.js';


export const getAllProjectsFunc = (navigate) => (dispatch) => {

     const token = localStorage.getItem("token") || '';
     dispatch({ type: 'getDashBoardProjectsDataRequest' });
     axios.get(`${API_BASE_URL}/get-project`, {
          headers: {
               Authorization: `${token}`,
          }
     })
          .then((response) => {
               console.log({ response });
               dispatch({ type: 'getDashBoardProjectsDataSuccess', payload: response?.data?.projects });
          })
          .catch((e) => {
               console.log({ 'error in getAllProjectsFunc': e });
               dispatch({ type: 'getDashBoardProjectsDataFail', payload: e?.response?.data });
               if (e?.response?.status === 401 || e?.response?.status === 500) {
                    console.log({ e });
               }
          });
};

export const postFormData = (data, navigate) => (dispatch) => {
     const token = localStorage.getItem("token") || '';
     axios.post(`${API_BASE_URL}/project-details`, data,{
          headers: {
               Authorization: `Bearer ${JSON.parse(token)}`,
               // "Content-Type": 'multipart/form-data'
          }
     })
          .then((response) => {
               console.log({ response });
               return response;
          })
          .catch((e) => {
               if (e?.response?.status === 401 || e?.response?.status === 500) {
                    console.log({ e });
               }
               return e;
          });
};