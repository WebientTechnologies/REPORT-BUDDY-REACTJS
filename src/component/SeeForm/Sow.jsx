import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Button,
  HStack,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import Select from "react-select";
import "react-quill/dist/quill.snow.css";
import { quillModules, selectOptionForStandardScope } from "../data";
import axios from "axios";
import { API_BASE_URL } from "../../App";
import CommentsModal from "./Utils/comments";
import InputChange from "./Utils/InputChange";

function ScopeOfWorkComponent({ getForm,setCommentFelid,setLogFelid ,getFormData}) {
  const sowData = getForm?.sowData;
  console.log({ sowData, getForm });

  return (
    <Box p="4">
      {/* Heading: Scope of Work */}
      <Heading as="h5" size="xl" fontWeight={500} textAlign="center" mb={4}>
        Scope of Work
      </Heading>
   
      <Box>
        {/* Heading: Scope Worksheet */}
        <Heading as="h4" size="md" mb={4} fontWeight={700}>
          Scope Worksheet
        </Heading>
        <Box>
          {/* Heading: Additional Details */}
          <Heading as="h3" mt={5} size="md" mb={2} fontWeight={500}>
            Scope of Service
          </Heading>
          {/* Scope of Service */}
          <Text
            mb={6}
            p={2}
            mt={3}
            borderRadius={"10px"}
            boxShadow="0px 18px 40px 0px #7090B01F"
          >
            Description of Loss: Water Leak Residential or Commercial:
            Residentia
          </Text>

          {/* Heading: Additional Details */}
          <Heading as="h3" fontWeight={"semibold"} size="md" mb={2}>
            Additional Details
          </Heading>

          {/* Description of Loss */}
          <Text
            mb={6}
            p={3}
            borderRadius={"10px"}
            boxShadow="0px 18px 40px 0px #7090B01F"
          >
            Scope of Service: Description of Loss/Location: Kitchen area, sink
            base cabinets?. **Pre-inspection verbal adjuster contact - Derrick
            Collins - (321) 249-1338 Additional Notes/Instructions: Please
            contact OC and set inspection to determine the C&O of leak and
            duration of leaking
          </Text>
        </Box>

        {/* Scope from Received Document - React Quill */}
        <FormControl
          mb={6}
          minH={"250px"}
          isRequired
          p={2}
          borderRadius={"10px"}
          boxShadow="0px 18px 40px 0px #7090B01F"
        >
          {/* Heading: Scope from Received Document */}
          <FormLabel as="h3" fontWeight={"semibold"} fontSize="lg" mb={2}>
            Scope from Received Documents
          </FormLabel>

          <InputChange  
            inputType={'quill'}  
            setCommentFelid= {  setCommentFelid}
            setLogFelid={setLogFelid}
getFormData= {getFormData}
            defaultValue={sowData?.scopeFromReceivedDocuments}
            fieldName= 'sowData.scopeFromReceivedDocuments'
            placeholder="If any additional documents were received, Experts MUST review them closely and add scope items in this field?. Please list each reportedly damaged building material and/or area that was (were) not listed in the “Assignment Sheet Scope” field?."
          />
        </FormControl>

        {/* Scope from Interview - React Quill */}
        <FormControl
          mb={6}
          minH={"250px"}
          required
          isRequired
          borderRadius={"10px"}
          boxShadow="0px 18px 40px 0px #7090B01F"
        >
          {/* Heading: Scope from Interview */}
          <FormLabel fontWeight={"semibold"} as="h3" fontSize="lg" mb={2}>
            Scope from Interview
          </FormLabel>

          
          <InputChange  
            inputType={'quill'}  
            setCommentFelid= {  setCommentFelid}
            setLogFelid={setLogFelid}
getFormData= {getFormData}
            defaultValue={sowData?.scopeFromInterview}
            fieldName= 'sowData.scopeFromInterview'
            placeholder="If any scope is added from the interviews, Experts MUST add those scope items in this field?. Please list each reportedly damaged building material and/or area that was (were) not listed in the “Assignment Sheet Scope” or “Scope from Received Documents” fields?."
          />
        </FormControl>
      </Box>

      {/* Select for Standard Scope */}
      <FormControl
        mb={6}
        borderRadius={"10px"}
        isRequired
        boxShadow="0px 18px 40px 0px #7090B01F"
      >
        {/* Heading: SOW Statement */}
        <FormLabel fontWeight={"semibold"} as="h3" fontSize="lg" mb={2}>
          SOW Statement
        </FormLabel>

        
        <InputChange  
            inputType={'select'}  
            options={selectOptionForStandardScope}
            setCommentFelid= {setCommentFelid}
            setLogFelid={setLogFelid}
getFormData= {getFormData}
            defaultValue={{
              label: sowData?.selectedStandardScope,
              value: sowData?.selectedStandardScope,
            }}
            fieldName= 'sowData.selectedStandardScope'
            placeholder="Select for standard scope"
            />
      </FormControl>

      {/* Quill with Placeholder */}
      <FormControl
        mb={6}
        minH={"250px"}
        isRequired
        borderRadius={"10px"}
        boxShadow="0px 18px 40px 0px #7090B01F"
      >
        <FormLabel fontWeight={"semibold"} as="h3" fontSize="lg" mb={2}>
          SOW Statement Note
        </FormLabel>

        <InputChange  
            inputType={'quill'}  
            options={selectOptionForStandardScope}
            setCommentFelid= {setCommentFelid}
            setLogFelid={setLogFelid}
getFormData= {getFormData}
            defaultValue={sowData?.sowStatement}
            fieldName= 'sowData.sowStatement'
            placeholder="Select for standard scope"
            />
      </FormControl>
    </Box>
  );
}

export default ScopeOfWorkComponent;



