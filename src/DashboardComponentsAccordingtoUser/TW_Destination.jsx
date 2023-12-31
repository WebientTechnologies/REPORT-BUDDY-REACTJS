import { Flex, Box, Text, } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProjectsFunc } from '../redux/actions/dashBoardAction';
import { safeStringify } from '../StringifyAndParsedObj/StringifyAndParsedObj';
import { homeRoute } from '../App';


const TW_Dashboard = () => {

     const { dashboardProjects, dashboardProjectsLoading, dashboardProjectsError } = useSelector(state => state.dashboardReducer);
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const user = JSON.parse(localStorage.getItem('premaUser'));

     const objectParam = {
          name: 'Project_Assigned_Form.TW',
          email: null,
     };
     const string = encodeURIComponent(safeStringify(objectParam));

     const myProjects = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.TW`] === user?.name);
     const mypendingReport = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.TW`] === user?.name && el['PS_2.IDP_Approved_by_EM'].length > 5 && el[`PS_3.Draft_Report_Start_Date`].length >= 2);
     const myapprovedfb = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.TW`] === user?.name && el['PS_2.IDP_Approved_by_EM'].length > 5);
     const myrejectedDraftReportByQr = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.TW`] === user?.name && el['PS_4.Stage_1'] === 'Rejected');
     const myrejectedDraftReportByFe = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.TW`] === user?.name && el['PS_4.Stage_3'] === 'Rejected');
     const myrejectedDraftReportByEm = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.TW`] === user?.name && el['PS_4.Stage_5'] === 'Rejected');

     useEffect(() => {
          dispatch(getAllProjectsFunc(navigate));
     }, [dispatch]);


     return (
          <Box bg={'white'} p={3} mt={5} w='full' display='grid' gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(4,1fr)' }}>
               <Link to={`${homeRoute}/live-projects/${string}`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text>My Projects</Text>
                         <Text>{myProjects?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`${homeRoute}/my-rejected-draft-reports-by-qr-tw`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Rejected Draft Reports By QR</Text>
                         <Text>{myrejectedDraftReportByQr?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`${homeRoute}/my-rejected-draft-reports-by-fe-tw`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Rejected Draft Reports By FE</Text>
                         <Text>{myrejectedDraftReportByFe?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`${homeRoute}/my-rejected-draft-reports-by-em-tw`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Rejected Draft Reports By Em</Text>
                         <Text>{myrejectedDraftReportByEm?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`${homeRoute}/approved-Fb-TW`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Approved FB</Text>
                         <Text>{myapprovedfb?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`${homeRoute}/pending-reports-TW`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Pending Reports</Text>
                         <Text>{mypendingReport?.length || 0}</Text>
                    </Flex>
               </Link>
          </Box>
     );
};

export { TW_Dashboard };
