import React from "react";
import {
  Box,
  Heading,
  FormControl,
} from "@chakra-ui/react";

import InputChange from "./Utils/InputChange";

function SoilData({getForm,setCommentFelid,setLogFelid,getFormData}) {
const soilData = getForm?.soilData;

  return (
    <Box p="4">
      <Heading as="h2" fontWeight={500} textAlign='center' size="xl">
        Soil Data
      </Heading>
      <Box w="100%" my="8">
        <FormControl mb={4} isRequired height={"250px"} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
        <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
          getFormData= {getFormData}
          defaultValue={soilData}
          fieldName="soilData"
          height="150px"
          placeholder={`In order to understand the latent soil conditions surrounding the subject property and the effects of water on the foundation soils, we researched the soil profile as documented by the United States Department of Agriculture (USDA) and the National Resources Conservation Service (NRCS) soil survey website of
          http://websoilsurvey.nrcs.usda.gov/app/. We noted that the soil profile for the subject property location was listed as “very limited” for dwellings on XXXX (Figure X). The limitations of the soil profile were the result of the XXX type of soil. We noted that the limitations of the soil profile were the result of high shrink-swell potential.`}
           />
        </FormControl>
      </Box>
    </Box>
  );
}

export default SoilData;
