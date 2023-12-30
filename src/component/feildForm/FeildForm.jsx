import React, { useState } from "react";
import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
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
import { Navigate, useNavigate, Link, useParams } from "react-router-dom";
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
import { AiOutlineInfoCircle } from "react-icons/ai";
import { homeRoute } from "../../App";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postFormData } from "../../redux/actions/dashBoardAction";
import toast from "react-hot-toast";




const tabData = [
  {
    icon: <BiSolidHome />,
    label: "Scope Of Work (SOW)",
    Component: ScopeOfWorkComponent,
  },
  {
    icon: <LiaHandsSolid />,
    label: "Property Background",
    Component: PropertyForm,
  },
  { icon: <BsChatLeftText />, label: "Interviewee(s)", Component: Interviewee },
  {
    icon: <BsFillGrid1X2Fill />,
    label: "Interview Questions",
    Component: InterviewQnAComponent,
  },
  {
    icon: <MdLandslide />,
    label: "Field Sketches",
    Component: FieldSketchesComponent,
  },
  {
    icon: <IoMdLock />,
    label: "Document Reviews",
    Component: DocumentReviewComponent,
  },
  { icon: <HiCircleStack />, label: "WRHT Data", Component: Wrht },
  {
    icon: <LuBarChart2 />,
    label: "Lightning Strike",
    Component: LightningStrike,
  },
  { icon: <SiFlood />, label: "Flood Data", Component: FloodData },
  {
    icon: <BiSolidUser />,
    label: "Historical Image Review",
    Component: HistoricalImageryReview,
  },
  { icon: <IoMdLock />, label: "Soil Data", Component: SoilData },
];

