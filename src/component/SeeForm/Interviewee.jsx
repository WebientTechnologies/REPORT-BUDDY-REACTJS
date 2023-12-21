import React from "react";
import {
  Box,
  FormControl,
  Input,
  Button,
  Heading,
  SimpleGrid,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
} from "@chakra-ui/react";
import "react-quill/dist/quill.snow.css";
import ReactSelect from "react-select";
import { FormLabel } from "@chakra-ui/react";
import InputChange from "./Utils/InputChange";

const contactMethodOptions = [
  { value: "present", label: "Present at Site" },
  { value: "phone", label: "Via Phone" },
  { value: "video", label: "Via Video" },
  { value: "none", label: "No One Present" },
];

const titleOptions = [
  { value: "mr", label: "Mr." },
  { value: "mrs", label: "Mrs." },
  { value: "miss", label: "Miss" },
];

const roofingOptions = [
  "Roofing Contract",
  "General Contract",
  "Mitigation Contract",
  "Owner Leak Detection Company",
  "Plumber",
  "Electrician",
  "Public Adjuster",
  "PA Estimator",
  "PA",
  "Intern",
  "Loss Consultant",
  "Owner Attorney",
  "Attorney Representative",
  "Paralegal",
];

const interviewSignificanceOptions = [
  { value: "provided_access", label: "Interviewee Provided Access" },
  { value: "provided_info", label: "Interviewee Provided Info" },
  { value: "access_and_info", label: "Interviewee Provided Access and Info" },
];

function Interviewee({ setLogFelid, setCommentFelid, getForm ,getFormData}) {
  const interviewees = getForm?.interviewee;
  // console.log(interviewees[0])

  return (
    <Box>
      <Heading as="h2" fontWeight={500} textAlign="center" size="xl" mb={4}>
        Interviewee
      </Heading>

      <Accordion allowToggle>
        {interviewees?.map((interview, index) => (
          <AccordionItem key={interview._id}>
            <h2>
              <AccordionButton
                bgColor={"blackAlpha.50"}
                _expanded={{ bg: "blackAlpha.600", color: "white" }}
              >
                <Box flex="1" textAlign="left" fontWeight={"bold"}>
                  {index + 1} Interviewee
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <SimpleGrid
                columns={[1, 2]}
                columnGap={4}
                rowGap={2}
                borderRadius={"10px"}
                boxShadow="0px 18px 40px 0px #7090B01F"
                p={3}
              >

                {/* Contact Method */}
                <FormControl isRequired>
                  <FormLabel>Contact Method</FormLabel>
                  <InputChange
                    inputType={"select"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
getFormData= {getFormData}
                    options={contactMethodOptions}
                    defaultValue={contactMethodOptions.find(
                      (option) => option.value === interview.contactMethod
                    )}
                    fieldName={`interviewee.${index}.contactMethod`}
                    placeholder="Select Contact Method"
                  />
                </FormControl>

                {/* Personal Information */}
                <FormControl isRequired mt={4}>
                  <FormLabel>Title</FormLabel>
                  <InputChange
                    inputType={"select"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
getFormData= {getFormData}
                    options={titleOptions}
                    defaultValue={titleOptions.find(
                      (option) => option.value === interview.title
                    )}
                    fieldName={`interviewee.${index}.title`}
                    placeholder="Select Mr. / Ms."
                  />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>First Name</FormLabel>
                  <InputChange
                    inputType={"text"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
getFormData= {getFormData}
                    options={titleOptions}
                    defaultValue={interview.firstName}
                    fieldName={`interviewee.${index}.firstName`}
                    placeholder="Enter First Name"
                  />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Last Name</FormLabel>
                  <InputChange
                    inputType={"text"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
getFormData= {getFormData}
                    options={roofingOptions.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    defaultValue={interview.lastName}
                    fieldName={`interviewee.${index}.lastName`}
                    placeholder="Select Roofing Contract"
                  />
                </FormControl>

                {/* Roofing Contract */}
                <FormControl isRequired mt={4}>
                  <FormLabel>Roofing Contract</FormLabel>
                  <InputChange
                    inputType={"select"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
getFormData= {getFormData}
                    options={roofingOptions.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    defaultValue={{
                      label: roofingOptions.find((option) => {
                        return option == interview.roofingContract
                          ? { value: option, label: option }
                          : false;
                      }),
                      value: roofingOptions.find((option) => {
                        return option == interview.roofingContract
                          ? { value: option, label: option }
                          : false;
                      }),
                    }}
                    fieldName={`interviewee.${index}.roofingContract`}
                    placeholder="Select Roofing Contract"
                  />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel for="companyName">Company Name</FormLabel>
                  <InputChange
                    inputType={"text"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
getFormData= {getFormData}
                    defaultValue={interview.companyName}
                    fieldName={`interviewee.${index}.companyName`}
                    placeholder="Enter Company Name"
                  />
                </FormControl>

                {/* Interview Significance */}
                <FormControl mt={4} isRequired>
                  <FormLabel>Interviewee Significance</FormLabel>
                  <InputChange
                    inputType={"select"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
getFormData= {getFormData}
                    options={interviewSignificanceOptions}
                    defaultValue={interviewSignificanceOptions.find(
                      (option) =>
                        option.value === interview.interviewSignificance
                    )}
                    fieldName={`interviewee.${index}.interviewSignificance`}
                    placeholder="Select Interviewee Significance"
                  />
                </FormControl>

                {/* Document Uploads */}
                <FormControl mt={4} isRequired>
                  <FormLabel>Business Card Front</FormLabel>
                  <Input
                    placeholder="Upload Business Card Front"
                    type="file"
                    accept="image/*"
                    required
                    isRequired
                  />
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel>Business Card Back</FormLabel>
                  <Input
                    placeholder="Upload Business Card Back"
                    type="file"
                    accept="image/*"
                    required
                    isRequired
                  />
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel>Other Document</FormLabel>
                  <Input
                    placeholder="Upload Other Document"
                    type="file"
                    accept="image/*"
                    required
                    isRequired
                  />
                </FormControl>
              </SimpleGrid>
              <Divider my={4} />
              <Divider my={4} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default Interviewee;
