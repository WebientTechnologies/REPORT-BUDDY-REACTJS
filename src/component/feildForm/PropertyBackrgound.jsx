import React, { Fragment, useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { quillModules } from "../data";
import { updatePropertyData } from "../../redux/actions/formDataAction";

const FormStructure = ({ index, setForm, form }) => {
  const dispatch = useDispatch();
  const structures = form.propertyData.structures;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      const newForm = { ...prevForm };
      newForm.propertyData.structures[index][name] = value;
      return newForm;
    });
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Box marginBottom="20px">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={4} mb={4} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
      <GridItem colSpan={1}>
          <FormControl
          required
          isRequired>
            <FormLabel>Building Type</FormLabel>
            <Select
              options={options}
              required
              isRequired
              name="buildingType"
              placeholder="Select Building type"
              value={options.find((option) => option.value === structures[index].buildingType)}
              onChange={(selectedOption) => handleChange({ target: { name: "buildingType", value: selectedOption.value } })}
            />
          </FormControl>
        </GridItem>
      
        <GridItem colSpan={1}>
          <FormControl     
            required
            isRequired
          >
            <FormLabel>Number of Stories</FormLabel>
            <Input
              type="number"
              name="numberOfStories"
              required
              isRequired
              placeholder="Enter number of stories"
              value={structures[index].numberOfStories || ""}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        
        <GridItem colSpan={1}>
          <FormControl     
          required
          isRequired>
            <FormLabel>Story Location</FormLabel>
            <Input
              type="text"
              required
              isRequired
              name="storyBySubLoc"
              placeholder="Enter story # where the subject unit is located"
              value={structures[index].storyBySubLoc || ""}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl
          required
          isRequired>
            <FormLabel>Construction Type</FormLabel>
            <Select
              options={options}
              required
              isRequired
              name="constructionType"
              placeholder="Select construction type"
              value={options.find((option) => option.value === structures[index].constructionType)}
              onChange={(selectedOption) => handleChange({ target: { name: "constructionType", value: selectedOption.value } })}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl 
          required
          isRequired>
            <FormLabel>Foundation Type</FormLabel>
            <Select
              options={options}
              name="foundationType"
              required
              isRequired
              placeholder="Select foundation type"
              value={options.find((option) => option.value === structures[index].foundationType)}
              onChange={(selectedOption) => handleChange({ target: { name: "foundationType", value: selectedOption.value } })}
            />
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
};



const PropertyForm = ({form , setForm}) => {
  const structures = form.propertyData.structures;
  const appraisersRecord = form.propertyData.appraisersRecord;
  // propertyAppraiserRecord :"",
  // permitInformation:"",
  // topographicMap:""
  const addStructure = () => {
    setForm((prevForm) => {
      const newForm = { ...prevForm };
      newForm.propertyData.structures.push({});
      return newForm;
    });
  };

  const handleChange = (name,value) => {
    setForm((prevForm) => {
      const newForm = { ...prevForm };
      newForm.propertyData.appraisersRecord[name] = value;
      return newForm;
    });
  };


  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <Box pb={"10"}>
      <Heading as="h3" textAlign="center" fontWeight={500} size="lg" mb={4}>
        Property Background
      </Heading>
      {structures.map((structure, index) => (
        <Fragment key={index}>
          <Heading size={"md"} as={"h4"} mb={4}>
            Structure {index + 1}{" "}
          </Heading>
          <FormStructure index={index} setForm={setForm} form={form} />
        </Fragment>
      ))}
      <HStack alignItems={"end"} justifyContent={"end"}>
        <Button
          onClick={addStructure}
          bg="black"
          _hover={{ bg: "gray.700" }}
          color="white"
          rounded="md"
          ml="auto"
          pr="4"
          mt={2}
          alignSelf={"end"}
          justifySelf={"end"}
          mb={4}
          marginRight={0}
        >
          Add Structure
        </Button>
      </HStack>

      <Heading as="h3" fontWeight={500} textAlign="center" size="lg" mt={10} mb={4}>
        Property Appraiser's Record
      </Heading>
      <HStack alignItems={"center"} justifyContent={"center"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <Button
            bg="black"
            _hover={{ bg: "gray.700" }}
            color="white"
            rounded="md"
            pr="4"
            mt={2}
            mb={4}
            marginRight={0}
          >
            View Data File
          </Button>
        </HStack>


        <FormControl mb={4} minH={"200px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}           required>
        <FormLabel>Property Appraiser Note</FormLabel>
          <ReactQuill 
          modules={quillModules}
          placeholder="Property Appraiser Record"
          style={{ height: "150px" }}
          value={appraisersRecord.propertyAppraiserRecord}
          required
          onChange={(value)=>handleChange('propertyAppraiserRecord',value)}
          isRequired
        
           />
        </FormControl>

        <Heading as="h3" fontWeight={500} textAlign="center" size="lg" mt={10} mb={4}>
        Permit Information's Record
      </Heading>
      <HStack alignItems={"center"} justifyContent={"center"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <Button
            bg="black"
            _hover={{ bg: "gray.700" }}
            color="white"
            rounded="md"
            pr="4"
            mt={2}
            mb={4}
            marginRight={0}
          >
            View Data File
          </Button>
        </HStack>


        <FormControl mb={4} minH={"200px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
        <FormLabel>Permit Information Note</FormLabel>
          <ReactQuill 
          modules={quillModules}
          placeholder="Permit Information Record"
          style={{ height: "150px" }}
          required
          isRequired
          value={appraisersRecord.permitInformation}
          onChange={(value)=>handleChange('permitInformation',value)}
           />
        </FormControl>

        <Heading as="h3" fontWeight={500} textAlign="center" size="lg" mt={10} mb={4}>
        Topographic Map's Record
      </Heading>
      <HStack alignItems={"center"} justifyContent={"center"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <Button
            bg="black"
            _hover={{ bg: "gray.700" }}
            color="white"
            rounded="md"
            pr="4"
            mt={2}
            mb={4}
            marginRight={0}
          >
            View Data File
          </Button>
        </HStack>


        <FormControl mb={4} minH={"200px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}           required>
        <FormLabel>Topographic Map Note</FormLabel>
          <ReactQuill 
          modules={quillModules}
          placeholder="Topographic Map Record"
          style={{ height: "150px" }}
          value={appraisersRecord.topographicMap}
          required
          isRequired
          onChange={(value)=>handleChange('topographicMap',value)}

        
           />
        </FormControl>
    </Box>
  );
};


export default PropertyForm;
