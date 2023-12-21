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
} from "../data";
import ReactSelect from "react-select";
import InputChange from "./Utils/InputChange";

function InterviewQnAComponent({
  getForm,
  setCommentFelid,
  setLogFelid,
  getFormData,
}) {
  // State to store Q&A data
  const interviewStructure = getForm?.interviewStructure;
  const { propertyPurchasedTime, dolPerInterviewee, interviewRecord } =
    getForm || {};
  return (
    <Box p="4">
      <Heading as="h3" fontWeight={500} textAlign="center" size="xl">
        Interview Q&A
      </Heading>

      {/* Display questions */}
      <VStack
        mb={6}
        spacing={4}
        align="start"
        gap={4}
        borderRadius={"10px"}
        boxShadow="0px 18px 40px 0px #7090B01F"
        p={3}
      >
        <Box w="100%">
          <Text>When was the property purchased?</Text>
          <InputChange
            inputType={"text"}
            setCommentFelid={setCommentFelid}
            setLogFelid={setLogFelid}
            getFormData={getFormData}
            defaultValue={propertyPurchasedTime}
            fieldName="propertyPurchasedTime"
            height="150px"
            placeholder="When was the property purchased?"
          />
        </Box>

        <Box w="100%">
          <Text>dol Per the Interviewee?</Text>
          <InputChange
            inputType={"text"}
            setCommentFelid={setCommentFelid}
            setLogFelid={setLogFelid}
            getFormData={getFormData}
            defaultValue={dolPerInterviewee}
            fieldName="dolPerInterviewee"
            height="150px"
            placeholder="dol Per the Interviewee?"
          />
        </Box>
        <Box w="100%">
          <Text>Interview Recording</Text>
          <InputChange
            inputType={"text"}
            setCommentFelid={setCommentFelid}
            setLogFelid={setLogFelid}
            getFormData={getFormData}
            defaultValue={interviewRecord}
            fieldName="interviewRecord"
            height="150px"
            placeholder="Interview Recording?"
          />
        </Box>
      </VStack>

      <Heading
        as="h3"
        fontWeight={500}
        textAlign="center"
        size="lg"
        my={2}
        mt={5}
      >
        Structures
      </Heading>

      {/* Display structures */}
      <Accordion defaultIndex={[0]} allowMultiple>
        {interviewStructure?.map((structure, structureIndex) => (
          <AccordionItem key={structureIndex} my={2}>
            <AccordionButton
              bgColor={"blackAlpha.50"}
              _expanded={{ bg: "blackAlpha.600", color: "white" }}
            >
              <Box flex="1" textAlign="left">
                Structure {structureIndex + 1}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p="0">
              <VStack spacing={4} align="start" w="100%">
                <Box
                  w="100%"
                  borderRadius={"10px"}
                  boxShadow="0px 18px 40px 0px #7090B01F"
                  p={3}
                >
                  <Text>When was the structure built?</Text>
                  <InputChange
                    inputType={"date"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
                    getFormData={getFormData}
                    defaultValue={structure.buildDate}
                    fieldName={`interviewStructure.${structureIndex}.buildDate`}
                    height="150px"
                    placeholder=""
                  />
                </Box>
                <Box
                  w="100%"
                  borderRadius={"10px"}
                  boxShadow="0px 18px 40px 0px #7090B01F"
                  p={3}
                >
                  <Text>When was the roof last replaced?</Text>
                  <InputChange
                    inputType={"date"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
                    getFormData={getFormData}
                    defaultValue={structure.roofReplacementDate}
                    fieldName={`interviewStructure.${structureIndex}.roofReplacementDate`}
                    height="150px"
                    placeholder=""
                  />
                </Box>
                <Box
                  w="100%"
                  borderRadius={"10px"}
                  boxShadow="0px 18px 40px 0px #7090B01F"
                  p={3}
                >
                  <Text>Interior damage general information</Text>
                  <InputChange
                    inputType={"select"}
                    setCommentFelid={setCommentFelid}
                    setLogFelid={setLogFelid}
                    getFormData={getFormData}
                    options={interiorDamageOptions.map((i) => ({
                      label: i,
                      value: i,
                    }))}
                    fieldName={`interviewStructure.${structureIndex}.interiorDamageGeneralInfo`}
                    height="150px"
                    defaultValue={{
                      label: structure.interiorDamageGeneralInfo,
                      value: structure.interiorDamageGeneralInfo,
                    }}
                    placeholder="Select interior damage type"
                  />
                </Box>

                <SimpleGrid
                  columns={[1, 2]}
                  gap={4}
                  borderRadius={"10px"}
                  boxShadow="0px 18px 40px 0px #7090B01F"
                  p={3}
                >
                  <Box w="100%">
                    <Heading as="h6" size="sm" mb={2}>
                      Exterior
                    </Heading>
                    <FormControl mb={4} isRequired height={"250px"}>
                      <InputChange
                        inputType={"quill"}
                        setCommentFelid={setCommentFelid}
                        setLogFelid={setLogFelid}
                        getFormData={getFormData}
                        fieldName={`interviewStructure.${structureIndex}.exteriorDamageDescription`}
                        height="150px"
                        defaultValue={structure.exteriorDamageDescription}
                        modules={quillModules}
                        placeholder={`1. Which items were damaged? 
      2. When were they installed? 
      3. When was the damage first noticed?
      4. Which specific items were repaired or replaced and when?`}
                      />
                    </FormControl>

                    <Box
                      w="100%"
                      borderRadius={"10px"}
                      boxShadow="0px 18px 40px 0px #7090B01F"
                      p={3}
                    >
                      <Text>Notes</Text>

                      <InputChange
                        inputType={"text"}
                        setCommentFelid={setCommentFelid}
                        setLogFelid={setLogFelid}
                        getFormData={getFormData}
                        fieldName={`interviewStructure.${structureIndex}.exteriorDamageNotes`}
                        height="150px"
                        defaultValue={structure.exteriorDamageNotes}
                        modules={quillModules}
                        placeholder={"Notes"}
                      />
                    </Box>
                  </Box>
                  <Box
                    w="100%"
                    borderRadius={"10px"}
                    boxShadow="0px 18px 40px 0px #7090B01F"
                    p={3}
                  >
                    <Heading as="h6" size="sm" mb={2}>
                      Roof
                    </Heading>
                    <FormControl mb={4} isRequired height={"200px"}>
                      <InputChange
                        inputType={"quill"}
                        setCommentFelid={setCommentFelid}
                        setLogFelid={setLogFelid}
                        getFormData={getFormData}
                        fieldName={`interviewStructure.${structureIndex}.roofDamageDescription`}
                        height="150px"
                        defaultValue={structure.roofDamageDescription}
                        modules={quillModules}
                        placeholder={`1. Which areas were damaged?
                        2. When were they installed?
                        3. When was each area of damage first noticed?
                        4. Which specific items were repaired or replaced and when?`}
                      />
                    </FormControl>
                    <Box
                      w="100%"
                      borderRadius={"10px"}
                      boxShadow="0px 18px 40px 0px #7090B01F"
                      p={3}
                    >
                      <Text>Notes</Text>

                      <InputChange
                        inputType={"text"}
                        setCommentFelid={setCommentFelid}
                        setLogFelid={setLogFelid}
                        getFormData={getFormData}
                        fieldName={`interviewStructure.${structureIndex}.roofNotes`}
                        height="150px"
                        defaultValue={structure.roofNotes}
                        modules={quillModules}
                        placeholder={"Notes"}
                      />
                    </Box>
                  </Box>
                </SimpleGrid>

                {structure.rooms?.map((room, roomIndex) => (
                  <Accordion
                    defaultIndex={[0]}
                    allowMultiple
                    key={roomIndex}
                    w={"full"}
                    gap={4}
                    p="0"
                  >
                    <AccordionItem my={2}>
                      <AccordionButton
                        bgColor={"blackAlpha.50"}
                        _expanded={{ bg: "blackAlpha.600", color: "white" }}
                      >
                        <Box flex="1" textAlign="left">
                          Room/Area {roomIndex + 1}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel p="0">
                        <VStack spacing={4} align="start" w="100%">
                          <Box
                            w="100%"
                            borderRadius={"10px"}
                            boxShadow="0px 18px 40px 0px #7090B01F"
                            p={3}
                          >
                            <Text>Select Room/Area {roomIndex + 1}</Text>
                            <InputChange
                              inputType={"select"}
                              setCommentFelid={setCommentFelid}
                              setLogFelid={setLogFelid}
                              getFormData={getFormData}
                              fieldName={`interviewStructure.${structureIndex}.room.${roomIndex}.name`}
                              height="150px"
                              defaultValue={{
                                label: room.name,
                                value: room.name,
                              }}
                              modules={quillModules}
                              placeholder="Select room/area"
                              options={roomAreaOptions.map((i) => ({
                                label: i,
                                value: i,
                              }))}
                            />
                          </Box>
                          <Accordion allowMultiple w="full" p="0">
                            {room.damages.map((damage, damageIndex) => (
                              <AccordionItem key={damageIndex}>
                                <AccordionButton
                                  bgColor={"blackAlpha.50"}
                                  _expanded={{
                                    bg: "blackAlpha.600",
                                    color: "white",
                                  }}
                                >
                                  <Box flex="1" textAlign="left">
                                    Damage #{damageIndex + 1}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel
                                  p="0"
                                  display="flex"
                                  gap={[2, 4]}
                                  w="full"
                                  alignItems={"start"}
                                  flexDir={"column"}
                                >
                                  <Box
                                    w="100%"
                                    borderRadius={"10px"}
                                    boxShadow="0px 18px 40px 0px #7090B01F"
                                    p={3}
                                  >
                                    <Text>Damage location</Text>
                                    <InputChange
                                      inputType={"select"}
                                      setCommentFelid={setCommentFelid}
                                      setLogFelid={setLogFelid}
                                      getFormData={getFormData}
                                      fieldName={`interviewStructure.${structureIndex}.room.${roomIndex}.damages.${damageIndex}.location`}
                                      height="150px"
                                      defaultValue={{
                                        label: damage.location,
                                        value: damage.location,
                                      }}
                                      modules={quillModules}
                                      placeholder="Select damage location"
                                      options={damageLocationOptions.map(
                                        (i) => ({
                                          label: i,
                                          value: i,
                                        })
                                      )}
                                    />
                                  </Box>
                                  <Box
                                    w="100%"
                                    borderRadius={"10px"}
                                    boxShadow="0px 18px 40px 0px #7090B01F"
                                    p={3}
                                  >
                                    <Text>Attic access information</Text>

                                    <InputChange
                                      inputType={"select"}
                                      setCommentFelid={setCommentFelid}
                                      setLogFelid={setLogFelid}
                                      getFormData={getFormData}
                                      fieldName={`interviewStructure.${structureIndex}.room.${roomIndex}.damages.${damageIndex}.atticAccessInfo`}
                                      height="150px"
                                      defaultValue={{
                                        label: damage.atticAccessInfo,
                                        value: damage.atticAccessInfo,
                                      }}
                                      modules={quillModules}
                                      placeholder="Select attic access information"
                                      options={atticAccessOptions.map((i) => ({
                                        label: i,
                                        value: i,
                                      }))}
                                    />
                                  </Box>
                                  <Box w="100%">
                                    <Text>Notes</Text>

                                    <InputChange
                                      inputType={"text"}
                                      setCommentFelid={setCommentFelid}
                                      setLogFelid={setLogFelid}
                                      getFormData={getFormData}
                                      fieldName={`interviewStructure.${structureIndex}.room.${roomIndex}.damages.${damageIndex}.notes`}
                                      defaultValue={damage.notes} // Add the value prop
                                      placeholder="Notes..."
                                    />
                                  </Box>
                                </AccordionPanel>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default InterviewQnAComponent;
