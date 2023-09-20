import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  Text,
  Select,
  Input,
  Button,
  Divider,
  VStack,
  HStack,
} from "@chakra-ui/react";
// import ReactMic from "react-mic";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import ReactQuill from "react-quill";
import {
  atticAccessOptions,
  damageLocationOptions,
  interiorDamageOptions,
  quillModules,
  roomAreaOptions,
} from "./data";

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
                          
                        }
                    ],
                }
            ],
        }
    ],
  });

  // State to manage audio recording

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
      <Heading as="h2" size="xl" >
        Interview Q&A
      </Heading>
<Box p="8">
    
      {/* Display questions */}
      {qna.questions.map((question, questionIndex) => (
        <FormControl key={questionIndex} mb={4}>
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
        </FormControl>
      ))}

      {/* Display structures */}
      {qna.structures.map((structure, structureIndex) => (
        <Box p={4} key={structureIndex} border={"1px solid"} borderColor={"gray.200"}>
        <Heading as="h3" size="lg">
            Structure {structureIndex + 1}
          </Heading>
         <VStack gap={4} key={structureIndex} alignItems={'start'} p="8">
          

          {/* When was the structure built? - text input */}
          <FormControl mb={4}>
            <Text>When was the structure built?</Text>
            <Input
              type="text"
              value={structure.buildDate}
              onChange={(e) => {
                const updatedStructures = [...qna.structures];
                updatedStructures[structureIndex].buildDate = e.target.value;
                setQna({
                  ...qna,
                  structures: updatedStructures,
                });
              }}
            />
          </FormControl>

          {/* When was the roof last replaced? - text input */}
          <FormControl mb={4}>
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
          </FormControl>

          {/* Interior damage general information - React Select */}
          <FormControl mb={4}>
            <Text>Interior damage general information</Text>
            <Select
              options={interiorDamageOptions}
              placeholder="Select interior damage type"
              isSearchable={false}
              // Add your onChange logic here
            />
          </FormControl>

          {/* Exterior sub sub heading */}
          <Heading as="h6" size="xs">
            Exterior
          </Heading>

          {/* React Quill for exterior damage information */}
          <FormControl mb={4} minH={"200px"} isRequired>
            <ReactQuill
              modules={quillModules}
              placeholder="1. Which items were damaged? 2. When were they installed? 3. When was the damage first noticed? 4. Which specific items were repaired and when? 5. Which specific items were replaced and when?"
              style={{ height: "150px" }}
            />
          </FormControl>

          {/* Notes - text input */}
          <FormControl mb={4}>
            <Text>Notes</Text>
            <Input
              type="text"
              value={structure.exteriorDamageNotes}
              onChange={(e) => {
                const updatedStructures = [...qna.structures];
                updatedStructures[structureIndex].exteriorDamageNotes =
                  e.target.value;
                setQna({
                  ...qna,
                  structures: updatedStructures,
                });
              }}
            />
          </FormControl>

          {/* Roof sub sub heading */}
          <Heading as="h6" size="xs">
            Roof
          </Heading>

          {/* React Quill for roof damage information */}
          <FormControl mb={4} minH={"200px"} isRequired>
            <ReactQuill
              modules={quillModules}
              placeholder="1. Which areas were damaged? 2. When were they installed? 3. When was each area of damage first noticed? 4. Which specific items were repaired and when? 5. Which specific items were replaced and when?"
              style={{ height: "150px" }}
            />
          </FormControl>

          {/* Notes - text input */}
          <FormControl mb={4}>
            <Text>Notes</Text>
            <Input
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
          </FormControl>

          {structure.rooms?.map((room, roomIndex) => {
            return (
            <Box p={4} key={roomIndex} border={"1px solid"} borderColor={"gray.200"} w={"full"}>
                {/* Room/Area 1 sub sub heading */}
                <Heading as="h6" size="xs">
                  Room/Area {roomIndex + 1}
                </Heading>

<Box p="8" w={"full"}>
                    {/* Select Room/Area 1 - select */}
                    <FormControl mb={4}>
                  <Text>Select Room/Area {roomIndex + 1}</Text>
                  <Select
                    options={roomAreaOptions}
                    placeholder="Select room/area"
                    isSearchable={false}
                    // Add your onChange logic here
                  />
                </FormControl>
                {room.damages.map((damage , damageIndex) => {
                  return (
                    <Box p={4} key={damageIndex} border={"1px solid"} borderColor={"gray.200"}>

                      {/* Damage sub sub sub heading */}
                      <Heading as="h6" size="xs">
                        Damage #{damageIndex + 1}
                      </Heading>
                        <Box p={8}>
                            
                      {/* Damage location - select */}
                      <FormControl mb={4}>
                        <Text>Damage location</Text>
                        <Select
                          options={damageLocationOptions}
                          placeholder="Select damage location"
                          isSearchable={false}
                          // Add your onChange logic here
                        />
                      </FormControl>

                      {/* Attic access information - select */}
                      <FormControl mb={4}>
                        <Text>Attic access information</Text>
                        <Select
                          options={atticAccessOptions}
                          placeholder="Select attic access information"
                          isSearchable={false}
                          // Add your onChange logic here
                        />
                      </FormControl>

                      {/* Notes - text input */}
                      <FormControl mb={4}>
                        <Text>Notes</Text>
                        <Input type="text" />
                      </FormControl>
                        </Box>
                    </Box>
                  );
                })}
                {/* Add Damage button */}
               <HStack m={4} justifyItems={"end"} alignItems={"end"}>
        <Button
          bg="black"
          _hover={{ bg: "gray.700" }}
          color="white"
          rounded="md"
          ml="auto"
          pr="4"
          onClick={() => addDamageToRoom(structureIndex, roomIndex)}
        >
                  Add Damage
        </Button>
        </HStack>
      
                </Box>
                <Divider />
              </Box>
            );
          })}

          {/* Add Room/Area button */}
          <HStack w={"full"} m={4} justifyItems={"end"} alignItems={"end"}>
        <Button
          bg="black"
          _hover={{ bg: "gray.700" }}
          color="white"
          rounded="md"
          ml="auto"
          pr="4"
          onClick={() => addRoomToStructure(structureIndex)}
        >
            Add Room/Area
        </Button>
        </HStack>
      
        </VStack>
   </Box>
      ))}
      {/* Add structure button */}
      <HStack m={4} justifyItems={"end"} alignItems={"end"}>
        <Button
          bg="black"
          _hover={{ bg: "gray.700" }}
          color="white"
          rounded="md"
          ml="auto"
          pr="4"
          onClick={addStructure}
        >
Add Structure
        </Button>
        </HStack>
</Box>
    </Box>
  );
}

export default InterviewQnAComponent;
