import { ChevronDownIcon } from "@chakra-ui/icons";
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
     MenuItemOption,
     MenuGroup,
     MenuOptionGroup,
     MenuDivider,
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
     Avatar
} from "@chakra-ui/react";
import { useRef } from "react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCamera, FaImage } from "react-icons/fa";


const generateUniqueId = () => {
     return Math.random().toString(36).substr(2, 9); // This generates a random 9-character ID
};

// const TakePhotosWithAccordions = () => {

//      const [imageUrls, setImageUrls] = useState([]);
//      const fileInputRef = useRef(null);

//      function handleImageSelect() {
//           fileInputRef.current.click();
//      }
//      const [data, setData] = useState([
//           {
//                name: 'Exterior',
//                level: 1,
//                id: 1,
//                folders: [
//                     {
//                          name: 'Balcony',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Entrance Porch',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Front Porch',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Patio',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Pool',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Pool Deck',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Rear Porch',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Shed',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                ]
//           },
//           {
//                name: 'Common Spaces',
//                level: 1,
//                id: 2,
//                folders: [
//                     {
//                          name: 'Bonus Room',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Den',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Dining Area',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Eat in kitchen',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Entry Foyer',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Family Room',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Garage',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Hallway',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Kitchen',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Living Room',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Office',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Staircase',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Stairlobby',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Sunroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                ]
//           },
//           {
//                name: 'Bedroom',
//                level: 1,
//                id: 3,
//                folders: [
//                     {
//                          name: 'Front-left Bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Front-right bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Guest Bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Master Bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Middle-left bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Middle-right bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Rear-left bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Rear-middle bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Rear-right bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Spare bedroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                ]
//           },
//           {
//                name: 'Bathrooms',
//                level: 1,
//                id: 5,
//                folders: [
//                     {
//                          name: 'Guest Bathroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Hallway bathroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Master Bathroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Pool bathroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Spare bathroom',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                ]
//           },
//           {
//                name: 'Utility/Closets',
//                level: 1,
//                id: 6,
//                folders: [
//                     {
//                          name: 'Air-handler unit closet',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Elevator lobby',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Hallway closet',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Laundary Room',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Master Bedroom Closet',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Mechanical Closet',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Pantry walk-in',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                     {
//                          name: 'Pantry Closet',
//                          images: [],
//                          folders: [
//                               {

//                               }
//                          ]
//                     },
//                ]
//           },
//      ]);


//      function handleImageUpload(e) {
//           const files = e.target.files;
//           if (files) {
//                const urls = Array.from(files).map(file => URL.createObjectURL(file));
//                setImageUrls(prevImageUrls => [...prevImageUrls, ...urls]);
//           }
//      };

//      const addFolder = (name, parentId, onClose) => {
//           const newFolder = {
//                name: name,
//                id: generateUniqueId(),
//                folders: [], // Subfolders are initially empty
//           };

//           const newData = data.map((el) => {
//                if (el.id === parentId) {
//                     return {
//                          ...el,
//                          folders: [...el.folders, newFolder],
//                     };
//                }
//                else if (el.folders && el.folders.length > 0) {
//                     // Recursively search for the parent folder in subfolders
//                     return {
//                          ...el,
//                          folders: addFolderToFolder(el.folders, parentId, newFolder),
//                     };
//                }
//                return el;
//           });

//           setData(newData);
//           onClose();
//      };

//      // Helper function to add a folder to a folder's subfolders
//      const addFolderToFolder = (folders, parentId, newFolder) => {
//           return folders.map((folder) => {
//                if (folder.id === parentId) {
//                     return {
//                          ...folder,
//                          folders: [...folder.folders, newFolder],
//                     };
//                } 
//                else if (folder.folders && folder.folders.length > 0) {
//                     // Recursively search for the parent folder in subfolders
//                     return {
//                          ...folder,
//                          folders: addFolderToFolder(folder.folders, parentId, newFolder),
//                     };
//                }
//                return folder;
//           });
//      };


