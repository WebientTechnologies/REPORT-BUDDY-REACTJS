import { Flex, Heading, Grid, Button, useColorModeValue, Box, Stat, StatLabel, StatNumber, StatHelpText, GridItem, VStack } from '@chakra-ui/react';
import React from 'react';
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
    <Flex flexDirection="column"       pb={[8,16]}
    >
      <Heading color={pinkishColor}>Welcome to Prema Consultancy</Heading>
 

      {/* <CustomersReview/> */}
      {/* Refresh Button
      <Button colorScheme="brand" variant="outline" mt={4}>
        Refresh
      </Button> */}
      
    </Flex>
  );
}

export default DashBoard;
