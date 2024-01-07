import {
     Accordion,
     AccordionItem,
     AccordionButton,
     AccordionPanel,
     AccordionIcon,
     Box,
     Menu,
     MenuButton,
     MenuList,
     MenuItem,
     useDisclosure,
     Button,
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalCloseButton,
     ModalBody,
     Input,
     ModalFooter,
     Avatar,
     AvatarBadge,
     Checkbox,
     Image
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaImage } from "react-icons/fa";
import { API_BASE_URL } from "../../App";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectsFunc } from "../../redux/actions/dashBoardAction";

   


const TakePhotosWithAccordions = () => {

     const [data, setData] = useState([]);
     const token = localStorage.getItem('token');
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const {rootId} = useParams();
     const { dashboardProjects } = useSelector(state => state.dashboardReducer);
     const project = dashboardProjects.find(project=> rootId === project.ID);

     useEffect(() => {
          dispatch(getAllProjectsFunc(navigate));
     }, [dispatch,navigate]);

console.log({project})


const extractFolderIdFromUrl = (url) => {
     const urlParts = url.split('/');
     return urlParts[urlParts.length - 1];
   }
     
   
useEffect(() => {
     const fetchAndRenderFileFolderList = async (folderId) => {
       try {
         const apiUrl = `${API_BASE_URL}/get-file-folder-list/${folderId}`;
         const response = await axios.get(apiUrl, {
           headers: {
             Authorization: `Bearer ${JSON.parse(token)}`,
           },
         });
         return response.data.data.data;
       } catch (error) {
         console.error("Error fetching file and folder list:", error);
         return [];
       }
     };
   
     const renderFoldersRecursively = async (folders) => {
       for (const folder of folders) {
         if (folder.attributes.type === 'folder' && folder.attributes.has_folders) {
           folder.folders = await fetchAndRenderFileFolderList(folder.id);
           if (folder.folders.length > 0) {
             await renderFoldersRecursively(folder.folders);
           }
         }
       }
     };
   
     const fetchData = async () => {
       try {
          const folderId = extractFolderIdFromUrl(project.Project_Folder_WD.url);

         let rootFolders = await fetchAndRenderFileFolderList(folderId);
         await renderFoldersRecursively(rootFolders);

         setData(rootFolders);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     };
   
     project && fetchData();
   }, [token, project]);

   
    console.log({data});
   
    const renderFoldersRecursively = (folders) => {
     return folders.map((folder) => folder.attributes.type === 'folder' ?(
       <AccordionItem key={folder.id}>
         <h2>
           <AccordionButton>
             <Box flex="1" textAlign="left">
               <Box display="flex" justifyContent="space-between" w="full">
                 <Box fontWeight={500}>{folder.attributes.name}</Box>
                 <Box p={1} pr={2}>
                   <Menu>
                     <MenuButton bg="white">
                       <BsThreeDotsVertical />
                     </MenuButton>
                     <MenuList>
                       <MenuItem>{/* Your menu item content here */}</MenuItem>
                     </MenuList>
                   </Menu>
                 </Box>
               </Box>
             </Box>
             <AccordionIcon />
           </AccordionButton>
         </h2>
         <AccordionPanel pb={4}>
           <Accordion allowToggle>
             {folder.folders && folder.folders.length > 0 &&
               renderFoldersRecursively(folder.folders)
             }
           </Accordion>
         </AccordionPanel>
       </AccordionItem>
     ): (folder?.attributes?.type === 'image' ?<Image src=""/>:null));
   };

     return project ?(
          <Box bg={'white'} w={'90%'} m={'auto'} p={3} pt={5} borderRadius='10px' mt='2%'>
               <Box p={3} textAlign={'right'} mb={5} display='flex' alignItems={'center'}>
                    <Checkbox size={'lg'} ></Checkbox>
                    <Button  ml={2} color="red"  fontWeight={'bold'} size={'sm'}>Remove All</Button>
               </Box>
               <Accordion allowToggle>
                    {data?.map((elem) => (
                         <AccordionItem key={elem.id}>
                              <h2>
                                   <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                             <Box display='flex' justifyContent='space-between' w='full'>
                                                  <Box fontWeight={500}>
                                                       {elem.attributes.name}
                                                  </Box>
                                                  <Box p={1} pr={2}>
                                                       <Menu>
                                                            <MenuButton bg={'white'}>
                                                                 <BsThreeDotsVertical />
                                                            </MenuButton>
                                                            <MenuList>
                                                                 <MenuItem>
                                                                      {/* <InputModal onAdd={addFolder} parentId={elem.id} /> */}
                                                                 </MenuItem>
                                                            </MenuList>
                                                       </Menu>
                                                  </Box>
                                             </Box>
                                        </Box>
                                        <AccordionIcon />
                                   </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
  <Accordion allowToggle>
    {elem.folders && elem.folders.length > 0 &&
      renderFoldersRecursively(elem.folders)
    }
  </Accordion>
</AccordionPanel>
                         </AccordionItem>
                    ))}
               </Accordion>
          </Box>
     ): null
};



export { TakePhotosWithAccordions };