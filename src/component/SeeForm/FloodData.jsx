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
} from "../data";
import ReactSelect from "react-select";
import { AddIcon } from "@chakra-ui/icons";
import InputChange from "./Utils/InputChange";

function FloodData({setLogFelid, setCommentFelid, getForm,getFormData}) {
const floodData = getForm?.floodData;

  return (
    <Box p="4">
      <Heading as="h2" textAlign='center' fontWeight={500} size="xl">
        Flood Data
      </Heading>
{
  floodData?.map((flood, index)=><>
   <Box w="100%" my="8">
        <Heading as="h6" size="sm" my={2} textAlign='center' fontWeight={500}>
          USGS River Gage Data
        </Heading>
        <FormControl mb={4} isRequired height={"250px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
        <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={flood.usgsRiverGageData}
          fieldName={`floodData.${index}.usgsRiverGageData`}
          height="150px"
          placeholder={`According to the USGS – National WaterInformation System’s Water Resources onlinewebsite, the gage height of the closest USGSstream gage, USGS 0XXXXXXX on XXXX River atCity, State, rose from approximately XX.X feet onMonth, Date, Year to approximately XX.X feet onMonth, Date, Year (Figure X)., This gage wasapproximately X miles northeast of the subjectproperty`}
          />
        </FormControl>
      </Box>

      <Box w="100%" my="8">
        <Heading as="h6" size="sm" my={2} fontWeight={500} textAlign='center'>
          USGS High-water Mark Data
        </Heading>
        <FormControl mb={4} isRequired height={"250px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
        <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={flood.usgsHighWaterMarkData}
          fieldName={`floodData.${index}.usgsHighWaterMarkData`}
          height="150px"
          placeholder={`The USGS deployed storm sensors prior to the storm and surveyed high-water marks throughout the flood-affected areas. According to the USGS – Flood Event Viewer’s online website, a survey point, XXXXXXXXX, which was approximately X.XX miles northwest of the subject property, documented a high-water mark of X.XX feet above the local ground (Figure X). This high-water mark elevation was XX.X feet NAVD88.
          `}         
        />
        </FormControl>
      </Box>

      <Box w="100%" my="8">
        <Heading as="h6" size="sm" my={2} textAlign='center' fontWeight={500}>
          NOAA Buoy Stream Gage Data
        </Heading>
        <FormControl mb={4} isRequired height={"250px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
        <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={flood.noaaBuoyStreamGageData}
          fieldName={`floodData.${index}.noaaBuoyStreamGageData`}
          height="150px"
          placeholder={`According to the NOAA buoy stream gage data, a coastal gage at City, State, which was about XX miles north of the subject property, reached a maximum height of approximately XX.X feet NAVD88 during the storm (Figure X).`}       
        />
        </FormControl>
      </Box>
      <Box w="100%" my="8">
        <Heading as="h6" size="sm" my={2} fontWeight={500} textAlign='center'>
          Fetch Distance Data
        </Heading>
        <FormControl mb={4} isRequired height={"250px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
        <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={flood.fetchDistanceData}
          fieldName={`floodData.${index}.fetchDistanceData`}
          height="150px"
          placeholder={`Fetch is the distance from the dock to land in any direction over open water. The fetch distance to the northwest, southwest, and southeast was approximately XXX feet, XXX feet, and XXX feet, respectively, from the subject property (Figure X)`}/>
        </FormControl>
      </Box>

  </>)
}
    </Box>
  );
}

export default FloodData;
