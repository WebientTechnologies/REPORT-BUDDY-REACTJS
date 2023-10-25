import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Divider,
  Icon,
  FormControl,
  AccordionIcon,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdExpandMore } from "react-icons/md"; // Import accordion icon
import ReactQuill from "react-quill";
import {
  atticAccessOptions,
  damageLocationOptions,
  interiorDamageOptions,
  quillModules,
  roomAreaOptions,
} from "./data";
import ReactSelect from "react-select";
import { AddIcon } from "@chakra-ui/icons";

function Wrht() {
  // State to store Q&A data
  const [qna, setQna] = useState({
    questions: [
      {
        label: "When was the property purchased?",
        type: "text",
        answer: "",
      },
      {
        label: "When was the structure built?",
        type: "text",
        answer: "",
      },
      {
        label: "When was the roof last replaced?",
        type: "file",
        answer: "",
      },
    ],
    structures: [
      {
        name: "",
        rooms: [
          {
            name: "",
            damages: [
              {
                type: "",
                description: "",
              },
            ],
          },
        ],
      },
    ],
  });

  // Function to add a new structure
  const addStructure = () => {
    // Create a new structure object
    const newStructure = {
      name: "",
      rooms: [],
    };

    // Add the new structure to the array
    setQna({
      ...qna,
      structures: [...qna.structures, newStructure],
    });
  };

  // Function to add a new room/area to a structure
  const addRoomToStructure = (structureIndex) => {
    // Create a new room object
    const newRoom = {
      name: "",
      damages: [],
    };

    // Update the specific structure by adding the new room
    const updatedStructures = [...qna.structures];
    updatedStructures[structureIndex].rooms.push(newRoom);

    // Update the Q&A data with the modified structures
    setQna({
      ...qna,
      structures: updatedStructures,
    });
  };

  // Function to add a new damage item to a room/area
  const addDamageToRoom = (structureIndex, roomIndex) => {
    // Create a new damage item object
    const newDamageItem = {
      type: "",
      description: "",
    };

    // Update the specific room by adding the new damage item
    const updatedStructures = [...qna.structures];
    updatedStructures[structureIndex].rooms[roomIndex].damages.push(
      newDamageItem
    );

    // Update the Q&A data with the modified structures
    setQna({
      ...qna,
      structures: updatedStructures,
    });
  };

  return (
    <Box p="4">
      <Heading as="h4" fontWeight={500} textAlign='center' size="xl">
        Wind | Rainfall | Hail | Tornado Data
      </Heading>

      {/* Display questions
      <VStack spacing={4} align="start" gap={4}>
        {qna.questions.map((question, questionIndex) => (
          <Box key={questionIndex} w="100%">
            <Text>{question.label}</Text>
            <Input
              type={question.type}
              value={question.answer}
              onChange={(e) => {
                const updatedQuestions = [...qna.questions];
                updatedQuestions[questionIndex].answer = e.target.value;
                setQna({ ...qna, questions: updatedQuestions });
              }}
            />
          </Box>
        ))}
      </VStack> */}

      <Box w="100%" my="8">
        <Heading as="h6" fontWeight={500} textAlign='center' size="sm" my={2}>
          Wind and Rainfall Data
        </Heading>
        <FormControl mb={4} isRequired height={"200px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <ReactQuill
            modules={quillModules}
            placeholder={`We obtained weather data from Month Date,Year through Month Date, Year (date of our site investigation) from the National Oceanic andAtmospheric Administration's (NOAA) NationalWeather Service (NWS) website ofhttps://w2.weather.gov/climate/. The closestweather station to the subject property was at theFort Lauderdale Executive Airport in FortLauderdale, Florida, approximately 7 milessoutheast of the subject property. The recordedmaximum sustained wind speed and wind gustsat this weather station during this period were 32miles per hour (mph) and 45 mph, respectively,on Month Date, 2022, The recorded maximumsustained wind speed and wind gusts at thisweather station on the reported date of loss were32 mph and 45 mph, respectively, The estimatedrainfall on the reported date of loss wasapproximately 4.13 inches`}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>

      <Box w="100%" my="8">
        <Heading as="h6" textAlign='center' fontWeight={500} size="sm" my={2}>
          Hail Data
        </Heading>
        <FormControl mb={4} isRequired height={"200px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <ReactQuill
            modules={quillModules}
            placeholder={`We obtained weather data from Month Date,Year through Month Date, Year (date of our siteinvestigation) from the website of https://hailreports.com. utilizes informationfrom the NWS to display the storm data. The dataon the website is updated every few minutesdirectly from the NOAA data source and trainedstorm spotters. The archived weather data duringthis period did not show any report of hail fallingwithin 25 miles of the subject property.`}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
      <Box w="100%" my="8">
        <Heading as="h6" fontWeight={500} textAlign='center' size="sm" my={2}>
          Hail Data
        </Heading>
        <FormControl mb={4} isRequired height={"200px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <ReactQuill
            modules={quillModules}
            placeholder={`We obtained weather data from Month Date,Year through Month Date, Year (date of our siteinvestigation) from the website of https://hailreports.com. utilizes informationfrom the NWS to display the storm data. The dataon the website is updated every few minutesdirectly from the NOAA data source and trainedstorm spotters. The archived weather data duringthis period did not show any report of hail fallingwithin 25 miles of the subject property.`}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
      <Box w="100%" my="8">
        <Heading as="h6" fontWeight={500} textAlign='center' size="sm" my={2}>
          Tornado Data
        </Heading>
        <FormControl mb={4} isRequired height={"500px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <ReactQuill
            modules={quillModules}
            placeholder={`Historical weather data for the Polk County areawas reviewed for Month Date, Year, using NOAA’sStorm Prediction Center (SPC). Figure 1 showsinformation regarding the tornado activity in thePolk County area on Month Date, Year obtainedfrom SPC. The closest report of damage due to atornado was damage to XXXX in City, State,approximately X miles northeast of the subjectproperty. No information regarding the intensityof the reported tornado in City, State wasavailable.
            
We also reviewed several other weather datawebsites owned by NOAA to obtain informationregarding the reported tornado. No informationrelevant to the reported tornado event could beobtained from these websites.Several media websites reported that on MonthDate, Year, at least three tornadoes passedthrough the City, State area causing structuraldamage. The media reported that an EF2tornado [on the Enhanced Fujita (EF) scale]touched down in City, State, which wasapproximately 8 miles northeast of the subjectproperty.

The EF Scale is used to assign a 'rating' fortornadoes based on estimated wind speeds andrelated damage. When tornado-related damageis surveyed, it is compared to a list of DamageIndicators (DIs) and Degrees of Damage (DoD)which help estimate better the range of windspeeds the tornado likely produced. From that, arating (EF0 to EF5) is assigned. The wind speedsassociated with the EF scale are provided in thebelow table.
                        `}
            style={{ height: "450px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
      <Box w="100%" my="8">
        <Heading as="h6" fontWeight={500} textAlign='center' size="sm" my={2}>
          + Add Additional Weather Data
        </Heading>
        <FormControl mb={4} isRequired height={"200px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <ReactQuill
            modules={quillModules}
            placeholder={`We obtained lightning strike and thunderstorm history report for Month Date, Year (the reported date of loss) from the Blitzortung online website of http://en.blitzortung.org. Figure 1 shows a lightning strike map excerpted from this website. This map showed that several lightning strikes were recorded close to the subject property at approximately 1.30 PM Universal Coordinated Time (i.e., 9.30 AM Eastern Standard Time) on Month Date, Year. We also obtained a lightning report for the subject property from Benchmark. This report was prepared for a three-day period from Month Date, Year to Month Date, Year. The closest lightning strike detected on Month Date, Year (the reported date of loss) was 0.1 mile from the subject p `}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
    </Box>
  );
};


export default Wrht;
