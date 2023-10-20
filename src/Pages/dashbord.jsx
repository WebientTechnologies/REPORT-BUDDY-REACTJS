import { Flex, Heading, Grid, Button, useColorModeValue, Box, Stat, StatLabel, StatNumber, StatHelpText, GridItem, VStack, } from '@chakra-ui/react';
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

  useEffect(() => {
    dispatch(getAllProjectsFunc(navigate));
  }, [dispatch]);

  return (
    <Flex flexDirection="column" pb={[8, 16]}>
      <Heading color={'white'} textAlign={'center'} fontWeight={500}>Welcome to Prema Consultancy</Heading>
      <Box w='full' bg={'white'} mt={5} borderTopRadius='10px'>
        <Link to={'/live-projects'}>
          <Flex justifyContent={'center'} fontSize={'2xl'} alignItems={'center'} w="200px" fontWeight={500} h="200px" bg="blue.800" color={'white'} m="8" rounded={'lg'}>
            Live Projects
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
};

export default DashBoard;
