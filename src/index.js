import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const theme = extendTheme({
  colors: {
    black: {
      100: "#000",
      200: "#000",
      300: "#000",
      400: "#000",
      500: "#000",
      600: "#000",
      700: "#000",
      800: "#000",
      900: "#000",
    }
  },
});

export default theme;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
);

 {/* <Routes>
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
      </Routes> */}