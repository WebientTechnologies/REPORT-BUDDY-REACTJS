// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
import './App.css' 
// import LoadingOverlay from 'react-loading-overlay'
import {useSelector} from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import {useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { ProtectedRoute } from 'protected-route-react'
import { getMyProfile } from './redux/actions/userAction'
import Login from './Pages/auth/auth'
import AdminLayout from './Layout/components'
import DashBoard from './Pages/dashbord'
import FieldForm from './component/FeildForm'
import LiveProjects from './Pages/LiveProjects'
import ProjectDetails from './Pages/ProjectDetails'

export const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1`;

function App() {
  
  const { user, message , error, loading} = useSelector(state => state.user);
  const dispatch = useDispatch();
 

const isAuthenticated = localStorage.getItem('token')
  // const isAuthenticated = true;
console.log({API_BASE_URL})
  useEffect(() => {
    if(error)
    {
      toast.error(error)
      dispatch({type:'clearError'});
    }
    else if(message)
    {
      toast.success(message)
      dispatch({type:'clearMessage'});
    }
  }, [dispatch,error,message]);
  

  useEffect(()=>{
dispatch(getMyProfile())
  },[dispatch])

  return (
    <Router>
        <Routes>
          <Route path='/login' element={<ProtectedRoute isAuthenticated = {!isAuthenticated} redirect = '/' ><Login/></ProtectedRoute>} />
          <Route path='/' element={<ProtectedRoute isAuthenticated = {isAuthenticated} ><AdminLayout><DashBoard/></AdminLayout></ProtectedRoute>} />
          <Route path='/fill-form' element={<ProtectedRoute isAuthenticated = {isAuthenticated} ><FieldForm/></ProtectedRoute>} />
          <Route path='/live-projects' element={<ProtectedRoute isAuthenticated = {isAuthenticated} ><AdminLayout><LiveProjects/></AdminLayout></ProtectedRoute>} />
          <Route path='/project' element={<ProtectedRoute isAuthenticated = {isAuthenticated} ><AdminLayout><ProjectDetails/></AdminLayout></ProtectedRoute>} />
         </Routes>
         
        <Toaster/>
    </Router>
  )
}
export default App
