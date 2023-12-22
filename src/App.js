import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMyProfile } from './redux/actions/userAction'
import Login from './Pages/auth/auth'
import AdminLayout from './Layout/components'
import DashBoard from './Pages/dashbord'
import FieldForm from './component/feildForm/FeildForm'
import LiveProjects from './Pages/LiveProjects'
import ProjectDetails from './Pages/ProjectDetails'
import { TakePhotosWithAccordions } from './component/feildForm/TakePhotosWithAccordions'
import ApprovedProjectsOM from './Pages/ApprovedProjectsOM'
import ApprovedProjectsPC from './Pages/ApprovedProjectsPC';
import PendingSiteVisit from './Pages/FE/PendingSiteVisit';
import MyPendingFb from './Pages/FE/MyPendingFb';
import MyReportsToBeReviewed from './Pages/FE/MyReportsToBeReviewed';
import PendingReports from './Pages/QR/PendingReports';
import ApprovedProjectsQR from './Pages/QR/ApprovedProjectsQR';
import PendingReportsEM from './Pages/EM/PendingReportsEM';
import MyRejectedFbProjects from './Pages/EM/MyRejectedFbProjects';
import MyReportsToReviewEM from './Pages/EM/MyReportsToReviewEM';
import MyRejectedDraftReportsByQrTW from './Pages/TW/MyRejectedDraftReportsByQrTW';
import MyRejectedDraftReportsByFeTW from './Pages/TW/MyRejectedDraftReportsByFeTW.';
import MyRejectedDraftReportsByEmTW from './Pages/TW/MyRejectedDraftReportsByEmTW';
import PendingReportsTW from './Pages/TW/PendingReportsTW';
import ApprovedFbTW from './Pages/TW/ApprovedFbTW';
import PrivateRoute from './PriveteRoute';
import FormValue from './component/SeeForm/FeildForm';

export const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1`;
export const homeRoute = '/pemo';

function App() {

  const { user, message, error, loading } = useSelector(state => state?.user | {});
  const dispatch = useDispatch();
  // var isAuthenticated = localStorage.getItem('token');
  // useEffect(() => {
  //   isAuthenticated = localStorage.getItem('token');
  // }, [user]);

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: 'clearError' });
    }
    else if (message) {
      toast.success(message)
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);


  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);


  return (
    <Router>
      <Routes>
        <Route path={`${homeRoute}/login`} element={<Login />} />
        <Route path={`${homeRoute}`} element={<PrivateRoute ><AdminLayout><DashBoard /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/fill-form/:projectId`} element={<FieldForm />} />
        <Route path={`${homeRoute}/see-form/:projectId`} element={<FormValue />} />
        <Route path={`${homeRoute}/live-projects/:string`} element={<PrivateRoute ><AdminLayout><LiveProjects /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/approved-projects/OM`} element={<PrivateRoute ><AdminLayout><ApprovedProjectsOM /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/approved-projects/PC`} element={<PrivateRoute ><AdminLayout><ApprovedProjectsPC /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/pending-site-visit-FE`} element={<PrivateRoute ><AdminLayout><PendingSiteVisit /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/pending-site-fb`} element={<PrivateRoute ><AdminLayout><MyPendingFb /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/reports-to-be-reviewed`} element={<PrivateRoute ><AdminLayout><MyReportsToBeReviewed /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/pending-reports-qr`} element={<PrivateRoute ><AdminLayout><PendingReports /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/approved-projects/QR`} element={<PrivateRoute ><AdminLayout><ApprovedProjectsQR /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/pending-reports-em`} element={<PrivateRoute ><AdminLayout><PendingReportsEM /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/my-rejected-fb-projects-em`} element={<PrivateRoute ><AdminLayout><MyRejectedFbProjects /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/my-reports-to-review-em`} element={<PrivateRoute ><AdminLayout><MyReportsToReviewEM /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/my-rejected-draft-reports-by-qr-tw`} element={<PrivateRoute ><AdminLayout><MyRejectedDraftReportsByQrTW /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/my-rejected-draft-reports-by-fe-tw`} element={<PrivateRoute ><AdminLayout><MyRejectedDraftReportsByFeTW /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/my-rejected-draft-reports-by-em-tw`} element={<PrivateRoute ><AdminLayout><MyRejectedDraftReportsByEmTW /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/pending-reports-TW`} element={<PrivateRoute ><AdminLayout><PendingReportsTW /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/approved-Fb-TW`} element={<PrivateRoute ><AdminLayout><ApprovedFbTW /></AdminLayout></PrivateRoute>} />

        <Route path={`${homeRoute}/project/:objectParam`} element={<PrivateRoute ><AdminLayout><ProjectDetails /></AdminLayout></PrivateRoute>} />
        <Route path={`${homeRoute}/take-photographs`} element={<PrivateRoute ><AdminLayout><TakePhotosWithAccordions /></AdminLayout></PrivateRoute>} />
      </Routes>
      <Toaster />
    </Router>
  )
}
export default App
