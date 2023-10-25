import { Flex, Heading, Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { QR_Dashboard } from '../DashboardComponentsAccordingtoUser/QR_Dashboard';
import { TW_Dashboard } from '../DashboardComponentsAccordingtoUser/TW_Destination';
import { PC_Dashboard } from '../DashboardComponentsAccordingtoUser/PC_Dashboard';
import { OM_Dashboard } from '../DashboardComponentsAccordingtoUser/OM_Dashboard';
import { EM_Dashboard } from '../DashboardComponentsAccordingtoUser/EM_Dashboard';
import { FE_Dashboard } from '../DashboardComponentsAccordingtoUser/FE_Dashboard';


function DashBoard() {

  const dispatch = useDispatch();
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
    </Flex>
  );
};

export default DashBoard;