export function FieldForm() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  const dispatch = useDispatch();;
  let { projectId } = useParams();

  const formSubmit = ()=>{
    let data = {
      projectId: projectId,
      ...form,
      qna: undefined,
      // businessCardBack :form?.interviewee?.map(interviewee => interviewee.backBusinessCard) ,
      // businessCardFront :form?.interviewee?.map(interviewee => interviewee.frontBusinessCard),
      // document: form.interviewee.map(interviewee => interviewee.documentImage),
      interviewee: form.interviewee.map(interviewee => ({
      contactMethod: interviewee.contactMethod,
      title: interviewee.title,
      firstName:interviewee.firstName,
      lastName: interviewee.lastName,
      roofingContract: interviewee.roofingContract,
      companyName: interviewee.companyName,
      interviewSignificance:interviewee.interviewSignificance,
       })),
       sow: {...form?.sowData , selectedStandardScope: form?.sowData?.selectedStandardScope?.value},
       
       propertyPurchasedTime: form.qna.questions[0].answer,

    dolPerInterviewee:form.qna.questions[1].answer,

    interviewRecord: form.qna.questions[2].answer,
       
       interviewStructure: form.qna.structures.map(structure=>({
        // name: structure;
    buildDate: structure.buildDate,
    interiorDamageGeneralInfo: structure.interiorDamageGeneralInfo,
    roofReplacementDate: structure.roofReplacementDate,
    exteriorDamageDescription:  structure.exteriorDamageDescription,
    exteriorDamageNotes:  structure.exteriorDamageNotes,
    roofDamageDescription:  structure?.roofDamageDescription,
    roofNotes:  structure.roofNotes,
    rooms: structure.rooms.map(room=>({
      roomArea:room.name,
      damages : room.damages.map(damage=>({
        location: damage?.location,
        atticAccessInfo: damage?.atticAccessInfo,
        notes: damage?.atticAccessInfo,
      }))
    }))


       }))
    }
    dispatch(postFormData(data))
  }
  const switchToNextTab = (e) => {
    e?.preventDefault();

    debugger
    if(tabIndex === tabData.length-1)
    {
      formSubmit();
    }
    // Increment the current tab index or reset to 0 if on the last tab
    setTabIndex((prevIndex) =>
      prevIndex < tabData.length - 1 ? prevIndex + 1 : 0
    );
    
  };
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    debugger
    // Handle form submission here (e.g., send data to the server).
    // After handling the submission, switch to the next tab.
    if (tabIndex === tabData.length - 1) return formSubmit();
    switchToNextTab();
  };

  const [form, setForm] = useState({
    sowData: {
      descriptionOfLoss: "",
      additionalDetails: "",
      scopeFromReceivedDocuments: "",
      scopeFromInterview: "",
      sowStatement: "",
      selectedStandardScope: null,
    },
    propertyData: {
      structures: [{}], // Initial structure with one element
      appraisersRecord: {
        propertyAppraiserRecord: "",
        permitInformation: "",
        topographicMap: "",
      },
    },
    interviewee: [
      {
        id: "Interviewee 1",
        contactMethod: "",
        message: "",
        title: "",
        firstName: "",
        lastName: "",
        roofingContract: "",
        companyName: "",
        interviewSignificance: "",
        frontBusinessCard: null,
        backBusinessCard: null,
        documentImage: null,
      },
    ],
    qna: {
      questions: [
        {
          label: "When was the property purchased?",
          type: "text",
          answer: "",
        },
        {
          label: "dol Per the Interviewee",
          type: "text",
          answer: "",
        },
        {
          label: "Interview Recording",
          type: "text",
          answer: "",
        },
      ],
      structures: [
        {
          name: "",
          buildDate: "", 
          roofReplacementDate: "", 
          exteriorDamageDescription: "",
          exteriorDamageNotes: "", 
          roofDamageDescription: "", 
          roofNotes: "", 
          rooms: [{
            name: "",
            damages: [{
              location: "", 
              atticAccessInfo: "", 
              notes: "",  
            }],
          }],
        }
      ],
    },
    sketches:{
        interiorDamageSketch: "",
        roofSketch: ""
    },
    documents: [
      {
        document: null,
        constructionEstimate: "",
        documentReviewNotes: "",
        noteworthyItems: "",
      },
    ],
    wrht: {
      windAndRainfallData: "",
      hailData1: "",
      tornadoData: "",
    },
    lightningStrike: "",
    floodData: [
      {
        usgsRiverGageData: "",
        usgsHighWaterMarkData: "",
        noaaBuoyStreamGageData: "",
        fetchDistanceData: "",
      },
    ],
    historicalImageryReview: {
      aerial: "",
      realtor: "",
      zillow: "",
      redfin: "",
      google: "",
    },
    soilData:""
  });

  return (
    <Box
      
      w="full"
      maxH={"100vh"}
      overflow={"hidden"}
      mx="auto"
    >
      <Tabs
        index={tabIndex}
        onChange={handleTabsChange}
        display={"flex"}
        bg={"#2B3674"}
      >
        <TabList
          display={"flex"}
          flexDir={"column"}
          h={"100vh"}
          overflowY={"auto"}
          position={"sticky"}
          w={["0", "300px"]}
          justifyContent={"start"}
          gap={"2"}
          alignItems={"start"}
          bg={"white"}
          fontSize={{ base: "90%", xl: "100%" }}
          className="SidebarContainer"
        >
          <Box
            display="flex"
            color="#2B3674"
            fontWeight={700}
            fontSize={{ base: "150%" }}
            justifyContent={"center"}
            alignItems="center"
            pb={5}
            pt={8}
            w={"100%"}
          >
            Field Buddy
          </Box>
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              _selected={{
                bgColor: "gray.50",
                color: "#2B3674",
                fontWeight: "500",
                borderRight: "5px solid #4318FF",
              }}
              _activeLink={{
                bgColor: "gray.50",
                color: "#4318FF",
                fontWeight: "500",
              }}
              textAlign={"start"}
              w="full"
              color={"#A3AED0"}
              _active={{
                bgColor: "gray.50",
                color: "#4318FF",
                fontWeight: "500",
              }}
            >
              {tab.icon}
              <Text w="full" textAlign={"start"} px="4" display={"block"}>
                {tab.label}
              </Text>
            </Tab>
          ))}
          <Box
            pb={5}
            pt={7}
            w="full"
            h="full"
            display="flex"
            alignItems={"flex-end"}
            justifyContent="center"
          >
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
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                w="full"
              >
                <Box p={3} fontWeight={500} color="#FFFFFF">
                  {localStorage.getItem("projectName") || ""}{" "}
                  {localStorage.getItem("claimNo") || ""}
                </Box>
                <Box>
                  <Link to={`${homeRoute}/take-photographs`}>
                    <Button>Take Photographs</Button>
                  </Link>
                </Box>
              </Box>

              <Box
                bg={"white"}
                w={"95%"}
                m="auto"
                mt={5}
                mr={{ base: "auto", sm: 1 }}
                p={4}
                borderRadius={"15px"}
                as="form"
      onSubmit={onSubmit}
              >
                {<tab.Component form={form} setForm={setForm} />}
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
}

export default FieldForm;

function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  const borderColor = useColorModeValue("white", "navy.800");
  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={bgColor}
      borderRadius="30px"
      position="relative"
    >
      <Flex
        border="5px solid"
        borderColor={borderColor}
        bg="linear-gradient(135deg, #868CFF 0%, #4318FF 100%)"
        borderRadius="50%"
        w="94px"
        h="94px"
        align="center"
        justify="center"
        mx="auto"
        position="absolute"
        left="50%"
        top="-47px"
        transform="translate(-50%, 0%)"
      >
        <AiOutlineInfoCircle size={"50%"} color="white" />
      </Flex>
      <Flex
        direction="column"
        mb="12px"
        align="center"
        justify="center"
        width={"70%"}
        m={"auto"}
        px="15px"
        pt="55px"
        pb={"4%"}
      >
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color="white"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          // px='10px'
          mt="10px"
          mb="6px"
        >
          Filed Buddy
        </Text>
        <Text
          fontSize="12px"
          color={"white"}
          fontWeight="500"
          // px='10px'
          mb="6px"
          textAlign="center"
        >
          Developed By Webient Team
        </Text>
      </Flex>
    </Flex>
  );
}