//      return (
//           <Box w='100%' bg='#2B3674'>
//                <Box bg={'white'} w={'90%'} m={'auto'}>
//                     <Accordion defaultIndex={[0]} allowMultiple>
//                          {
//                               data?.map((el) => {
//                                    return (
//                                         <AccordionItem key={el.id}>
//                                              <h2>
//                                                   <AccordionButton>
//                                                        <Box fontWeight={500} as="span" flex='1' textAlign='left'>
//                                                             <Box display='flex' justifyContent='space-between' w='full'>
//                                                                  <Box fontWeight={500}>{el.name}</Box>
//                                                                  <Box p={1} pr={2}>
//                                                                       <Menu>
//                                                                            <MenuButton bg={'white'}>
//                                                                                 <BsThreeDotsVertical />
//                                                                            </MenuButton>
//                                                                            <MenuList>
//                                                                                 <MenuItem>
//                                                                                      <InputModal onAdd={addFolder} parentId={el.id} />
//                                                                                 </MenuItem>
//                                                                            </MenuList>
//                                                                       </Menu>
//                                                                  </Box>
//                                                             </Box>
//                                                        </Box>
//                                                        <AccordionIcon />
//                                                   </AccordionButton>
//                                              </h2>
//                                              <AccordionPanel pb={4}>
//                                                   {
//                                                        el?.folders?.map((item) => {
//                                                             return (
//                                                                  <Accordion defaultIndex={[0]} allowMultiple>
//                                                                       <AccordionItem>
//                                                                            <h2>
//                                                                                 <AccordionButton>
//                                                                                      <Box as="span" flex='1' textAlign='left'>
//                                                                                           <Box display='flex' justifyContent='space-between' w='full'>
//                                                                                                <Box fontWeight={500}>{item.name}</Box>
//                                                                                                <Box display='flex'>
//                                                                                                     <Box p={1} pr={2}>
//                                                                                                          <FaCamera />
//                                                                                                     </Box>
//                                                                                                     <Box p={1} pr={2}>
//                                                                                                          <FaImage onClick={handleImageSelect} />
//                                                                                                          <Input
//                                                                                                               type="file"
//                                                                                                               accept="image/*"
//                                                                                                               ref={fileInputRef}
//                                                                                                               style={{ display: 'none' }}
//                                                                                                               onChange={handleImageUpload}
//                                                                                                               multiple
//                                                                                                          />
//                                                                                                     </Box>
//                                                                                                     <Box p={1} pr={2}>
//                                                                                                          <Menu>
//                                                                                                               <MenuButton bg={'white'}>
//                                                                                                                    <BsThreeDotsVertical />
//                                                                                                               </MenuButton>
//                                                                                                               <MenuList>
//                                                                                                                    <MenuItem>
//                                                                                                                         <InputModal onAdd={addFolder} parentId={item.id} />
//                                                                                                                    </MenuItem>
//                                                                                                               </MenuList>
//                                                                                                          </Menu>
//                                                                                                     </Box>
//                                                                                                </Box>
//                                                                                           </Box>
//                                                                                      </Box>
//                                                                                      <AccordionIcon />
//                                                                                 </AccordionButton>
//                                                                            </h2>
//                                                                            <AccordionPanel pb={4}>
//                                                                                 {imageUrls.map((imageUrl, index) => (
//                                                                                      <Avatar size={'lg'} borderRadius={0} m={1} key={index} src={imageUrl} alt={`Image ${index}`} />
//                                                                                 ))}
//                                                                            </AccordionPanel>
//                                                                       </AccordionItem>
//                                                                  </Accordion>
//                                                             );
//                                                        })
//                                                   }
//                                              </AccordionPanel>
//                                         </AccordionItem>
//                                    );
//                               })
//                          }
//                     </Accordion>
//                     {/* {renderFolders(data)} */}
//                </Box>
//           </Box>
//      );
// };

// export { TakePhotosWithAccordions };


const InputModal = ({ onAdd, parentId }) => {

     const { isOpen, onOpen, onClose } = useDisclosure();
     const [name, setName] = useState('');
     const handleClick = () => {
          onAdd(name, parentId, onClose);
     };

     return (
          <>
               <Box onClick={onOpen}>
                    Add New Folder
               </Box>
               <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                         <ModalHeader>Add New Folder</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <Input value={name} placeholder="Folder name" onChange={(e) => setName(e.target.value)} />
                         </ModalBody>
                         <ModalFooter>
                              <Button colorScheme='blue' mr={3} onClick={onClose}>
                                   Close
                              </Button>
                              <Button variant='ghost' onClick={handleClick}>Add</Button>
                         </ModalFooter>
                    </ModalContent>
               </Modal>
          </>
     );
};




