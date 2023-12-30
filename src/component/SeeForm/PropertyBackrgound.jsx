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
import { useDispatch, useSelector } from "react-redux";
import "react-quill/dist/quill.snow.css";
import { quillModules } from "../data";
import { updatePropertyData } from "../../redux/actions/formDataAction";
import InputChange from "./Utils/InputChange";

const FormStructure = ({ index, getForm, setLogFelid, setCommentFelid ,getFormData}) => {
  const dispatch = useDispatch();
  const structures = getForm.propertyData.structures;

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Box marginBottom="20px">
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={4}
        mb={4}
        borderRadius={"10px"}
        boxShadow="0px 18px 40px 0px #7090B01F"
        p={3}
      >
                <GridItem colSpan={1}>
          <FormControl required isRequired>
            <FormLabel>Building Type</FormLabel>
            <InputChange
              inputType={"select"}
              setCommentFelid={setCommentFelid}
              setLogFelid={setLogFelid}
getFormData= {getFormData}
              options={options}
              defaultValue={options.find(
                (option) => option.value === structures[index].buildingType || ""
              )}
              fieldName={`propertyData.structures.${index}.buildingType`}
              placeholder="Select construction type"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl required isRequired>
            <FormLabel>Number of Stories</FormLabel>

            <InputChange
              inputType={"number"}
              setCommentFelid={setCommentFelid}
              setLogFelid={setLogFelid}
getFormData= {getFormData}
              defaultValue={structures[index].numberOfStories || ""}
              fieldName={`propertyData.structures.${index}.numberOfStories`}
              placeholder="Enter number of stories"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl required isRequired>
            <FormLabel>Story Location</FormLabel>

            <InputChange
              inputType={"text"}
              setCommentFelid={setCommentFelid}
              setLogFelid={setLogFelid}
getFormData= {getFormData}
              defaultValue={structures[index].storyBySubLoc || ""}
              fieldName={`propertyData.structures.${index}.storyBySubLoc`}
              placeholder="Enter story # where the subject unit is located"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl required isRequired>
            <FormLabel>Construction Type</FormLabel>
            <InputChange
              inputType={"select"}
              setCommentFelid={setCommentFelid}
              setLogFelid={setLogFelid}
getFormData= {getFormData}
              options={options}
              defaultValue={options.find(
                (option) => option.value === structures[index].constructionType
              )}
              fieldName={`propertyData.structures.${index}.constructionType`}
              placeholder="Select construction type"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl required isRequired>
            <FormLabel>Foundation Type</FormLabel>
            <InputChange
              inputType={"select"}
              setCommentFelid={setCommentFelid}
              setLogFelid={setLogFelid}
getFormData= {getFormData}
              options={options}
              defaultValue={options.find(
                (option) => option.value === structures[index].foundationType
              )}
              fieldName={`propertyData.structures.${index}.foundationType`}
              placeholder="Select foundation type"
            />
          </FormControl>
        </GridItem>
      </Grid>
    </Box>
  );
};

const PropertyForm = ({ getForm, setCommentFelid, setLogFelid,getFormData }) => {
  const structures = getForm?.propertyData?.structures;
  const appraisersRecord = getForm?.propertyData?.appraisersRecord;

  return (
    <Box pb={"10"}>
      <Heading as="h3" textAlign="center" fontWeight={500} size="lg" mb={4}>
        Property Background
      </Heading>

      {structures?.map((structure, index) => (
        <Fragment key={index}>
          <Heading size={"md"} as={"h4"} mb={4}>
            Structure {index + 1}{" "}
          </Heading>
          <FormStructure
            index={index}
            getForm={getForm}
            structure
            setCommentFelid={setCommentFelid}
            setLogFelid={setLogFelid}
getFormData= {getFormData}
          />
        </Fragment>
      ))}

      <Heading
        as="h3"
        fontWeight={500}
        textAlign="center"
        size="lg"
        mt={10}
        mb={4}
      >
        Property Appraiser's Record
      </Heading>
      <HStack
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"10px"}
        boxShadow="0px 18px 40px 0px #7090B01F"
        p={3}
      >
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

      <FormControl
        mb={4}
        minH={"300px"}
        isRequired
        borderRadius={"10px"}
        boxShadow="0px 18px 40px 0px #7090B01F"
        p={3}
        required
      >
        <FormLabel>Property Appraiser Note</FormLabel>
        <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={appraisersRecord?.propertyAppraiserRecord}
          fieldName="propertyData.appraisersRecord.propertyAppraiserRecord"
          height="150px"
          placeholder="Property Appraiser Record"
        />
      </FormControl>

      <Heading
        as="h3"
        fontWeight={500}
        textAlign="center"
        size="lg"
        mt={10}
        mb={4}
      >
        Permit Information's Record
      </Heading>
      <HStack
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"10px"}
        boxShadow="0px 18px 40px 0px #7090B01F"
        p={3}
      >
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

      <FormControl
        mb={4}
        minH={"300px"}
        isRequired
        borderRadius={"10px"}
        boxShadow="0px 18px 40px 0px #7090B01F"
        p={3}
      >
        <FormLabel>Permit Information Note</FormLabel>

        <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={appraisersRecord?.permitInformation}
          fieldName="propertyData.appraisersRecord.permitInformation"
          height="150px"
          placeholder="Permit Information Record"
        />
      </FormControl>

      <Heading
        as="h3"
        fontWeight={500}
        textAlign="center"
        size="lg"
        mt={10}
        mb={4}
      >
        Topographic Map's Record
      </Heading>
      <HStack
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={"10px"}
        boxShadow="0px 18px 40px 0px #7090B01F"
        p={3}
      >
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

      <FormControl
        mb={4}
        minH={"300px"}
        isRequired
        borderRadius={"10px"}
        boxShadow="0px 18px 40px 0px #7090B01F"
        p={3}
        required
      >
        <FormLabel>Topographic Map Note</FormLabel>
        <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={appraisersRecord?.topographicMap}
          fieldName="propertyData.appraisersRecord.topographicMap"
          height="150px"
          placeholder="Topographic Map Record"
        />
      </FormControl>
    </Box>
  );
};

export default PropertyForm;
