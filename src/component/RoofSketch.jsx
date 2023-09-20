import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";

function FieldSketchesComponent() {
  // State to store field sketches data
  const [sketches, setSketches] = useState([
    {
      interiorDamageSketch: {
        image: null,
        notes: "",
      },
      roofSketch: {
        image: null,
        notes: "",
      },
    },
  ]);

  // Function to handle image upload
  const handleImageUpload = (file, sketchType, index) => {
    // Update the sketch data with the uploaded image
    const updatedSketches = [...sketches];
    updatedSketches[index][sketchType].image = file;
    setSketches(updatedSketches);
  };

  // Function to add a new set of sketches
  const addSketches = () => {
    const newSketches = {
      interiorDamageSketch: {
        image: null,
        notes: "",
      },
      roofSketch: {
        image: null,
        notes: "",
      },
    };

    setSketches([...sketches, newSketches]);
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Field Sketches
      </Heading>
      {sketches.map((sketch, index) => (
        <Box key={index} px={[4, 8]}>
          {/* Interior Damage Sketch sub heading */}
          <Heading as="h3" size="md" mb={2}>
            Interior Damage Sketch
          </Heading>

          {/* Image input for interior damage sketch */}
          <FormControl mb={4}>
            <Text>
              Click here to upload a sketch showing the locations of the
              damages.
            </Text>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImageUpload(
                  e.target.files[0],
                  "interiorDamageSketch",
                  index
                )
              }
            />
          </FormControl>

          {/* Text input with placeholder for interior damage sketch notes */}
          <FormControl mb={4}>
            <Text>Experts to add notes, as suitable.</Text>
            <Input
              type="text"
              placeholder="Add notes..."
              value={sketch.interiorDamageSketch.notes}
              onChange={(e) => {
                const updatedSketches = [...sketches];
                updatedSketches[index].interiorDamageSketch.notes =
                  e.target.value;
                setSketches(updatedSketches);
              }}
            />
          </FormControl>

          {/* Roof Sketch sub heading */}
          <Heading as="h3" size="md" mb={2}>
            Roof Sketch
          </Heading>

          {/* Image input for roof sketch */}
          <FormControl mb={4}>
            <Text>
              Click here to upload a sketch showing the locations of the
              damages.
            </Text>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImageUpload(e.target.files[0], "roofSketch", index)
              }
            />
          </FormControl>

          {/* Text input with placeholder for roof sketch notes */}
          <FormControl mb={4}>
            <Text>Experts to add notes, as suitable.</Text>
            <Input
              type="text"
              placeholder="Add notes..."
              value={sketch.roofSketch.notes}
              onChange={(e) => {
                const updatedSketches = [...sketches];
                updatedSketches[index].roofSketch.notes = e.target.value;
                setSketches(updatedSketches);
              }}
            />
          </FormControl>
        </Box>
      ))}
      <Button onClick={addSketches}>Add Sketch</Button>
    </Box>
  );
}

export default FieldSketchesComponent;
