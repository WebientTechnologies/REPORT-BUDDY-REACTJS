import { Flex, Heading, Grid, Button, useColorModeValue, Box, Stat, StatLabel, StatNumber, StatHelpText, GridItem, VStack, Tabs, TabList, Tab, TabPanels, TabPanel, TabIndicator, Text, } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAllProjectsFunc } from '../redux/actions/dashBoardAction';
import { safeStringify } from '../StringifyAndParsedObj/StringifyAndParsedObj';


const FE_Dashboard = () => {

     const { dashboardProjects, dashboardProjectsLoading, dashboardProjectsError } = useSelector(state => state.dashboardReducer);
     const dispatch = useDispatch();
     const navigate = useNavigate();

     console.log({ dashboardProjects });
     const user = JSON.parse(localStorage.getItem('premaUser'));
     console.log({ user });

     const objectParam = {
          name: 'Project_Assigned_Form.FE',
          email: `PS_1.FE_Email`,
     }

     const string = encodeURIComponent(safeStringify(objectParam));
     console.log({ string });

     const myProjects = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.FE`] === user?.name || el[`PS_1.FE_Email`] === user?.email);
     const mypendingSiteVisit = dashboardProjects?.filter((el) =>
          (
               el[`Project_Assigned_Form.FE`] === user?.name || el[`PS_1.FE_Email`] === user?.email
          )
          && el['PS_2.Inspection_Completion_Date'].length < 5 &&
          (
               el['PS_2.Site_Visit_1_Scheduled_Date'].length > 5 ||
               el['PS_2.Site_Visit_2_Scheduled_Date'].length > 5 ||
               el['PS_2.Site_Visit_3_Scheduled_Date'].length > 5
          )
     );

     const mypendingFB = dashboardProjects?.filter((el) =>
          (
               el[`Project_Assigned_Form.FE`] === user?.name || el[`PS_1.FE_Email`] === user?.email
          ) && el['PS_2.Inspection_Completion_Date'].length < 5 &&
          el['PS_2.IDP_Completed_by_FE'].length < 5
     );

     const myreportsToBeReviewed = dashboardProjects?.filter((el) =>
          (
               el[`Project_Assigned_Form.FE`] === user?.name || el[`PS_1.FE_Email`] === user?.email
          ) &&
          el['PS_2.PS_4.Stage_1'].toLowerCase() == "approved" &&
          el['PS_4.FE_Review_Completed'].length < 5
     );


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
               <Link to={`/pending-site-visit-FE`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>Pending Site Visit</Text>
                         <Text>{mypendingSiteVisit?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`/pending-site-fb`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Pending FB</Text>
                         <Text>{mypendingFB?.length || 0}</Text>
                    </Flex>
               </Link>
               <Link to={`/reports-to-be-reviewed`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Reports To Be Reviewed</Text>
                         <Text>{myreportsToBeReviewed?.length || 0}</Text>
                    </Flex>
               </Link>
          </Box>
     );
};

export { FE_Dashboard };
