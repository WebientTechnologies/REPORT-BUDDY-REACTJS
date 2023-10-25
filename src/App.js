// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header'
import './App.css'
// import LoadingOverlay from 'react-loading-overlay'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProtectedRoute } from 'protected-route-react'
import { getMyProfile } from './redux/actions/userAction'
import Login from './Pages/auth/auth'
import AdminLayout from './Layout/components'
import DashBoard from './Pages/dashbord'
import FieldForm from './component/FeildForm'
import LiveProjects from './Pages/LiveProjects'
import ProjectDetails from './Pages/ProjectDetails'
import { TakePhotosWithAccordions } from './component/TakePhotosWithAccordions'
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

export const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1`;

function App() {

  const { user, message, error, loading } = useSelector(state => state?.user | {});
  const dispatch = useDispatch();
  const isAuthenticated = localStorage.getItem('token');

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
        <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/' ><Login /></ProtectedRoute>} />
        <Route path='/' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><DashBoard /></AdminLayout></ProtectedRoute>} />
        <Route path='/fill-form' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><FieldForm /></ProtectedRoute>} />
        <Route path='/live-projects/:string' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><LiveProjects /></AdminLayout></ProtectedRoute>} />
        <Route path='/approved-projects/OM' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><ApprovedProjectsOM /></AdminLayout></ProtectedRoute>} />
        <Route path='/approved-projects/PC' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><ApprovedProjectsPC /></AdminLayout></ProtectedRoute>} />
        <Route path='/pending-site-visit-FE' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><PendingSiteVisit /></AdminLayout></ProtectedRoute>} />
        <Route path='/pending-site-fb' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><MyPendingFb /></AdminLayout></ProtectedRoute>} />
        <Route path='/reports-to-be-reviewed' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><MyReportsToBeReviewed /></AdminLayout></ProtectedRoute>} />
        <Route path='/pending-reports-qr' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><PendingReports /></AdminLayout></ProtectedRoute>} />
        <Route path='/approved-projects/QR' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><ApprovedProjectsQR /></AdminLayout></ProtectedRoute>} />
        <Route path='/pending-reports-em' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><PendingReportsEM /></AdminLayout></ProtectedRoute>} />
        <Route path='/my-rejected-fb-projects-em' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><MyRejectedFbProjects /></AdminLayout></ProtectedRoute>} />
        <Route path='/my-reports-to-review-em' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><MyReportsToReviewEM /></AdminLayout></ProtectedRoute>} />
        <Route path='/my-rejected-draft-reports-by-qr-tw' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><MyRejectedDraftReportsByQrTW /></AdminLayout></ProtectedRoute>} />
        <Route path='/my-rejected-draft-reports-by-fe-tw' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><MyRejectedDraftReportsByFeTW /></AdminLayout></ProtectedRoute>} />
        <Route path='/my-rejected-draft-reports-by-em-tw' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><MyRejectedDraftReportsByEmTW /></AdminLayout></ProtectedRoute>} />
        <Route path='/pending-reports-TW' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><PendingReportsTW /></AdminLayout></ProtectedRoute>} />
        <Route path='/approved-Fb-TW' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><ApprovedFbTW /></AdminLayout></ProtectedRoute>} />


        <Route path='/project/:objectParam' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><ProjectDetails /></AdminLayout></ProtectedRoute>} />
        <Route path='/take-photographs' element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminLayout><TakePhotosWithAccordions /></AdminLayout></ProtectedRoute>} />
      </Routes>
      <Toaster />
    </Router>
  )
}
export default App
