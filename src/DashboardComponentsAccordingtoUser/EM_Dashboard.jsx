// .jsx
import { Flex, Heading, Grid, Button, useColorModeValue, Box, Stat, StatLabel, StatNumber, StatHelpText, GridItem, VStack, Tabs, TabList, Tab, TabPanels, TabPanel, TabIndicator, Text, } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAllProjectsFunc } from '../redux/actions/dashBoardAction';
import { safeStringify } from '../StringifyAndParsedObj/StringifyAndParsedObj';


const EM_Dashboard = () => {

     const { dashboardProjects, dashboardProjectsLoading, dashboardProjectsError } = useSelector(state => state.dashboardReducer);
     const dispatch = useDispatch();
     const navigate = useNavigate();

     console.log({ dashboardProjects });
     const user = JSON.parse(localStorage.getItem('premaUser'));
     console.log({ user });

     const objectParam = {
          name: 'Project_Assigned_Form.EM',
          email: null,
     }
     const string = encodeURIComponent(safeStringify(objectParam));
     console.log({ string });


     const myProjects = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.EM`] === user?.name);
     const mypendingFB = dashboardProjects?.filter((el) =>
          el[`Project_Assigned_Form.EM`] === user?.name &&
          el['PS_3.Draft_Report_Completed'].length < 5 &&
          el['PS_2.IDP_Rejected_by_EM'].length < 5 &&
          el['PS_2.IDP_Completed_by_FE' > 5]
     );

     const myrejectedFBProjects = dashboardProjects?.filter((el) =>
          el[`Project_Assigned_Form.EM`] === user?.name &&
          el['PS_2.IDP_Completed_by_FE'].length > 5 &&
          el['PS_2.IDP_Rejected_by_EM'].length > 5
     );

     const myreportsToBeReviewed = dashboardProjects?.filter((el) =>
          el[`Project_Assigned_Form.EM`] === user?.name &&
          el['PS_4.Status_3'].toLowerCase() === 'approved' &&
          el['PS_4.Status_5'].length < 5
     );

     console.log({ myProjects, mypendingFB, myrejectedFBProjects, myreportsToBeReviewed });

     useEffect(() => {
          dispatch(getAllProjectsFunc(navigate));
     }, [dispatch]);


     return (
          <Box bg={'white'} p={3} mt={5} w='full' display='grid' gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', xl: 'repeat(4,1fr)' }}>
               <Link to={`/live-projects/${string}`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text>My Projects</Text>
                         <Text>{myProjects?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`/live-projects/${string}`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>Pending Reports</Text>
                         <Text>{mypendingFB?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`/live-projects/${string}`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Rejected FB Projects</Text>
                         <Text>{myrejectedFBProjects?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`/live-projects/${string}`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Reports To Review</Text>
                         <Text>{myreportsToBeReviewed?.length || 0}</Text>
                    </Flex>
               </Link>
          </Box>
     );
};

export { EM_Dashboard };
