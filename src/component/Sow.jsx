import { Box, Heading, Text, FormControl } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import Select from "react-select";
import 'react-quill/dist/quill.snow.css';
import { quillModules, selectOptionForStandardScope } from "./data";

function ScopeOfWorkComponent() {
  return (
    <Box p="4">
      {/* Heading: Scope of Work */}
      <Heading as="h5" size="xl" fontWeight={500} textAlign='center' mb={4} >
        Scope of Work
      </Heading>
      <Box>
        {/* Heading: Scope Worksheet */}
        <Heading as="h4" size="md" mb={4} fontWeight={700} textAlign='center' >
          Scope Worksheet
        </Heading>
        <Box>
          {/* Heading: Additional Details */}
          <Heading as="h3" mt={5} size="md" mb={2} fontWeight={500} textAlign='center'>
            Scope of Service
          </Heading>
          {/* Scope of Service */}
          <Text mb={6} p={2} mt={3} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F">
            Description of Loss: Water Leak Residential or Commercial: Residentia
          </Text>

          {/* Heading: Additional Details */}
          <Heading as="h3" fontWeight={"semibold"} size="md" mb={2} textAlign='center'>
            Additional Details
          </Heading>

          {/* Description of Loss */}
          <Text mb={6} p={3} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F">
            Scope of Service: Description of Loss/Location: Kitchen area, sink base
            cabinets. **Pre-inspection verbal adjuster contact - Derrick Collins -
            (321) 249-1338 Additional Notes/Instructions: Please contact OC and set
            inspection to determine the C&O of leak and duration of leaking
          </Text>
        </Box>

        {/* Heading: Scope from Received Document */}
        <Heading as="h3" fontWeight={"semibold"} size="md" mb={2} textAlign='center'>
          Scope from Received Documents
        </Heading>

        {/* Scope from Received Document - React Quill */}
        <FormControl mb={6} minH={"250px"} isRequired p={2} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F">
          <ReactQuill
            theme="snow"
            style={{ height: "200px" }}
            modules={quillModules}
            placeholder="If any additional documents were received, Experts MUST review them closely and add scope items in this field. Please list each reportedly damaged building material and/or area that was (were) not listed in the “Assignment Sheet Scope” field."
          />
        </FormControl>

        {/* Heading: Scope from Interview */}
        <Heading fontWeight={"semibold"} as="h3" size="md" mb={2} textAlign='center'>
          Scope from Interview
        </Heading>

        {/* Scope from Interview - React Quill */}
        <FormControl mb={6} minH={"250px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F">
          <ReactQuill
            style={{ height: "200px" }}
            modules={quillModules}
            placeholder="If any scope is added from the interviews, Experts MUST add those scope items in this field. Please list each reportedly damaged building material and/or area that was (were) not listed in the “Assignment Sheet Scope” or “Scope from Received Documents” fields."
          />
        </FormControl>

      </Box>

      {/* Heading: SOW Statement */}
      <Heading fontWeight={"semibold"} as="h3" size="md" mb={2} textAlign='center'>
        SOW Statement
      </Heading>

      {/* Select for Standard Scope */}
      <FormControl mb={6} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F">
        <Select
          options={selectOptionForStandardScope}
          placeholder="Select for standard scope"
          isSearchable={false} // Optionally disable searching
        />
      </FormControl>

      {/* Quill with Placeholder */}
      < FormControl mb={6} minH={"250px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F">
        <ReactQuill
          style={{ height: "200px" }}
          modules={quillModules}
          placeholder={`Experts MUST craft a complete SOW Statement (to use "as is" in the report) before the IDP is submitted.`}
        />
      </FormControl>
    </Box>
  );
}

export default ScopeOfWorkComponent;
