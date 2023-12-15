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
import { quillModules } from "./data";
import { DeleteIcon } from "@chakra-ui/icons";


function DocumentReviewComponent({form , setForm}) {
  // State to store documents review data
const documents= form.documents;
  // Function to handle documents upload
  const handleDocumentUpload = (file, index) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].documents = file;
    setForm(prev=>({...prev , documents: updatedDocuments}));
  };

  // Function to add a new documents review
  const addDocumentReview = () => {
    const newDocumentReview = {
      documents: null,
      constructionEstimate: "",
      documentReviewNotes: "",
      noteworthyItems: "",
    };
    setForm(prev=>({...prev , documents: [...prev.documents, newDocumentReview]}));
  };




  return (
    <Box>
      <Heading as="h3" fontWeight={500} textAlign='center' size="lg" mb={4}>
        Document Review
      </Heading>
      {documents.map((doc, index) => (
        <Fragment key={index}>
          {/* Document 1 */}
          <HStack justifyContent={"space-between"} alignItems={"end"}>
            <Heading as="h3" fontWeight={500} size="md" mb={2}>
              Document {index + 1}
            </Heading>
            {documents.length > 1 && (
              <IconButton>
                <DeleteIcon />
              </IconButton>
            )}
          </HStack>
          <Heading as="h4" fontWeight={500} textAlign='center' size="sm" mb={2}>
            Click here to upload Document
          </Heading>
          {/* Click here to upload Document input button */}
          <FormControl mb={4} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
            <Input
              type="file"
              accept=".pdf"
              onChange={(e) => handleDocumentUpload(e.target.files[0], index)}
            />
          </FormControl>

          {/* sub sub heading for noteworthy items */}
          <Heading as="h4" fontWeight={500} textAlign='center' size="sm" mb={2}>
            Construction Estimate
          </Heading>
          {/* React Quill for Construction Estimate */}
          <FormControl mb={4} minH={"350px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
            <ReactQuill
              style={{ height: "300px" }}
              modules={quillModules}
              value={doc.constructionEstimate}
              onChange={(value) => {
                const updatedDocuments = [...documents];
                updatedDocuments[index].constructionEstimate = value;
                setForm(prev=>({...prev , documents: updatedDocuments}));
              }}
              placeholder="Construction Estimate and Photo Sheet – prepared by Company XX and dated Month Date, Year"
            />
          </FormControl>

          {/* React Quill for Document Review Notes */}
          {/* sub sub heading for noteworthy items */}
          <Heading as="h4" textAlign='center' fontWeight={500} size="sm" mb={2}>
            Document Review Notes
          </Heading>
          <FormControl mb={8} minH={"300px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
            <ReactQuill
              modules={quillModules}
              value={doc.documentReviewNotes}
              style={{ height: "250px" }}
              onChange={(value) => {
                const updatedDocuments = [...documents];
                updatedDocuments[index].documentReviewNotes = value;
                setForm(prev=>({...prev , documents: updatedDocuments}));
              }}
              placeholder="This documents contained a one-pageConstruction Estimate and 10-pagePhoto Sheet prepared by a field adjuster from Company XX, Mr./Ms. FirstName LastName, The Construction Estimate was dated Month Date, Year. The Photo Sheet contained 20 colorphotographs showing the conditions of he exterior, interior, and roof of the subject structure, which were generally similar to those observed during our site investigation"
            />
          </FormControl>

          {/* sub sub heading for noteworthy items */}
          <Heading as="h4" fontWeight={500} textAlign='center' size="sm" mb={2}>
            The following items in this documents were particularly noteworthy
          </Heading>

          {/* React Quill for noteworthy items */}
          <FormControl mb={4} minH={"300px"} isRequired borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>
            <ReactQuill
              style={{ height: "250px" }}
              modules={quillModules}
              value={doc.noteworthyItems}
              onChange={(value) => {
                const updatedDocuments = [...documents];
                updatedDocuments[index].noteworthyItems = value;
                setForm(prev=>({...prev , documents: updatedDocuments}));
              }}
              placeholder="State in a bullet point format the particularly noteworthy items from the documents."
            />
          </FormControl>
        </Fragment>
      ))}
      <HStack m={4} justifyItems={"end"} alignItems={"end"}>
        <Button
          bg="black"
          _hover={{ bg: "gray.700" }}
          color="white"
          rounded="md"
          ml="auto"
          pr="4"
          mt={4}
          onClick={addDocumentReview}
        >
          Add Document
        </Button>
      </HStack>
    </Box>
  );
}

export default DocumentReviewComponent;
