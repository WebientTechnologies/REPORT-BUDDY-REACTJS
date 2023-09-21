import React, { Fragment, useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import Select from "react-select";

import "react-quill/dist/quill.snow.css";
import { quillModules } from "./data";

const FormStructure = () => {
  const [structure, setStructure] = useState({
    numberOfStories: "",
    storyLocation: "",
    constructionType: "",
    foundationType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStructure((prevStructure) => ({
      ...prevStructure,
      [name]: value,
    }));
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Box marginBottom="20px">
      {/* Add margin-bottom for separation */}
      <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)"]} gap={4} mb={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Number of Stories</FormLabel>
            <Input
              type="number"
              name="numberOfStories"
              placeholder="Enter number of stories"
              value={structure.numberOfStories}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Story Location</FormLabel>
            <Input
              type="text"
              name="storyLocation"
              placeholder="Enter story # where the subject unit is located"
              value={structure.storyLocation}
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Construction Type</FormLabel>
            <Select
              options={options}
              name="constructionType"
              placeholder="Select construction type"
              value={options.find(
                (option) => option.value === structure.constructionType
              )}
              onChange={(selectedOption) =>
                setStructure((prevStructure) => ({
                  ...prevStructure,
                  constructionType: selectedOption.value,
                }))
              }
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Foundation Type</FormLabel>
            <Select
              options={options}
              name="foundationType"
              placeholder="Select foundation type"
              value={options.find(
                (option) => option.value === structure.foundationType
              )}
              onChange={(selectedOption) =>
                setStructure((prevStructure) => ({
                  ...prevStructure,
                  foundationType: selectedOption.value,
                }))
              }
            />
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
};

const PropertyForm = () => {
  const [structures, setStructures] = useState([{}]);
  const [appraisersRecord, setAppraisersRecord] = useState({
    expertNote: "",
    topographicMapNote: "",
  });

  const addStructure = () => {
    setStructures([...structures, {}]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppraisersRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
  };

  const handleQuillChange = (value, field) => {
    setAppraisersRecord((prevRecord) => ({
      ...prevRecord,
      [field]: value,
    }));
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Box pb={"10"}>
      <Heading as="h2" size="lg" mb={4}>
        Property Background
      </Heading>
      {structures.map((structure, index) => (
        <Fragment key={index}>
          <Heading size={"md"} as={"h4"} mb={4}>
            Structure {index + 1}{" "}
          </Heading>
          <FormStructure />
        </Fragment>
      ))}
     <HStack         alignItems={'end'}
        justifyContent={'end'}>
     <Button
        onClick={addStructure}
        bg="black"
        _hover={{ bg: "gray.700" }}
        color="white"
        rounded="md"
        ml="auto"
        pr="4"
        mt={2}
        alignSelf={'end'}
        justifySelf={'end'}
        mb={4}
        marginRight={0}
      >
        Add Structure
      </Button>
     </HStack>

      <Heading as="h2" size="lg" mt={8} mb={4}>
        Property Appraiser's Record
      </Heading>

      <div>
        <FormLabel>Topographic Map Note</FormLabel>
        <HStack alignItems={"center"} justifyContent={"center"}>
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

        <FormControl mb={4} minH={"200px"} isRequired>
          <ReactQuill
            modules={quillModules}
            placeholder="React Quill"
            style={{ height: "150px" }}
          />
        </FormControl>
      </div>

      <div>
        <FormLabel>Topographic Map Note</FormLabel>
        <HStack alignItems={"center"} justifyContent={"center"}>
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
        <FormControl mb={4} minH={"200px"} isRequired>
          <ReactQuill
            modules={quillModules}
            placeholder="React Quill"
            style={{ height: "150px" }}
          />
        </FormControl>
      </div>
    </Box>
  );
};

export default PropertyForm;
