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
  FormLabel,
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

function HistoricalImageryReview() {

  return (
    <Box p="4">
      <Heading as="h2" fontWeight={500} textAlign='center' size="xl">
        Historical Imagery Review
      </Heading>
      <Box w="100%" my="8">
        <Heading as="h6" fontWeight={500} textAlign='center' size="sm" my={2}>
          Aerial Images
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

        <FormControl mb={4} isRequired height={"200px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <ReactQuill
            modules={quillModules}
            placeholder={`State in a bullet point format the particularly noteworthy items from the image.`}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
      <Box w="100%" my="8">
        <Heading as="h6" size="sm" fontWeight={500} textAlign='center' my={2}>
          Realtor.com Images
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

        <FormControl mb={4} isRequired height={"200px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <ReactQuill
            modules={quillModules}
            placeholder={`State in a bullet point format the particularly noteworthy items from the image. `}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
      <Box w="100%" my="8">
        <Heading as="h6" textAlign='center' fontWeight={500} size="sm" my={2}>
          Zillow.com Images
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

        <FormControl mb={4} isRequired height={"200px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <ReactQuill
            modules={quillModules}
            placeholder={`State in a bullet point format the particularly noteworthy items from the image. `}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
      <Box w="100%" my="8">
        <Heading as="h6" fontWeight={500} textAlign='center' size="sm" my={2}>
          Redfin.com Images
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

        <FormControl mb={4} isRequired height={"200px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <ReactQuill
            modules={quillModules}
            placeholder={`State in a bullet point format the particularly noteworthy items from the image. `}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
    </Box>
  );
}

export default HistoricalImageryReview;