const TakePhotosWithAccordions = () => {


     const [imageUrls, setImageUrls] = useState([]);
     const fileInputRef = useRef(null);

     function handleImageSelect() {
          fileInputRef.current.click();
     }

     const [data, setData] = useState([
          {
               name: 'Exterior',
               level: 1,
               id: 1,
               folders: [
                    {
                         name: 'Balcony',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Entrance Porch',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Front Porch',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Patio',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pool',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pool Deck',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Rear Porch',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Shed',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
               ]
          },
          {
               name: 'Common Spaces',
               level: 1,
               id: 2,
               folders: [
                    {
                         name: 'Bonus Room',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Den',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Dining Area',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Eat in kitchen',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Entry Foyer',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Family Room',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Garage',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Hallway',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Kitchen',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Living Room',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Office',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Staircase',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Stairlobby',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Sunroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
               ]
          },
          {
               name: 'Bedroom',
               level: 1,
               id: 3,
               folders: [
                    {
                         name: 'Front-left Bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Front-right bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Guest Bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Master Bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Middle-left bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Middle-right bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Rear-left bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Rear-middle bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Rear-right bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Spare bedroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
               ]
          },
          {
               name: 'Bathrooms',
               level: 1,
               id: 5,
               folders: [
                    {
                         name: 'Guest Bathroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Hallway bathroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Master Bathroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pool bathroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Spare bathroom',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
               ]
          },
          {
               name: 'Utility/Closets',
               level: 1,
               id: 6,
               folders: [
                    {
                         name: 'Air-handler unit closet',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Elevator lobby',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Hallway closet',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Laundary Room',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Master Bedroom Closet',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Mechanical Closet',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pantry walk-in',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pantry Closet',
                         images: [],
                         folders: [
                              {

                              }
                         ]
                    },
               ]
          },
     ]);

     function handleImageUpload(e) {
          const files = e.target.files;
          if (files) {
               const urls = Array.from(files).map(file => URL.createObjectURL(file));
               setImageUrls(prevImageUrls => [...prevImageUrls, ...urls]);
          }
     };

     const addFolder = (name, parentId, onClose) => {
          const newFolder = {
               name: name,
               id: generateUniqueId(),
               folders: [], // Subfolders are initially empty
          };

          const newData = data.map((el) => {
               if (el.id === parentId) {
                    return {
                         ...el,
                         folders: [...el.folders, newFolder],
                    };
               }
               else if (el.folders && el.folders.length > 0) {
                    return {
                         ...el,
                         folders: addFolderToFolder(el.folders, parentId, newFolder),
                    };
               }
               return el;
          });

          setData(newData);
          onClose();
     };


     // Helper function to add a folder to a folder's subfolders
     const addFolderToFolder = (folders, parentId, newFolder) => {
          return folders.map((folder) => {
               if (folder.id === parentId) {
                    return {
                         ...folder,
                         folders: [...folder.folders, newFolder],
                    };
               }
               else if (folder.folders && folder.folders.length > 0) {
                    // Recursively search for the parent folder in subfolders
                    return {
                         ...folder,
                         folders: addFolderToFolder(folder.folders, parentId, newFolder),
                    };
               }
               return folder;
          });
     };



     const renderFolders = (folders) => {
          if (folders && folders.length > 0) {
               return folders.map((folder) => (
                    <AccordionItem key={folder.id}>
                         <h2>
                              <AccordionButton>
                                   <Box flex="1" textAlign="left">
                                        <Box display='flex' justifyContent='space-between' w='full'>
                                             <Box fontWeight={500}>
                                                  {folder.name}
                                             </Box>
                                             <Box display='flex'>
                                                  <Box p={1} pr={2}>
                                                       <FaCamera />
                                                  </Box>
                                                  <Box p={1} pr={2}>
                                                       <FaImage onClick={handleImageSelect} />
                                                       <Input
                                                            type="file"
                                                            accept="image/*"
                                                            ref={fileInputRef}
                                                            style={{ display: 'none' }}
                                                            onChange={handleImageUpload}
                                                            multiple
                                                       />
                                                  </Box>
                                                  <Box p={1} pr={2}>
                                                       <Menu>
                                                            <MenuButton bg={'white'}>
                                                                 <BsThreeDotsVertical />
                                                            </MenuButton>
                                                            <MenuList>
                                                                 <MenuItem>
                                                                      <InputModal onAdd={addFolder} parentId={folder.id} />
                                                                 </MenuItem>
                                                            </MenuList>
                                                       </Menu>
                                                  </Box>
                                             </Box>
                                        </Box>
                                   </Box>
                                   <AccordionIcon />
                              </AccordionButton>
                         </h2>
                         <AccordionPanel pb={4}>
                              <Accordion allowToggle>
                                   {imageUrls.map((imageUrl, index) => (
                                        <Avatar size={'lg'} borderRadius={0} m={1} key={index} src={imageUrl} alt={`Image ${index}`} />
                                   ))}
                                   {renderFolders(folder.folders)}
                              </Accordion>
                         </AccordionPanel>
                    </AccordionItem>
               ));
          }
     };

     return (
          <Box bg={'white'} w={'90%'} m={'auto'} p={3}>
               <Accordion defaultIndex={[0]} allowToggle>
                    {data.map((elem) => (
                         <AccordionItem key={elem.id}>
                              <h2>
                                   <AccordionButton>
                                        <Box flex="1" textAlign="left">
                                             <Box display='flex' justifyContent='space-between' w='full'>
                                                  <Box fontWeight={500}>
                                                       {elem.name}
                                                  </Box>
                                                  <Box p={1} pr={2}>
                                                       <Menu>
                                                            <MenuButton bg={'white'}>
                                                                 <BsThreeDotsVertical />
                                                            </MenuButton>
                                                            <MenuList>
                                                                 <MenuItem>
                                                                      <InputModal onAdd={addFolder} parentId={elem.id} />
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
                                        {renderFolders(elem.folders)}
                                   </Accordion>
                              </AccordionPanel>
                         </AccordionItem>
                    ))}
               </Accordion>
          </Box>
     );
};



export { TakePhotosWithAccordions };