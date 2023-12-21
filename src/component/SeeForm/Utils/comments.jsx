import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Button,
  VStack,
  Box,
  Text,
  HStack,
  Avatar,
} from "@chakra-ui/react";
import ReactTimeAgo from 'react-time-ago'


const CommentsModal = ({ isOpen, onClose, onSubmit, comments }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    onSubmit(comment);
    setComment("");
  };

  return (
    <Modal isOpen={isOpen} onClose={() => onClose(setComment)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Comment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack maxH={"50vh"} spacing={1} overflowY={'auto'}>
            {comments.map((commentData) => (
              <HStack
                key={commentData._id}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                w="full"
              >
                <Avatar size={['sm','md']} />
                <Box  w="full">
                  <HStack justifyContent={'space-between'} w="full">
                    <Text  size={['sm','md']} fontWeight="bold">{commentData.userId.name}</Text>
                    <Text fontWeight={'200'} size={['sx','sm']}>
                      <ReactTimeAgo date={new Date(commentData.createdAt)} locale="en-US" timeStyle="twitter"/>
                    </Text>
                  </HStack>
                  <Text size={['sm','md']}>{commentData.fieldValue}</Text>
                </Box>
              </HStack>
            ))}
          </VStack>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter your comment..."
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Add Comment
          </Button>
          <Button onClick={() => onClose(setComment)}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommentsModal;
