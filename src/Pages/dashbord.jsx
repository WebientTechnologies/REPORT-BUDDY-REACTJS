import { Flex, Heading, Grid, Button, useColorModeValue, Box, Stat, StatLabel, StatNumber, StatHelpText, GridItem, VStack, } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
// import DashboardCard from './DashboardCard'; // Import the reusable card component
// import ReactApexChart from 'react-apexcharts'; // Import the React ApexCharts library
// import { Carousel } from 'react-responsive-carousel';
// import { CustomersReview } from './CostumerReviewes';
function DashBoard() {
  const pinkishColor = useColorModeValue('brand.500', 'brand.300');

  // Sample data for the line chart
  const chartData = {
    options: {
      chart: {
        id: 'line-chart',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      },
    },
    series: [
      {
        name: 'Revenue',
        data: [1200, 1500, 900, 1800, 1200, 2100],
      },
    ],
  };

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
