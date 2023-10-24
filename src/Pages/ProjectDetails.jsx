import React from 'react';
import { Button, Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { safeParse } from '../StringifyAndParsedObj/StringifyAndParsedObj';

function ProjectDetails() {

  const { objectParam } = useParams();
  const parsedData = safeParse(objectParam);
  console.log({ parsedData });


  return (
    <Box pb={10}>
      <Box textAlign='center'>
        <Link to="/fill-form">
          <Button bg={'black'} color='white' size="lg" m={4}>
            Field buddy
          </Button>
        </Link>
      </Box>

      <Heading size="lg" mt={1} textAlign='center' mb={5} color={'white'}>
        Project Details
      </Heading>

      <Box p={4} height={'auto'} borderRadius='10px' bg={'white'} w={{ base: '100%', md: '90%', xl: '70%' }} m='auto' boxShadow="0px 18px 40px 0px #7090B01F">
        <Table variant="simple" mt={4}>
          <Tbody>
            <Tr>
              <Th>Project ID</Th>
              <Td>{parsedData?.ID}</Td>
            </Tr>
            <Tr>
              <Th>Project Name</Th>
              <Td>{parsedData?.Project_Name}</Td>
            </Tr>
            <Tr>
              <Th>Project Number</Th>
              <Td>{parsedData?.Project_Number}</Td>
            </Tr>
            <Tr>
              <Th>Contact Name</Th>
              <Td>{parsedData?.Contact_Name}</Td>
            </Tr>
            <Tr>
              <Th>Client Project Number</Th>
              <Td>{parsedData?.Client_Project_Number}</Td>
            </Tr>
            <Tr>
              <Th>Loss Location Street Address</Th>
              <Td>{parsedData?.Loss_Location_Street_Address}</Td>
            </Tr>
            <Tr>
              <Th>Owner Name</Th>
              <Td>{parsedData?.Owner_Name}</Td>
            </Tr>
            <Tr>
              <Th>Project Type</Th>
              <Td>{parsedData?.Project_Type}</Td>
            </Tr>
            <Tr>
              <Th>Claim Number</Th>
              <Td>{parsedData?.Claim_Number}</Td>
            </Tr>
            <Tr>
              <Th>Description</Th>
              <Td>{parsedData?.Description}</Td>
            </Tr>
            <Tr>
              <Th>Scope Of Service</Th>
              <Td>{parsedData?.Scope_of_Service}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
