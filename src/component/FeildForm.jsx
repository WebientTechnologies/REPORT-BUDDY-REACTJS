import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import "react-quill/dist/quill.snow.css";
import ScopeOfWorkComponent from "./Sow";
import PropertyForm from "./PropertyBackrgound";
import Interviewee from "./Interviewee";
import InterviewQnAComponent from "./qna";
import FieldSketchesComponent from "./RoofSketch";
import DocumentReviewComponent from "./DocumentReview";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Wrht from "./WRHT";
import FloodData from "./FloodData";
import LightningStrike from "./LightningStrike";
import SoilData from "./SoilData";
import HistoricalImageryReview from "./HistoricalImageryReview";
import { BiSolidHome, BiSolidUser } from "react-icons/bi";
import { LiaHandsSolid } from "react-icons/lia";
import { BsChatLeftText, BsFillGrid1X2Fill } from "react-icons/bs";
import { MdLandslide } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { HiCircleStack } from "react-icons/hi2";
import { LuBarChart2 } from "react-icons/lu";
import { SiFlood } from "react-icons/si";
import webientInfo from "../Images/Get PRO.png";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { homeRoute } from "../App";

const tabData = [
  { icon: <BiSolidHome />, label: "Scope Of Work (SOW)", component: <ScopeOfWorkComponent /> },
  { icon: <LiaHandsSolid />, label: "Property Background", component: <PropertyForm /> },
  { icon: <BsChatLeftText />, label: "Interviewee(s)", component: <Interviewee /> },
  { icon: <BsFillGrid1X2Fill />, label: "Interview Questions", component: <InterviewQnAComponent /> },
  { icon: <MdLandslide />, label: "Field Sketches", component: <FieldSketchesComponent /> },
  { icon: <IoMdLock />, label: "Document Reviews", component: <DocumentReviewComponent /> },
  { icon: <HiCircleStack />, label: "WRHT Data", component: <Wrht /> },
  { icon: <LuBarChart2 />, label: "Lightning Strike", component: <LightningStrike /> },
  { icon: <SiFlood />, label: "Flood Data", component: <FloodData /> },
  { icon: <BiSolidUser />, label: "Historical Image Review", component: <HistoricalImageryReview /> },
  { icon: <IoMdLock />, label: "Soil Data", component: <SoilData /> },
];

export function FieldForm() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const switchToNextTab = () => {
    // Increment the current tab index or reset to 0 if on the last tab
    setTabIndex((prevIndex) =>
      prevIndex < tabData.length - 1 ? prevIndex + 1 : 0
    );

  };
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server).
    // After handling the submission, switch to the next tab.
    if (tabIndex === tabData.length - 1) return navigate(`${homeRoute}`);
    switchToNextTab();
  };

  return (
    <Box
      as="form"
      onSubmit={onSubmit}
      w="full"
      maxH={"100vh"}
      overflow={"hidden"}
      mx="auto"
    >
      <Tabs index={tabIndex} onChange={handleTabsChange} display={"flex"} bg={'#2B3674'}>
        <TabList
          display={"flex"}
          flexDir={"column"}
          h={"100vh"}
          overflowY={"auto"}
          position={"sticky"}
          w={['0', "300px"]}
          justifyContent={"start"}
          gap={"2"}
          alignItems={"start"}
          bg={'white'}
          fontSize={{ base: '90%', xl: '100%' }}
          className="SidebarContainer"
        >
          <Box display='flex' color='#2B3674' fontWeight={700} fontSize={{ base: '150%' }} justifyContent={'center'} alignItems='center' pb={5} pt={8} w={'100%'}>
            Field Buddy
          </Box>
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              _selected={{
                bgColor: "gray.50",
                color: '#2B3674',
                fontWeight: '500',
                borderRight: '5px solid #4318FF',
              }}
              _activeLink={{
                bgColor: "gray.50",
                color: "#4318FF",
                fontWeight: '500',
              }}
              textAlign={"start"}
              w="full"
              color={'#A3AED0'}
              _active={{
                bgColor: "gray.50",
                color: "#4318FF",
                fontWeight: '500',
              }}>

              {tab.icon}
              <Text w="full" textAlign={"start"} px="4" display={"block"}>
                {tab.label}
              </Text>
            </Tab>
          ))}
          <Box pb={5} pt={7} w='full' h='full' display='flex' alignItems={'flex-end'} justifyContent='center'>
            <SidebarDocs />
          </Box>
        </TabList>
        <TabPanels
          h={"100vh"}
          overflowY={"auto"}
          display={"block"}
          alignItems={"start"}
          justifyItems={"start"}
        >
          {tabData.map((tab, index) => (
            <TabPanel key={index}>
              <Box display='flex' justifyContent='space-between' alignItems='center' w='full'>
                <Box p={3} fontWeight={500} color='#FFFFFF'>
                  {
                    localStorage.getItem('projectName') || ''
                  }
                  {' '}
                  {
                    localStorage.getItem('claimNo') || ''
                  }
                </Box>
                <Box>
                  <Link to={`${homeRoute}/take-photographs`}>
                    <Button>Take Photographs</Button>
                  </Link>
                </Box>
              </Box>

              <Box bg={'white'} w={'95%'} m='auto' mt={5} mr={{ base: 'auto', sm: 1 }} p={4} borderRadius={'15px'}>
                {tab.component}
                <Button
                  bg="black"
                  _hover={{ bg: "gray.700" }}
                  color="white"
                  rounded="md"
                  type="submit"
                  ml="auto"
                  pr="4"
                  w="full"
                >
                  {tabIndex === tabData.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FieldForm;


function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  const borderColor = useColorModeValue("white", "navy.800");
  return (
    <Flex
      justify='center'
      direction='column'
      align='center'
      bg={bgColor}
      borderRadius='30px'
      position='relative'>
      <Flex
        border='5px solid'
        borderColor={borderColor}
        bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
        borderRadius='50%'
        w='94px'
        h='94px'
        align='center'
        justify='center'
        mx='auto'
        position='absolute'
        left='50%'
        top='-47px'
        transform='translate(-50%, 0%)'>
        <AiOutlineInfoCircle size={'50%'} color="white" />
      </Flex>
      <Flex
        direction='column'
        mb='12px'
        align='center'
        justify='center'
        width={'70%'}
        m={'auto'}
        px='15px'
        pt='55px'
        pb={'4%'}>
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color='white'
          fontWeight='bold'
          lineHeight='150%'
          textAlign='center'
          // px='10px'
          mt="10px"
          mb='6px'>
          Filed Buddy
        </Text>
        <Text
          fontSize='12px'
          color={"white"}
          fontWeight='500'
          // px='10px'
          mb='6px'
          textAlign='center'>
          Developed By Webient Team
        </Text>
      </Flex>
    </Flex>
  );
}