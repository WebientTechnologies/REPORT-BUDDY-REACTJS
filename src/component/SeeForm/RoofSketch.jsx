import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  Text,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import InputChange from "./Utils/InputChange";

function FieldSketchesComponent({ setLogFelid, setCommentFelid, getForm ,getFormData}) {
  // State to store field sketches data

  const sketches = getForm?.sketches;
  console.log({ sketches });
  return (
    <Box>
      <Heading as="h3" fontWeight={500} textAlign="center" size="lg" mb={4}>
        Field Sketches
      </Heading>
      <Box>
        {/* Interior Damage Sketch sub heading */}
        <Heading as="h3" fontWeight={500} textAlign="center" size="md" mb={2}>
          Interior Damage Sketch
        </Heading>

        {/* Image input for interior damage sketch */}
        <FormControl
          mb={4}
          borderRadius={"10px"}
          boxShadow="0px 18px 40px 0px #7090B01F"
          p={3}
        >
          <Text mb={2}>
            Click here to upload a sketch showing the locations of the damages.
          </Text>

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
        </FormControl>

        {/* Text input with placeholder for interior damage sketch notes */}
        <FormControl
          mb={4}
          borderRadius={"10px"}
          boxShadow="0px 18px 40px 0px #7090B01F"
          p={3}
        >
          <Text mb={2}>Experts to add notes, as suitable.</Text>
          <InputChange
            inputType={"text"}
            setCommentFelid={setCommentFelid}
            setLogFelid={setLogFelid}
getFormData= {getFormData}
            defaultValue={sketches?.interiorDamageSketch}
            fieldName="sketches.interiorDamageSketch"
            height="150px"
            placeholder="Add notes..."
          />
        </FormControl>

        {/* Roof Sketch sub heading */}
        <Heading as="h3" fontWeight={500} textAlign="center" size="md" mb={2}>
          Roof Sketch
        </Heading>

        {/* Image input for roof sketch */}
        <FormControl
          mb={4}
          borderRadius={"10px"}
          boxShadow="0px 18px 40px 0px #7090B01F"
          p={3}
        >
          <Text mb={2}>
            Click here to upload a sketch showing the locations of the damages.
          </Text>

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
        </FormControl>

        {/* Text input with placeholder for roof sketch notes */}
        <FormControl
          mb={4}
          borderRadius={"10px"}
          boxShadow="0px 18px 40px 0px #7090B01F"
          p={3}
        >
          <Text mb={2}>Experts to add notes, as suitable.</Text>

          <InputChange
            inputType={"text"}
            setCommentFelid={setCommentFelid}
            setLogFelid={setLogFelid}
getFormData= {getFormData}
            defaultValue={sketches?.roofSketch}
            fieldName="sketches.roofSketch"
            height="150px"
            placeholder="Add notes..."
          />
        </FormControl>
      </Box>
    </Box>
  );
}

export default FieldSketchesComponent;
