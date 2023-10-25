import React, { useState } from 'react';
import { Box, Tag, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { getAllProjectsFunc } from '../../redux/actions/dashBoardAction';
import CustomTable from '../../component/CustomTable';
import { safeStringify } from '../../StringifyAndParsedObj/StringifyAndParsedObj';


function PendingReportsEM() {

     const { dashboardProjects, dashboardProjectsLoading, dashboardProjectsError } = useSelector(state => state.dashboardReducer);
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const user = JSON.parse(localStorage.getItem('premaUser'));

     const [fePendingReportsEMProjects, setMyProject] = useState(dashboardProjects || []);


     useEffect(() => {
          dispatch(getAllProjectsFunc(navigate));
     }, [dispatch]);

     useEffect(() => {
          setMyProject(dashboardProjects?.filter((el) =>
          el[`Project_Assigned_Form.EM`] === user?.name &&
          el['PS_3.Draft_Report_Completed'].length < 5 &&
          el['PS_2.IDP_Rejected_by_EM'].length < 5 &&
          el['PS_2.IDP_Completed_by_FE' > 5]
     ));
     }, [dashboardProjects]);


     const handleClick = (name, num) => {
          localStorage.setItem('projectName', name);
          localStorage.setItem('claimNo', num);
     }


     const allProjectsTableColumns = useMemo(
          () => {
               const columns = [
                    {
                         Header: 'ID',
                         accessor: 'ID',
                         Cell: ({ row }) => {
                              const { ID, Project_Name, Claim_Number } = row.original;
                              const objectParam = encodeURIComponent(safeStringify(row?.original));
                              return <Link to={`/project/${objectParam}`}>
                                   <Box onClick={() => handleClick(Project_Name, Claim_Number)} color='teal.700'>{ID ? ID : '---'}</Box>
                              </Link>
                         }
                    },
                    {
                         Header: 'Claim Number',
                         accessor: 'Claim_Number',
                         Cell: ({ value }) => {
                              return <Box>{value ? value : '---'}</Box>;
                         }
                    },
                    {
                         Header: 'Owner_Name',
                         accessor: 'Owner_Name',
                         Cell: ({ value }) => {
                              return <Box>{value ? value : '---'}</Box>;
                         }
                    },
                    {
                         Header: 'Client_Project_Number',
                         accessor: 'Client_Project_Number',
                         Cell: ({ value }) => {
                              return <Box>{value ? value : '---'}</Box>;
                         }
                    },
                    {
                         Header: 'Project_Name',
                         accessor: 'Project_Name',
                         Cell: ({ value }) => {
                              return <Box>{value ? value : '---'}</Box>;
                         }
                    },
                    {
                         Header: 'PS_2.This_is_Extensive_Project',
                         accessor: 'PS_2.This_is_Extensive_Project',
                         Cell: ({ value }) => {
                              return (
                                   <Tag colorScheme={value ? 'green' : 'red'} textTransform='capitalize'>{value ? 'Yes' : 'No'}</Tag>
                              );
                         }
                    },
                    {
                         Header: 'Scope_of_Service',
                         accessor: 'Scope_of_Service',
                         Cell: ({ value }) => {
                              return (
                                   <Box display='flex'>
                                        <Text overflow={'hidden'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} maxW={{ base: '200px', lg: '150px', xl: '300px' }}>{value}</Text>
                                   </Box>
                              );
                         }
                    },
                    {
                         Header: 'PS_1.FE_Email',
                         accessor: 'PS_1.FE_Email',
                         Cell: ({ value }) => {
                              return <Box>{value ? value : '---'}</Box>;
                         }
                    },
                    {
                         Header: 'PS_1.EM_Email',
                         accessor: 'PS_1.EM_Email',
                         Cell: ({ value }) => {
                              return <Box>{value ? value : '---'}</Box>;
                         }
                    },
                    {
                         Header: 'PS_2 Site Visit-1 Scheduled Date',
                         accessor: 'PS_2.Site_Visit_1_Scheduled_Date',
                         Cell: ({ value }) => {
                              // const formattedCreatedAt = new Date(value).toLocaleString();
                              return (
                                   <span>{value || '---'}</span>
                              );
                         }
                    },
                    {
                         Header: 'Project_Assigned_Form.FE',
                         accessor: 'Project_Assigned_Form.FE',
                         Cell: ({ value }) => {
                              return <Box>{value ? value : '---'}</Box>;
                         }
                    },
               ];
               return columns?.filter(Boolean); // Remove falsy values (undefined columns)
          },
          [fePendingReportsEMProjects]
     );


     return (
          <Box bg={'white'} mt={10} width='95%' m={'auto'} p={5} borderRadius={'10px'}>
               {
                    dashboardProjectsLoading ? (
                         <Box textAlign='center'>Loading</Box>
                    ) : (
                         fePendingReportsEMProjects && fePendingReportsEMProjects?.length > 0 ? (
                              <CustomTable columns={allProjectsTableColumns} data={fePendingReportsEMProjects ? fePendingReportsEMProjects : []} searchEnabled={true} />
                         ) : (
                              <Text fontWeight={500} color='red.700' textAlign='center'>Projects Not Available</Text>
                         )
                    )
               }
          </Box>
     );
};

export default PendingReportsEM;
