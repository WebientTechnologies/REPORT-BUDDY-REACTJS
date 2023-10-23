import { Flex, Heading, Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { QR_Dashboard } from '../DashboardComponentsAccordingtoUser/QR_Dashboard';
import { TW_Dashboard } from '../DashboardComponentsAccordingtoUser/TW_Destination';
import { PC_Dashboard } from '../DashboardComponentsAccordingtoUser/PC_Dashboard';
import { OM_Dashboard } from '../DashboardComponentsAccordingtoUser/OM_Dashboard';
import { EM_Dashboard } from '../DashboardComponentsAccordingtoUser/EM_Dashboard';
import { FE_Dashboard } from '../DashboardComponentsAccordingtoUser/FE_Dashboard';


function DashBoard() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [aboutUser, setAboutUser] = useState('');

  const user = JSON.parse(localStorage.getItem('premaUser'));
  console.log({ user });

  useEffect(() => {
    setAboutUser(user?.designation);
  }, [dispatch]);


  return (
    <Flex flexDirection="column" pb={[8, 16]}>
      <Heading color={'white'} textAlign={'center'} fontWeight={500}>Welcome to Prema Consultancy</Heading>
      <Box>
        {
          aboutUser === "QR" && (
            <QR_Dashboard />
          )
        }
        {
          aboutUser === "TW" && (
            <TW_Dashboard />
          )
        }
        {
          aboutUser === "PC" && (
            <PC_Dashboard />
          )
        }
        {
          aboutUser === "OM" && (
            <OM_Dashboard />
          )
        }
        {
          aboutUser === "EM" && (
            <EM_Dashboard />
          )
        }
        {
          aboutUser === "FE" && (
            <FE_Dashboard />
          )
        }
      </Box>

      {/* <Tabs variant="unstyled" color={'white'}>
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
                      <Text>My Projects</Text>
                      <Text>{myProjects?.length || 0}</Text>
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
      </Tabs> */}
    </Flex>
  );
};

export default DashBoard;
