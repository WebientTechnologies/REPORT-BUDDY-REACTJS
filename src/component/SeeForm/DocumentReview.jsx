import React, { Fragment, useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  Text,
  Input,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import ReactQuill from "react-quill"; // Import React Quill
import "react-quill/dist/quill.snow.css"; // Import styles
import { quillModules } from "../data";
import { DeleteIcon } from "@chakra-ui/icons";
import InputChange from "./Utils/InputChange";


function DocumentReviewComponent({setLogFelid, setCommentFelid, getForm,getFormData}) {
  // State to store documents review data
const documents= getForm?.documents;

  return (
    <Box>
      <Heading as="h3" fontWeight={500} textAlign='center' size="lg" mb={4}>
        Document Review
      </Heading>
      {documents?.map((doc, index) => (
        <Fragment key={index}>
          {/* Document 1 */}
          <HStack justifyContent={"space-between"} alignItems={"end"}>
            <Heading as="h3" fontWeight={500} size="md" mb={2}>
              Document {index + 1}
            </Heading>     
                 </HStack>
          <Heading as="h4" fontWeight={500} textAlign='center' size="sm" mb={2}>
            Click here to upload Document
          </Heading>
          {/* Click here to upload Document input button */}
          <HStack
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            boxShadow="0px 18px 40px 0px #7090B01F"
            p={3}
          >
            <Button
              bg="black"
              _hover={{ bg: "gray.700" }}
              color="white"
              rounded="md"
              pr="4"
              mt={2}
              mb={4}
              marginRight={0}
            >
              View Data File
            </Button>
          </HStack>

          {/* sub sub heading for noteworthy items */}
          <Heading as="h4" fontWeight={500} textAlign='center' size="sm" mb={2}>
            Construction Estimate
          </Heading>
          {/* React Quill for Construction Estimate */}
          <FormControl mb={4} minH={"400px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>

          <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={doc.constructionEstimate}
          fieldName={`documents.${index}.constructionEstimate`}
          height="300px"
          placeholder="Construction Estimate and Photo Sheet – prepared by Company XX and dated Month Date, Year"
          />
          </FormControl>

          <Heading as="h4" textAlign='center' fontWeight={500} size="sm" mb={2}>
            Document Review Notes
          </Heading>
          <FormControl mb={8} minH={"400px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={doc.documentReviewNotes}
          fieldName={`documents.${index}.documentReviewNotes`}
          height="250px"
          placeholder="This documents contained a one-pageConstruction Estimate and 10-pagePhoto Sheet prepared by a field adjuster from Company XX, Mr./Ms. FirstName LastName, The Construction Estimate was dated Month Date, Year. The Photo Sheet contained 20 colorphotographs showing the conditions of he exterior, interior, and roof of the subject structure, which were generally similar to those observed during our site investigation"
          />
          </FormControl>

          {/* sub sub heading for noteworthy items */}
          <Heading as="h4" fontWeight={500} textAlign='center' size="sm" mb={2}>
            The following items in this documents were particularly noteworthy
          </Heading>

          {/* React Quill for noteworthy items */}
          <FormControl mb={4} minH={"400px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
          <InputChange
          inputType={"quill"}
          setCommentFelid={setCommentFelid}
          setLogFelid={setLogFelid}
getFormData= {getFormData}
          defaultValue={doc.noteworthyItems}
          fieldName={`documents.${index}.noteworthyItems`}
          height="250px"
          placeholder="State in a bullet point format the particularly noteworthy items from the documents."
          />
          </FormControl>
        </Fragment>
      ))}
    </Box>
  );
}

export default DocumentReviewComponent;
