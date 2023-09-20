import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import ScopeOfWorkComponent from "./Sow";
import PropertyForm from "./PropertyBackrgound";
import Interviewee from "./Interviewee";
import InterviewQnAComponent from "./qna";
import FieldSketchesComponent from "./RoofSketch";
import DocumentReviewComponent from "./DocumentReview";

const tabData = [
  { label: "SOW", component: <ScopeOfWorkComponent /> },
  { label: "Property Background", component: <PropertyForm /> },
  { label: "Interviewee(s)", component: <Interviewee /> },
  { label: "Interview Questions", component: <InterviewQnAComponent /> },
  { label: "Field Sketches", component: <FieldSketchesComponent /> },
  { label: "Document Reviews", component: <DocumentReviewComponent /> },
  { label: "WRHT Data", component: <DocumentReviewComponent /> },
  { label: "Lightning Strike", component: <ScopeOfWorkComponent /> },
  { label: "Flood Data", component: <ScopeOfWorkComponent /> },
  { label: "Historical Image Review", component: <ScopeOfWorkComponent /> },
  { label: "Soil Data", component: <ScopeOfWorkComponent /> },
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

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the server).
    // After handling the submission, switch to the next tab.
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
      <Tabs index={tabIndex} onChange={handleTabsChange} display={"flex"}>
        <TabList
          display={"flex"}
          flexDir={"column"}
          h={"100vh"}
          overflowY={"auto"}
          position={"sticky"}
          w="300px"
          justifyContent={"start"}
          gap={"2"}
          alignItems={"start"}
        >
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              _selected={{
                bgColor: "gray.50",
                color: "black",
                fontWeight: "bold",
                borderColor: "black",
              }}
              _activeLink={{
                bgColor: "gray.50",
                color: "black",
                fontWeight: "bold",
                borderColor: "black",
              }}
              textAlign={"start"}
              w="full"
              _active={{
                bgColor: "gray.50",
                color: "black",
                fontWeight: "bold",
                borderColor: "black",
              }}
              
            >
              <Text w="full" textAlign={"start" } px="4" display={"block"}>
                {tab.label}
              </Text>
            </Tab>
          ))}
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
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default FieldForm;
