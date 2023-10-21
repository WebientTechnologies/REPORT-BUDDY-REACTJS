import { Flex, Heading, Grid, Button, useColorModeValue, Box, Stat, StatLabel, StatNumber, StatHelpText, GridItem, VStack, Tabs, TabList, Tab, TabPanels, TabPanel, TabIndicator, Text, } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProjectsFunc } from '../redux/actions/dashBoardAction';
// import DashboardCard from './DashboardCard'; // Import the reusable card component
// import ReactApexChart from 'react-apexcharts'; // Import the React ApexCharts library
// import { Carousel } from 'react-responsive-carousel';
// import { CustomersReview } from './CostumerReviewes';


function DashBoard() {

  const { dashboardProjects, dashboardProjectsLoading, dashboardProjectsError } = useSelector(state => state.dashboardReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log({ dashboardProjects });
  const user = JSON.parse(localStorage.getItem('premaUser'));
  console.log({ user });

  // if (projects.pS1PCEmail == email) {
  //   myprojectCount.value += 1;
  // }
  // if (projects.pS1PCEmail == email &&
  //     projects.pS2IDPApprovedByEM!.length > 5) {
  //   //print(projects.pS2IDPCompletedByFE);
  //   myapprovedfbCount.value += 1;
  // }


  const myProjects = dashboardProjects?.filter((el) => el[`PS_1.PC_Email`] === user?.email);
  const approvedProjects = dashboardProjects?.filter((el) => el[`PS_1.PC_Email`] === user?.email && el['PS_2.IDP_Approved_by_EM'].length > 5);
  console.log({ myProjects, approvedProjects });


  useEffect(() => {
    dispatch(getAllProjectsFunc(navigate));
  }, [dispatch]);


  return (
    <Flex flexDirection="column" pb={[8, 16]}>
      <Heading color={'white'} textAlign={'center'} fontWeight={500}>Welcome to Prema Consultancy</Heading>
      <Tabs variant="unstyled" color={'white'}>
        <TabList>
          <Tab fontWeight={500}>My Projects</Tab>
          <Tab fontWeight={500}>Approved Projects</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="5px"
          bg="red.500"
          borderRadius="1px"
        />
        <TabPanels mt={5}>
          <TabPanel bg={'white'} borderRadius={'10px'}>
            <Box w='full' display='grid' gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)', xl: 'repeat(5,1fr)' }}>
              {
                myProjects?.length > 0 ? (
                  myProjects?.map((el) => {
                    return <Link to={'/live-projects'} key={el.Claim_Number}>
                      <MyProjectCard {...el} />
                    </Link>
                  })
                ) : (
                  <Link to={'/live-projects'}>
                    <Flex justifyContent={'center'} fontSize={'2xl'} alignItems={'center'} w="200px" fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                      Live Projects
                    </Flex>
                  </Link>
                )
              }
            </Box>
          </TabPanel>
          <TabPanel bg={'white'} borderRadius={'10px'}>
            <Box w='full' display='grid' gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)', xl: 'repeat(5,1fr)' }}>
              {
                approvedProjects?.length > 0 ? (
                  approvedProjects?.map((el) => {
                    return <Link to={'/live-projects'} key={el.Claim_Number}>
                      <MyProjectCard {...el} />
                    </Link>
                  })
                ) : (
                  <Link to={'/live-projects'}>
                    <Flex justifyContent={'center'} fontSize={'2xl'} alignItems={'center'} w="200px" fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
                      Live Projects
                    </Flex>
                  </Link>
                )
              }
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </Flex>
  );
};

export default DashBoard;


const MyProjectCard = ({ Project_Name, Project_Number }) => {
  return (
    <Box display={'flex'} height={{ base: '100px', md: '150px', lg: '200px' }} borderRadius={'10px'} flexDir='column' m={2} justifyContent='center' bg='blue.700' alignItems={'center'} textAlign='center'>
      <Text fontWeight={500} fontSize={{ base: '100%' }} color={'white'}>{Project_Name || '---'}</Text>
      <Text fontWeight={500} fontSize={{ base: '90%' }} color={'white'}>{Project_Number || '---'}</Text>
    </Box>
  );
};

