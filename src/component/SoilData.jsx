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

function SoilData() {

  return (
    <Box p="4">
      <Heading as="h2" size="xl">
      Soil Data 
            </Heading>

      <Box w="100%" my="8">

        <FormControl mb={4} isRequired height={"200px"}>
          <ReactQuill
            modules={quillModules}
            placeholder={`In order to understand the latent soil conditions surrounding the subject property and the effects of water on the foundation soils, we researched the soil profile as documented by the United States Department of Agriculture (USDA) and the National Resources Conservation Service (NRCS) soil survey website of
            http://websoilsurvey.nrcs.usda.gov/app/. We noted that the soil profile for the subject property location was listed as “very limited” for dwellings on XXXX (Figure X). The limitations of the soil profile were the result of the XXX type of soil. We noted that the limitations of the soil profile were the result of high shrink-swell potential.`}
            style={{ height: "150px", fontSize: "12px" }}
          />
        </FormControl>
      </Box>
    </Box>
  );
}

export default SoilData;
