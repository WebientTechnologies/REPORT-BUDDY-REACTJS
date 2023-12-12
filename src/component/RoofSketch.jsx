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

function FieldSketchesComponent({form , setForm}) {
  // State to store field sketches data

const sketches= form.sketches;

  // Function to handle image upload
  const handleImageUpload = (file, sketchType, ) => {
    // Update the sketch data with the uploaded image
    const updatedSketches = [...sketches];
    updatedSketches[sketchType].image = file;
    setForm(prev=>({...prev , sketches: updatedSketches}));
  };


  return (
    <Box>
      <Heading as="h3" fontWeight={500} textAlign='center' size="lg" mb={4}>
        Field Sketches
      </Heading>
        <Box >
          {/* Interior Damage Sketch sub heading */}
          <Heading as="h3" fontWeight={500} textAlign='center' size="md" mb={2}>
            Interior Damage Sketch
          </Heading>

          {/* Image input for interior damage sketch */}
          <FormControl mb={4} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
            <Text mb={2}>
              Click here to upload a sketch showing the locations of the
              damages.
            </Text>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImageUpload(
                  e.target.files[0],
                  "interiorDamageSketch"
                )
              }
            />
          </FormControl>

          {/* Text input with placeholder for interior damage sketch notes */}
          <FormControl mb={4} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
            <Text mb={2}>Experts to add notes, as suitable.</Text>
            <Input
              type="text"
              placeholder="Add notes..."
              value={sketches.interiorDamageSketch}
              onChange={(e) => {
                const updatedSketches ={...sketches};
                updatedSketches.interiorDamageSketch =
                  e.target.value;
                  setForm(prev=>({...prev , sketches: updatedSketches}));
              }}
            />
          </FormControl>

          {/* Roof Sketch sub heading */}
          <Heading as="h3" fontWeight={500} textAlign='center' size="md" mb={2}>
            Roof Sketch
          </Heading>

          {/* Image input for roof sketch */}
          <FormControl mb={4} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
            <Text mb={2}>
              Click here to upload a sketch showing the locations of the
              damages.
            </Text>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImageUpload(e.target.files[0], "roofSketch")
              }
            />
          </FormControl>

          {/* Text input with placeholder for roof sketch notes */}
          <FormControl mb={4} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
            <Text mb={2}>Experts to add notes, as suitable.</Text>
            <Input
              type="text"
              placeholder="Add notes..."
              value={sketches.roofSketch}
              onChange={(e) => {
                const updatedSketches = {...sketches};
                updatedSketches.roofSketch = e.target.value;
                setForm(prev=>({...prev , sketches: updatedSketches}));
              }}
            />
          </FormControl>
        </Box>

    </Box>
  );
}

export default FieldSketchesComponent;
