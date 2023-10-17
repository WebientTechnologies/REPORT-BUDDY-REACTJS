import React from 'react';
import { Button, Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function ProjectDetails() {
  const data = {
    id: 1,
    name: 'Project A',
    claimNumber: 'ABC123',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    startDate: '2023-01-15',
    endDate: '2023-05-30',
  };

  return (
    <div>
      <Link to="/fill-form">
        <Button bg={'black'} color='white' size="lg" m={4}>
          Field buddy
        </Button>
      </Link>

      <Heading size="lg" mt={4}>
        Project Details
      </Heading>

      <Box p={4} borderWidth="1px" borderRadius="md">
        <Table variant="simple" mt={4}>
          <Tbody>
            <Tr>
              <Th>Project ID</Th>
              <Td>{data.id}</Td>
            </Tr>
            <Tr>
              <Th>Project Name</Th>
              <Td>{data.name}</Td>
            </Tr>
            <Tr>
              <Th>Claim Number</Th>
              <Td>{data.claimNumber}</Td>
            </Tr>
            <Tr>
              <Th>Description</Th>
              <Td>{data.description}</Td>
            </Tr>
            <Tr>
              <Th>Start Date</Th>
              <Td>{data.startDate}</Td>
            </Tr>
            <Tr>
              <Th>End Date</Th>
              <Td>{data.endDate}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </div>
  );
}

export default ProjectDetails;
