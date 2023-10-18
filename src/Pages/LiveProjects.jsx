import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
function LiveProjects() {
  const data = [
    { id: 1, name: 'Project A', claimNumber: 'ABC123' },
    { id: 2, name: 'Project B', claimNumber: 'DEF456' },
    { id: 3, name: 'Project C', claimNumber: 'GHI789' },
  ];

  const navigate = useNavigate();

  const handleClick = (name, num) => {
    navigate('/project');
    console.log({ name, num });
    localStorage.setItem('projectName', name);
    localStorage.setItem('claimNo', num);
  }

  return (
    <Table bg={'white'} mt={10} style={{ borderCollapse: "separate", borderSpacing: "0 6px" }} boxShadow="0px 18px 40px 0px #7090B01F" width='90%' m={'auto'}>
      <Thead>
        <Tr bg={'gray.300'}>
          <Th color={'blue'} textAlign='center'>Project ID</Th>
          <Th color={'blue'} textAlign='center'>Project Name</Th>
          <Th color={'blue'} textAlign='center'>Claim Number</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((project) => (
          <Tr cursor='pointer' key={project.id} onClick={() => handleClick(project.name, project.claimNumber)}>
            <Td textAlign='center'>{project.id}</Td>
            <Td textAlign='center'>{project.name}</Td>
            <Td textAlign='center'>{project.claimNumber}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default LiveProjects;
