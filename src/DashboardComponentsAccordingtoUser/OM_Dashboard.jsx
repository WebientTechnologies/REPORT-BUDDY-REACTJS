
import { Flex, Heading, Grid, Button, useColorModeValue, Box, Stat, StatLabel, StatNumber, StatHelpText, GridItem, VStack, Tabs, TabList, Tab, TabPanels, TabPanel, TabIndicator, Text, } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getAllProjectsFunc } from '../redux/actions/dashBoardAction';
import { safeStringify } from '../StringifyAndParsedObj/StringifyAndParsedObj';
import { homeRoute } from '../App';


const OM_Dashboard = () => {

     const { dashboardProjects, dashboardProjectsLoading, dashboardProjectsError } = useSelector(state => state.dashboardReducer);
     const dispatch = useDispatch();
     const navigate = useNavigate();

     console.log({ dashboardProjects });
     const user = JSON.parse(localStorage.getItem('premaUser'));

     const objectParam = {
          name: null,
          email: 'Project_Assigned_Form.Operations_Manager_Email',
     };

     const string = encodeURIComponent(safeStringify(objectParam));

     const myProjects = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.Operations_Manager_Email`] === user?.email);
     const myapprovedfb = dashboardProjects?.filter((el) => el[`Project_Assigned_Form.Operations_Manager_Email`] === user?.email && el['PS_2.IDP_Approved_by_EM'].length > 5);

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
               <Link to={`${homeRoute}/approved-projects/OM`} m={2}>
                    <Flex justifyContent={'center'} flexDir={'column'} fontSize={'2xl'} alignItems={'center'} p={4} fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                         <Text textAlign='center'>My Approved FB</Text>
                         <Text>{myapprovedfb?.length || 0}</Text>
                    </Flex>
               </Link>
          </Box>
     );
};

export { OM_Dashboard };
