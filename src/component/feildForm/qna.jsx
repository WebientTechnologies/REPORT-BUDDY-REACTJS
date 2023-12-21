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
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateQnaData } from "../../redux/actions/formDataAction";

function InterviewQnAComponent({ setForm, form }) {
  // State to store Q&A data
  const qna = form.qna;
  const addStructure = () => {
    // Create a new structure object with additional properties
    const newStructure = {
      name: "",
      buildDate: "",
      roofReplacementDate: "",
      exteriorDamageDescription: "",
      exteriorDamageNotes: "",
      roofDamageDescription: "",
      roofNotes: "",
      rooms: [
        {
          name: "",
          damages: [
            {
              location: "",
              atticAccessInfo: "",
              notes: "",
            },
          ],
        },
      ],
    };

    // Dispatch the action to update Q&A data in Redux
    setForm((prevForm) => ({
      ...prevForm,
      qna: {
        ...prevForm.qna,
        structures: [...prevForm.qna.structures, newStructure],
      },
    }));
  };

  const addRoomToStructure = (structureIndex) => {
    // Create a new room object with additional properties
    const newRoom = {
      name: "",
      damages: [
        {
          location: "",
          atticAccessInfo: "",
          notes: "",
        },
      ],
    };

    // Dispatch the action to update Q&A data in Redux
    setForm((prevForm) => ({
      ...prevForm,
      qna: {
        ...prevForm.qna,
        structures: prevForm.qna.structures.map((structure, index) =>
          index === structureIndex
            ? { ...structure, rooms: [...structure.rooms, newRoom] }
            : structure
        ),
      },
    }));
  };

  // Function to add a new damage item to a room/area
  // Assuming you have a state variable for form data and a function to update it

  const addDamageToRoom = (structureIndex, roomIndex) => {
    const newDamageItem = {
      location: "", // Example: Add damage location
      atticAccessInfo: "", // Example: Add attic access information
      notes: "", // Example: Add notes
    };
    debugger;

    if (!qna || !qna.structures || !qna.structures[structureIndex] || !qna.structures[structureIndex].rooms) {
      console.log(!qna , !qna.structure ,!qna.structures[structureIndex] , !qna.structures[structureIndex].rooms)
      return;
    }
    
    let updatedFormData = {
      ...form,
    };


  const   updatedDamages = [...qna?.structures[structureIndex]?.rooms[roomIndex]?.damages,newDamageItem];

  updatedFormData.qna.structures[structureIndex].rooms[roomIndex].damages = updatedDamages;
    setForm(updatedFormData);
  };

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
        {form.qna.questions.map((question, questionIndex) => (
          <Box key={questionIndex} w="100%">
            <Text>{question.label}</Text>
            <Input
              type={question.type}
              value={question.type === "file" ? undefined : question.answer}
              onChange={(e) => {
                if (question.type === "file") {
                  const selectedFile = e.target.files[0];
                  setForm((prevForm) => ({
                    ...prevForm,
                    qna: {
                      ...prevForm.qna,
                      questions: prevForm.qna.questions.map((q, index) =>
                        index === questionIndex
                          ? { ...q, answer: selectedFile }
                          : q
                      ),
                    },
                  }));
                } else {
                  const updatedQuestions = form.qna.questions.map((q, index) =>
                    index === questionIndex
                      ? { ...q, answer: e.target.value }
                      : q
                  );
                  setForm((prevForm) => ({
                    ...prevForm,
                    qna: {
                      ...prevForm.qna,
                      questions: updatedQuestions,
                    },
                  }));
                }
              }}
            />
          </Box>
        ))}
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
        {qna.structures.map((structure, structureIndex) => (
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
                  <Input
                    type="Date"
                    value={structure.buildDate}
                    onChange={(e) => {
                      const updatedStructures = [...form.qna.structures];
                      updatedStructures[structureIndex].buildDate =
                        e.target.value;

                      setForm((prevForm) => ({
                        ...prevForm,
                        qna: {
                          ...prevForm.qna,
                          structures: updatedStructures,
                        },
                      }));
                    }}
                  />
                </Box>
                <Box
                  w="100%"
                  borderRadius={"10px"}
                  boxShadow="0px 18px 40px 0px #7090B01F"
                  p={3}
                >
                  <Text>When was the roof last replaced?</Text>
                  <Input
                    type="date"
                    value={structure.roofReplacementDate}
                    onChange={(e) => {
                      const updatedStructures = [...form.qna.structures];
                      updatedStructures[structureIndex].roofReplacementDate =
                        e.target.value;

                      setForm((prevForm) => ({
                        ...prevForm,
                        qna: {
                          ...prevForm.qna,
                          structures: updatedStructures,
                        },
                      }));
                    }}
                  />
                </Box>
                <Box
                  w="100%"
                  borderRadius={"10px"}
                  boxShadow="0px 18px 40px 0px #7090B01F"
                  p={3}
                >
                  <Text>Interior damage general information</Text>
                  <ReactSelect
                    options={interiorDamageOptions.map((i) => ({
                      label: i,
                      value: i,
                    }))}
                    placeholder="Select interior damage type"
                    isSearchable={false}
                    value={{
                      label: structure.interiorDamageGeneralInfo,
                      value: structure.interiorDamageGeneralInfo,
                    }}
                    onChange={(selectedOption) => {
                      setForm((prevForm) => {
                        const updatedStructures = [...prevForm.qna.structures];
                        updatedStructures[
                          structureIndex
                        ].interiorDamageGeneralInfo = selectedOption.value;

                        return {
                          ...prevForm,
                          qna: {
                            ...prevForm.qna,
                            structures: updatedStructures,
                          },
                        };
                      });
                    }}
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
                    <FormControl mb={4} isRequired height={"200px"}>
                      <ReactQuill
                        modules={quillModules}
                        placeholder={`1. Which items were damaged? 
      2. When were they installed? 
      3. When was the damage first noticed?
      4. Which specific items were repaired or replaced and when?`}
                        style={{ height: "150px", fontSize: "12px" }}
                        value={structure.exteriorDamageDescription}
                        onChange={(value) => {
                          setForm((prevForm) => {
                            const updatedStructures = [
                              ...prevForm.qna.structures,
                            ];
                            updatedStructures[
                              structureIndex
                            ].exteriorDamageDescription = value;

                            return {
                              ...prevForm,
                              qna: {
                                ...prevForm.qna,
                                structures: updatedStructures,
                              },
                            };
                          });
                        }}
                      />
                    </FormControl>

                    <Box
                      w="100%"
                      borderRadius={"10px"}
                      boxShadow="0px 18px 40px 0px #7090B01F"
                      p={3}
                    >
                      <Text>Notes</Text>
                      <Input
                        type="text"
                        placeholder={"Notes"}
                        value={structure.exteriorDamageNotes}
                        onChange={(e) => {
                          const value = e.target.value;
                          setForm((prevForm) => {
                            const updatedStructures = [
                              ...prevForm.qna.structures,
                            ];
                            updatedStructures[
                              structureIndex
                            ].exteriorDamageNotes = value;

                            return {
                              ...prevForm,
                              qna: {
                                ...prevForm.qna,
                                structures: updatedStructures,
                              },
                            };
                          });
                        }}
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
                      <ReactQuill
                        modules={quillModules}
                        placeholder={`1. Which areas were damaged?
 2. When were they installed?
 3. When was each area of damage first noticed?
 4. Which specific items were repaired or replaced and when?`}
                        style={{ height: "150px" }}
                        value={structure.roofDamageDescription}
                        onChange={(value) => {
                          setForm((prevForm) => {
                            const updatedStructures = [
                              ...prevForm.qna.structures,
                            ];
                            updatedStructures[
                              structureIndex
                            ].roofDamageDescription = value;

                            return {
                              ...prevForm,
                              qna: {
                                ...prevForm.qna,
                                structures: updatedStructures,
                              },
                            };
                          });
                        }}
                      />
                    </FormControl>
                    <Box
                      w="100%"
                      borderRadius={"10px"}
                      boxShadow="0px 18px 40px 0px #7090B01F"
                      p={3}
                    >
                      <Text>Notes</Text>
                      <Input
                        placeholder={"Notes"}
                        type="text"
                        value={structure.roofNotes}
                        onChange={(e) => {
                          const value = e.target.value;
                          setForm((prevForm) => {
                            const updatedStructures = [
                              ...prevForm.qna.structures,
                            ];
                            updatedStructures[structureIndex].roofNotes = value;

                            return {
                              ...prevForm,
                              qna: {
                                ...prevForm.qna,
                                structures: updatedStructures,
                              },
                            };
                          });
                        }}
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
                            <ReactSelect
                              placeholder="Select room/area"
                              isSearchable={false}
                              options={roomAreaOptions.map((i) => ({
                                label: i,
                                value: i,
                              }))}
                              value={{ label: room.name, value: room.name }} // Add the value prop
                              onChange={(selectedOption) => {
                                // Add your onChange logic here to update the state
                                // For example, if using setForm:
                                setForm((prevForm) => {
                                  const updatedForm = { ...prevForm };
                                  updatedForm.qna.structures[
                                    structureIndex
                                  ].rooms[roomIndex].name =
                                    selectedOption.value;
                                  return updatedForm;
                                });
                              }}

                              // Add your onChange logic here
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
                                    <ReactSelect
                                      placeholder="Select damage location"
                                      isSearchable={false}
                                      options={damageLocationOptions.map(
                                        (i) => ({ label: i, value: i })
                                      )}
                                      value={
                                        damage.location && {
                                          label: damage.location,
                                          value: damage.location,
                                        }
                                      } // Add the value prop
                                      onChange={(selectedOption) => {
                                        // Add your onChange logic here to update the state
                                        // For example, if using setForm:
                                        setForm((prevForm) => {
                                          const updatedForm = { ...prevForm };
                                          updatedForm.qna.structures[
                                            structureIndex
                                          ].rooms[roomIndex].damages[
                                            damageIndex
                                          ].location = selectedOption.value;
                                          return updatedForm;
                                        });
                                      }}
                                    />
                                  </Box>
                                  <Box
                                    w="100%"
                                    borderRadius={"10px"}
                                    boxShadow="0px 18px 40px 0px #7090B01F"
                                    p={3}
                                  >
                                    <Text>Attic access information</Text>
                                    <ReactSelect
                                      placeholder="Select attic access information"
                                      isSearchable={false}
                                      options={atticAccessOptions.map((i) => ({
                                        label: i,
                                        value: i,
                                      }))}
                                      value={
                                        damage.atticAccessInfo && {
                                          label: damage.atticAccessInfo,
                                          value: damage.atticAccessInfo,
                                        }
                                      } // Add the value prop
                                      onChange={(selectedOption) => {
                                        // Add your onChange logic here to update the state
                                        // For example, if using setForm:
                                        setForm((prevForm) => {
                                          const updatedForm = { ...prevForm };
                                          updatedForm.qna.structures[
                                            structureIndex
                                          ].rooms[roomIndex].damages[
                                            damageIndex
                                          ].atticAccessInfo =
                                            selectedOption.value;
                                          return updatedForm;
                                        });
                                      }}
                                    />
                                  </Box>
                                  <Box w="100%">
                                    <Text>Notes</Text>
                                    <Input
                                      type="text"
                                      value={damage.notes} // Add the value prop
                                      onChange={(e) => {
                                        // Add your onChange logic here to update the state
                                        // For example, if using setForm:
                                        setForm((prevForm) => {
                                          const updatedForm = { ...prevForm };
                                          updatedForm.qna.structures[
                                            structureIndex
                                          ].rooms[roomIndex].damages[
                                            damageIndex
                                          ].notes = e.target.value;
                                          return updatedForm;
                                        });
                                      }}
                                    />
                                  </Box>
                                </AccordionPanel>
                              </AccordionItem>
                            ))}
                          </Accordion>
                          <Button
                            bg="black"
                            _hover={{ bg: "gray.700" }}
                            color="white"
                            rounded="md"
                            ml={"auto"}
                            onClick={() =>
                              addDamageToRoom(structureIndex, roomIndex)
                            }
                          >
                            <AddIcon fontSize={"md"} mr={1} /> Damage
                          </Button>
                        </VStack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                ))}
                <Button
                  bg="black"
                  _hover={{ bg: "gray.700" }}
                  color="white"
                  rounded="md"
                  ml={"auto"}
                  onClick={() => addRoomToStructure(structureIndex)}
                >
                  <AddIcon fontSize={"md"} mr={1} /> Room/Area
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <HStack alignItems={"end"}>
        <Button
          bg="black"
          _hover={{ bg: "gray.700" }}
          color="white"
          rounded="md"
          ml={"auto"}
          onClick={addStructure}
        >
          <AddIcon fontSize={"md"} mr={1} /> Structure
        </Button>
      </HStack>
    </Box>
  );
}

export default InterviewQnAComponent;
