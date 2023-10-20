import axios from 'axios';
import { API_BASE_URL } from '../store.js';
import { params } from '../store.js';


export const getAllProjectsFunc = (navigate) => (dispatch) => {

     const zohoToken = localStorage.getItem("event_token") || '';
     console.log({ params, zohoToken });

     dispatch({ type: 'getDashBoardProjectsDataRequest' });
     axios.get(`https://creator.zoho.com/api/v2/premaconsultinggroupllc/pemo/report/Flutter_Live_Projects`, {
          headers: {
               'Access-Control-Allow-Origin': true,
               Authorization: `${zohoToken}`,
               "Cache-Control": "no-cache",
               "Content-Type": "application/x-www-form-urlencoded",
          }
     })
          .then((response) => {
               console.log({ response });
               dispatch({ type: 'getDashBoardProjectsDataSuccess', payload: response.data });
          })
          .catch((e) => {
               console.log({ 'error in getAllProjectsFunc': e });
               dispatch(refreshZohoTokenFunc());
               dispatch({ type: 'getDashBoardProjectsDataFail', payload: e?.response?.data });
               if (e?.response?.status === 401 || e?.response?.status === 500) {
                    console.log({ e });
               }
          });
};


export const refreshZohoTokenFunc = () => async (dispatch) => {
     const token = localStorage.getItem('token');
     console.log('yes1', token);
     axios.post(`https://accounts.zoho.com/oauth/v2/token`, null, {
          params: params,
          headers: {
               'Access-Control-Allow-Origin': true,
               'Authorization': `Bearer ${token}`,
          }
     })
          .then((response) => {
               console.log('yes2');
               console.log({ response });
          })
          .catch((e) => {
               console.log('yes3');
               console.log({ 'error in refreshZohoTokenFunc': e });
               if (e?.response?.status === 401 || e?.response?.data?.message === 'User does not exist') {
               }
          });
};