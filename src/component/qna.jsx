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

function InterviewQnAComponent() {
  // State to store Q&A data
  const [qna, setQna] = useState({
    questions: [
      {
        label: "When was the property purchased?",
        type: "text",
        answer: "",
      },
      {
        label: "When was the structure built?",
        type: "text",
        answer: "",
      },
      {
        label: "When was the roof last replaced?",
        type: "file",
        answer: "",
      },
    ],
    structures: [
      {
        name: "",
        rooms: [
          {
            name: "",
            damages: [
              {
                type: "",
                description: "",
              },
            ],
          },
        ],
      },
    ],
  });

  // Function to add a new structure
  const addStructure = () => {
    // Create a new structure object
    const newStructure = {
      name: "",
      rooms: [],
    };

    // Add the new structure to the array
    setQna({
      ...qna,
      structures: [...qna.structures, newStructure],
    });
  };

  // Function to add a new room/area to a structure
  const addRoomToStructure = (structureIndex) => {
    // Create a new room object
    const newRoom = {
      name: "",
      damages: [],
    };

    // Update the specific structure by adding the new room
    const updatedStructures = [...qna.structures];
    updatedStructures[structureIndex].rooms.push(newRoom);

    // Update the Q&A data with the modified structures
    setQna({
      ...qna,
      structures: updatedStructures,
    });
  };

  // Function to add a new damage item to a room/area
  const addDamageToRoom = (structureIndex, roomIndex) => {
    // Create a new damage item object
    const newDamageItem = {
      type: "",
      description: "",
    };

    // Update the specific room by adding the new damage item
    const updatedStructures = [...qna.structures];
    updatedStructures[structureIndex].rooms[roomIndex].damages.push(
      newDamageItem
    );

    // Update the Q&A data with the modified structures
    setQna({
      ...qna,
      structures: updatedStructures,
    });
  };

  return (
    <Box p="4">
      <Heading as="h3" fontWeight={500} textAlign='center' size="xl">
        Interview Q&A
      </Heading>

      {/* Display questions */}
      <VStack mb={6} spacing={4} align="start" gap={4} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
        {qna.questions.map((question, questionIndex) => (
          <Box key={questionIndex} w="100%">
            <Text>{question.label}</Text>
            <Input
              type={question.type}
              value={question.answer}
              onChange={(e) => {
                const updatedQuestions = [...qna.questions];
                updatedQuestions[questionIndex].answer = e.target.value;
                setQna({ ...qna, questions: updatedQuestions });
              }}
            />
          </Box>
        ))}
      </VStack>

      <Heading as="h3" fontWeight={500} textAlign='center' size="lg" my={2} mt={5}>
        Structures
      </Heading>

      {/* Display structures */}
      <Accordion defaultIndex={[0]} allowMultiple>
        {qna.structures.map((structure, structureIndex) => (
          <AccordionItem key={structureIndex} my={2}>
            <AccordionButton bgColor={"blackAlpha.50"} _expanded={{ bg: 'blackAlpha.600', color: 'white' }}>
              <Box flex="1" textAlign="left">
                Structure {structureIndex + 1}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p="0">
              <VStack spacing={4} align="start" w="100%" >
                <Box w="100%" borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
                  <Text>When was the structure built?</Text>
                  <Input
                    type="text"
                    value={structure.buildDate}
                    onChange={(e) => {
                      const updatedStructures = [...qna.structures];
                      updatedStructures[structureIndex].buildDate =
                        e.target.value;
                      setQna({
                        ...qna,
                        structures: updatedStructures,
                      });
                    }}
                  />
                </Box>
                <Box w="100%" borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
                  <Text>When was the roof last replaced?</Text>
                  <Input
                    type="text"
                    value={structure.roofReplacementDate}
                    onChange={(e) => {
                      const updatedStructures = [...qna.structures];
                      updatedStructures[structureIndex].roofReplacementDate =
                        e.target.value;
                      setQna({
                        ...qna,
                        structures: updatedStructures,
                      });
                    }}
                  />
                </Box>
                <Box w="100%" borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
                  <Text>Interior damage general information</Text>
                  <ReactSelect
                    options={interiorDamageOptions}
                    placeholder="Select interior damage type"
                    isSearchable={false}
                  // Add your onChange logic here
                  />
                </Box>
                <SimpleGrid columns={[1, 2]} gap={4} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
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
                      />
                    </FormControl>
                    <Box w="100%" borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
                      <Text>Notes</Text>
                      <Input
                        type="text"
                        placeholder={"Notes"}
                        value={structure.exteriorDamageNotes}
                        onChange={(e) => {
                          const updatedStructures = [...qna.structures];
                          updatedStructures[
                            structureIndex
                          ].exteriorDamageNotes = e.target.value;
                          setQna({
                            ...qna,
                            structures: updatedStructures,
                          });
                        }}
                      />
                    </Box>
                  </Box>
                  <Box w="100%" borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
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
                      />
                    </FormControl>
                    <Box w="100%" borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
                      <Text>Notes</Text>
                      <Input
                        placeholder={"Notes"}
                        type="text"
                        value={structure.roofDamageNotes}
                        onChange={(e) => {
                          const updatedStructures = [...qna.structures];
                          updatedStructures[structureIndex].roofDamageNotes =
                            e.target.value;
                          setQna({
                            ...qna,
                            structures: updatedStructures,
                          });
                        }}
                      />
                    </Box>
                  </Box>
                </SimpleGrid>

                {structure.rooms?.map((room, roomIndex) => (
                  <Accordion defaultIndex={[0]} allowMultiple key={roomIndex} w={"full"} gap={4} p="0">
                    <AccordionItem my={2} >
                      <AccordionButton bgColor={'blackAlpha.50'} _expanded={{ bg: 'blackAlpha.600', color: 'white' }}>
                        <Box flex="1" textAlign="left">
                          Room/Area {roomIndex + 1}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel p="0">
                        <VStack spacing={4} align="start" w="100%">
                          <Box w="100%" borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
                            <Text>Select Room/Area {roomIndex + 1}</Text>
                            <ReactSelect
                              options={roomAreaOptions}
                              placeholder="Select room/area"
                              isSearchable={false}
                            // Add your onChange logic here
                            />
                          </Box>
                          <Accordion allowMultiple w="full" p="0">
                            {room.damages.map((damage, damageIndex) => (
                              <AccordionItem key={damageIndex}>
                                <AccordionButton bgColor={'blackAlpha.50'} _expanded={{ bg: 'blackAlpha.600', color: 'white' }}>
                                  <Box flex="1" textAlign="left">
                                    Damage #{damageIndex + 1}
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel p="0" display="flex" gap={[2, 4]} w="full" alignItems={'start'} flexDir={'column'}>
                                  <Box w="100%" borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
                                    <Text>Damage location</Text>
                                    <ReactSelect
                                      options={damageLocationOptions}
                                      placeholder="Select damage location"
                                      isSearchable={false}
                                    // Add your onChange logic here
                                    />
                                  </Box>
                                  <Box w="100%" borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
                                    <Text>Attic access information</Text>
                                    <ReactSelect
                                      options={atticAccessOptions}
                                      placeholder="Select attic access information"
                                      isSearchable={false}
                                    // Add your onChange logic here
                                    />
                                  </Box>
                                  <Box w="100%">
                                    <Text>Notes</Text>
                                    <Input type="text" />
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
                            <AddIcon fontSize={'md'} mr={1} /> Damage
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
                  <AddIcon fontSize={'md'} mr={1} />  Room/Area
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
          <AddIcon fontSize={'md'} mr={1} /> Structure
        </Button>
      </HStack>
    </Box>
  );
}

export default InterviewQnAComponent;
