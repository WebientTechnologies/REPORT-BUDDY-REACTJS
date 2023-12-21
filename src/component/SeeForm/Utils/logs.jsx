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


const LogsModal = ({ isOpen, onClose, comments }) => {

  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>All Logs</ModalHeader>
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
{      commentData?.fieldValue[0] === '<'   ?         <Text size={['sm','md']} dangerouslySetInnerHTML={{__html: commentData.fieldValue}}></Text>:    <Text size={['sm','md']}>{commentData.fieldValue}</Text>
}                </Box>
              </HStack>
            ))}
          </VStack>
  
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => onClose()}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LogsModal;
