import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading, Text, FormControl, FormLabel } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import Select from "react-select";
import "react-quill/dist/quill.snow.css";
import { quillModules, selectOptionForStandardScope } from "../data";
import { updateSowData } from "../../redux/actions/formDataAction";

function ScopeOfWorkComponent({ setForm, form }) {
  const sowData = form.sowData;

  const handleScopeFromReceivedDocumentsChange = (value) => {
    setForm((prevForm) => ({
      ...prevForm,
      sowData: {
        ...prevForm.sowData,
        scopeFromReceivedDocuments: value,
      },
    }));
  };

  const handleScopeFromInterviewChange = (value) => {
    setForm((prevForm) => ({
      ...prevForm,
      sowData: {
        ...prevForm.sowData,
        scopeFromInterview: value,
      },
    }));
  };

  const handleSowStatementChange = (value) => {
    setForm((prevForm) => ({
      ...prevForm,
      sowData: {
        ...prevForm.sowData,
        sowStatement: value,
      },
    }));
  };

  const handleStandardScopeChange = (selectedOption) => {
    setForm((prevForm) => ({
      ...prevForm,
      sowData: {
        ...prevForm.sowData,
        selectedStandardScope: selectedOption.value,
      },
    }));
  };

  console.log(form);

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
            base cabinets. **Pre-inspection verbal adjuster contact - Derrick
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
          <FormLabel
            as="h3"
            fontWeight={"semibold"}
            fontSize="lg"
            mb={2}
          >
            Scope from Received Documents
          </FormLabel>
          <ReactQuill
            theme="snow"
            style={{ height: "200px" }}
            modules={quillModules}
            required
            isRequired
            value={sowData.scopeFromReceivedDocuments}
            onChange={handleScopeFromReceivedDocumentsChange}
            placeholder="If any additional documents were received, Experts MUST review them closely and add scope items in this field. Please list each reportedly damaged building material and/or area that was (were) not listed in the “Assignment Sheet Scope” field."
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
          <FormLabel
            fontWeight={"semibold"}
            as="h3"
            fontSize="lg"
            mb={2}
          >
            Scope from Interview
          </FormLabel>
          <ReactQuill
            style={{ height: "200px" }}
            modules={quillModules}
            required
            isRequired
            value={sowData.scopeFromInterview}
            onChange={handleScopeFromInterviewChange}
            placeholder="If any scope is added from the interviews, Experts MUST add those scope items in this field. Please list each reportedly damaged building material and/or area that was (were) not listed in the “Assignment Sheet Scope” or “Scope from Received Documents” fields."
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
        <FormLabel 
          fontWeight={"semibold"}
          as="h3"
          fontSize="lg"
          mb={2}
        >
          SOW Statement
        </FormLabel>
        <Select
          options={selectOptionForStandardScope}
          placeholder="Select for standard scope"
          isSearchable={false}
          required
          onChange={handleStandardScopeChange}
          value = {{label: sowData.selectedStandardScope, value: sowData.selectedStandardScope}}
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
      <FormLabel 
          fontWeight={"semibold"}
          as="h3"
          fontSize="lg"
          mb={2}
        >
          SOW Statement Note
        </FormLabel>
        <ReactQuill
          style={{ height: "200px" }}
          modules={quillModules}
          value={sowData.sowStatement}
          required
          isRequired
          onChange={handleSowStatementChange}
          placeholder={`Experts MUST craft a complete SOW Statement (to use "as is" in the report) before the IDP is submitted.`}
        />
      </FormControl>
    </Box>
  );
}

export default ScopeOfWorkComponent;
