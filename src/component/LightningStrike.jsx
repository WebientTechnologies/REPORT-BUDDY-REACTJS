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
} from "./data";
import ReactSelect from "react-select";
import { AddIcon } from "@chakra-ui/icons";

function LightningStrike() {

  return (
    <Box p="4">
      <Heading as="h2" size="xl">
      Lightning Strike Data 
            </Heading>

      <Box w="100%" my="8">

        <FormControl mb={4} isRequired height={"200px"}>
          <ReactQuill
            modules={quillModules}
            placeholder={`We obtained lightning strike and thunderstorm history report for Month Date, Year (the reported date of loss) from the Blitzortung online website of http://en.blitzortung.org. Figure 1 shows a lightning strike map excerpted from this website. This map showed that several lightning strikes were recorded close to the subject property at approximately 1.30 PM Universal Coordinated Time (i.e., 9.30 AM Eastern Standard Time) on Month Date, Year. We also obtained a lightning report for the subject property from Benchmark. This report was prepared for a three-day period from Month Date, Year to Month Date, Year. The closest lightning strike detected on Month Date, Year (the reported date of loss) was 0.1 mile from the subject p `}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
    </Box>
  );
}

export default LightningStrike;
