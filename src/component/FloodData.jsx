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

function FloodData() {
  

  return (
    <Box p="4">
      <Heading as="h2" size="xl">
      Lightning Strike
      </Heading>

      <Box w="100%" my="8">
        <Heading as="h6" size="sm" my={2}>
       USGS River Gage Data
        </Heading>
        <FormControl mb={4} isRequired height={"200px"}>
          <ReactQuill
            modules={quillModules}
            placeholder={`According to the USGS – National WaterInformation System’s Water Resources onlinewebsite, the gage height of the closest USGSstream gage, USGS 0XXXXXXX on XXXX River atCity, State, rose from approximately XX.X feet onMonth, Date, Year to approximately XX.X feet onMonth, Date, Year (Figure X)., This gage wasapproximately X miles northeast of the subjectproperty`}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>

      <Box w="100%" my="8">
        <Heading as="h6" size="sm" my={2}>
       USGS High-water Mark Data
        </Heading>
        <FormControl mb={4} isRequired height={"200px"}>
          <ReactQuill
            modules={quillModules}
            placeholder={`The USGS deployed storm sensors prior to the storm and surveyed high-water marks throughout the flood-affected areas. According to the USGS – Flood Event Viewer’s online website, a survey point, XXXXXXXXX, which was approximately X.XX miles northwest of the subject property, documented a high-water mark of X.XX feet above the local ground (Figure X). This high-water mark elevation was XX.X feet NAVD88.
            `}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>

      <Box w="100%" my="8">
        <Heading as="h6" size="sm" my={2}>
       NOAA Buoy Stream Gage Data
        </Heading>
        <FormControl mb={4} isRequired height={"200px"}>
          <ReactQuill
            modules={quillModules}
            placeholder={`According to the NOAA buoy stream gage data, a coastal gage at City, State, which was about XX miles north of the subject property, reached a maximum height of approximately XX.X feet NAVD88 during the storm (Figure X).`}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
      <Box w="100%" my="8">
        <Heading as="h6" size="sm" my={2}>
       Fetch Distance Data
        </Heading>
        <FormControl mb={4} isRequired height={"200px"}>
          <ReactQuill
            modules={quillModules}
            placeholder={
                `Fetch is the distance from the dock to land in any direction over open water. The fetch distance to the northwest, southwest, and southeast was approximately XXX feet, XXX feet, and XXX feet, respectively, from the subject property (Figure X)`
            } 
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>

      <HStack justifyContent={'end'}>
      <Button 
       bg="black"
       _hover={{ bg: "gray.700" }}
       color="white"
       rounded="md"
       ml="auto"
       pr="4"
       mb={2}
      >+ Add Flood Data 
      </Button>
      </HStack>
    </Box>
  );
}

export default FloodData;
