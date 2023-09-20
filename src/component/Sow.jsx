import { Box, Heading, Text, FormControl } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import Select from "react-select";

import "react-quill/dist/quill.snow.css"; // Import Quill CSS
import { quillModules, selectOptionForStandardScope } from "./data";

function ScopeOfWorkComponent() {
  return (
    <Box>
      {/* Heading: Scope of Work */}
      <Heading as="h2" size="xl" mb={4}>
        Scope of Work
      </Heading>

      {/* Heading: Scope Worksheet */}
      <Heading as="h3" size="md" mb={4}>
        Scope Worksheet
      </Heading>

      {/* Heading: Additional Details */}
      <Heading as="h3" fontWeight={"semibold"} size="md" mb={2}>
        Scope of Service
      </Heading>
      {/* Scope of Service */}
      <Text mb={4}>
        Description of Loss: Water Leak Residential or Commercial: Residentia
      </Text>

      {/* Heading: Additional Details */}
      <Heading as="h3" fontWeight={"semibold"} size="md" mb={2}>
        Additional Details
      </Heading>

      {/* Description of Loss */}
      <Text mb={4}>
        Scope of Service: Description of Loss/Location: Kitchen area, sink base
        cabinets. **Pre-inspection verbal adjuster contact - Derrick Collins -
        (321) 249-1338 Additional Notes/Instructions: Please contact OC and set
        inspection to determine the C&O of leak and duration of leaking
      </Text>

      {/* Heading: Scope from Received Document */}
      <Heading as="h3" fontWeight={"semibold"} size="md" mb={2}>
        Scope from Received Documents
      </Heading>

      {/* Scope from Received Document - React Quill */}
      <FormControl mb={4} minH={"200px"} isRequired>
        <ReactQuill
          style={{ height: "150px" }}
          modules={quillModules}
          placeholder="If any additional documents were received, Experts MUST review them closely and add scope items in this field. Please list each reportedly damaged building material and/or area that was (were) not listed in the “Assignment Sheet Scope” field."
        />
      </FormControl>

      {/* Heading: Scope from Interview */}
      <Heading fontWeight={"semibold"} as="h3" size="md" mb={2}>
        Scope from Interview
      </Heading>

      {/* Scope from Interview - React Quill */}
      <FormControl mb={4} minH={"200px"} isRequired>
        <ReactQuill
          modules={quillModules}
          placeholder="If any scope is added from the interviews, Experts MUST add those scope items in this field. Please list each reportedly damaged building material and/or area that was (were) not listed in the “Assignment Sheet Scope” or “Scope from Received Documents” fields."
          style={{ height: "150px" }}
        />
      </FormControl>

      {/* Heading: SOW Statement */}
      <Heading fontWeight={"semibold"} as="h3" size="md" mb={2}>
        SOW Statement
      </Heading>

      {/* Select for Standard Scope */}
      <FormControl mb={2}>
        <Select
          options={selectOptionForStandardScope}
          placeholder="Select for standard scope"
          isSearchable={false} // Optionally disable searching
        />
      </FormControl>

      {/* Quill with Placeholder */}
      <FormControl mb={4} minH={"200px"} isRequired>
        <ReactQuill
          style={{ height: "150px" }}
          modules={quillModules}
          placeholder={`Experts MUST craft a complete SOW Statement (to use "as is" in the report) before the IDP is submitted.`}
        />
      </FormControl>
    </Box>
  );
}

export default ScopeOfWorkComponent;
