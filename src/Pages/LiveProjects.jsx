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
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Project ID</Th>
          <Th>Project Name</Th>
          <Th>Claim Number</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((project) => (
          <Tr key={project.id} onClick={() => handleClick(project.name, project.claimNumber)}>
            <Td>{project.id}</Td>
            <Td>{project.name}</Td>
            <Td>{project.claimNumber}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default LiveProjects;
