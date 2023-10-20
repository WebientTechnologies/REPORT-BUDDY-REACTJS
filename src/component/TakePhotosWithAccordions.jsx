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
     Checkbox
} from "@chakra-ui/react";
import { useRef } from "react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaImage } from "react-icons/fa";


const generateUniqueId = () => {
     return Math.random().toString(36).substr(2, 9); // This generates a random 9-character ID
};


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





const UpdateNameModal = ({ onAdd, parentId }) => {

     const { isOpen, onOpen, onClose } = useDisclosure();
     const [name, setName] = useState('');
     const handleClick = () => {
          onAdd(parentId, name, onClose);
     };

     return (
          <>
               <Box onClick={onOpen}>
                    Change Folder Name
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


     const fileInputRef = useRef(null);
     const [selectedImg, setSelectedImg] = useState([]);
     const [isAllSelected, setIsAllSelected] = useState(false);
     let imgId = '';

     function handleImageSelect(parentId) {
          fileInputRef.current.click();
          imgId = parentId
     }

     const [data, setData] = useState([
          {
               name: 'Exterior',
               level: 1,
               images: [],
               id: 1,
               folders: [
                    {
                         name: 'Balcony',
                         images: [],
                         id: 1.1,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Entrance Porch',
                         images: [],
                         id: 1.2,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Front Porch',
                         images: [],
                         id: 1.3,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Patio',
                         images: [],
                         id: 1.4,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pool',
                         images: [],
                         id: 1.5,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pool Deck',
                         images: [],
                         id: 1.6,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Rear Porch',
                         images: [],
                         id: 1.7,
                         folders: [
                              {

                              }
                         ],
                    },
                    {
                         name: 'Shed',
                         images: [],
                         id: 1.8,
                         folders: [
                              {

                              }
                         ],
                    },
               ]
          },
          {
               name: 'Common Spaces',
               level: 1,
               images: [],
               id: 2,
               folders: [
                    {
                         name: 'Bonus Room',
                         images: [],
                         id: 2.000001,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Den',
                         images: [],
                         id: 2.2,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Dining Area',
                         images: [],
                         id: 2.3,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Eat in kitchen',
                         images: [],
                         id: 2.4,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Entry Foyer',
                         images: [],
                         id: 2.5,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Family Room',
                         images: [],
                         id: 2.6,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Garage',
                         images: [],
                         id: 2.7,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Hallway',
                         images: [],
                         id: 2.8,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Kitchen',
                         images: [],
                         id: 2.9,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Living Room',
                         images: [],
                         id: 2.10,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Office',
                         images: [],
                         id: 2.11,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Staircase',
                         images: [],
                         id: 2.12,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Stairlobby',
                         images: [],
                         id: 2.13,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Sunroom',
                         images: [],
                         id: 2.14,
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
               images: [],
               id: 3,
               folders: [
                    {
                         name: 'Front-left Bedroom',
                         images: [],
                         id: 3.111,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Front-right bedroom',
                         images: [],
                         id: 3.2,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Guest Bedroom',
                         images: [],
                         id: 3.3,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Master Bedroom',
                         images: [],
                         id: 3.4,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Middle-left bedroom',
                         images: [],
                         id: 3.5,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Middle-right bedroom',
                         images: [],
                         id: 3.6,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Rear-left bedroom',
                         images: [],
                         id: 3.7,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Rear-middle bedroom',
                         images: [],
                         id: 3.8,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Rear-right bedroom',
                         images: [],
                         id: 3.9,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Spare bedroom',
                         images: [],
                         id: 3.10,
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
               images: [],
               id: 4,
               folders: [
                    {
                         name: 'Guest Bathroom',
                         images: [],
                         id: 4.1,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Hallway bathroom',
                         images: [],
                         id: 4.2,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Master Bathroom',
                         images: [],
                         id: 4.3,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pool bathroom',
                         images: [],
                         id: 4.4,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Spare bathroom',
                         images: [],
                         id: 4.5,
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
               images: [],
               id: 5,
               folders: [
                    {
                         name: 'Air-handler unit closet',
                         images: [],
                         id: 5.1,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Elevator lobby',
                         images: [],
                         id: 5.2,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Hallway closet',
                         images: [],
                         id: 5.3,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Laundary Room',
                         images: [],
                         id: 5.4,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Master Bedroom Closet',
                         images: [],
                         id: 5.5,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Mechanical Closet',
                         images: [],
                         id: 5.6,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pantry walk-in',
                         images: [],
                         id: 5.7,
                         folders: [
                              {

                              }
                         ]
                    },
                    {
                         name: 'Pantry Closet',
                         images: [],
                         id: 5.8,
                         folders: [
                              {

                              }
                         ]
                    },
               ]
          },
     ]);

     console.log({ data });

     function updateFolderName(data, id, newName) {
          return data.map(item => {
               const newItem = { ...item };
               if (newItem.id === id && newItem.identity === 'newFolder') {
                    newItem.name = newName;
               }
               if (newItem.folders && newItem.folders.length > 0) {
                    newItem.folders = updateFolderName(newItem.folders, id, newName);
               }
               return newItem;
          });
     };

     const handleUpdateName = (id, newName, onClose) => {
          setData(updateFolderName(data, id, newName));
          onClose();
     };


     function handleImageUpload(e) {
          const files = e.target.files;
          if (files) {
               const newImageUrls = Array.from(files).map((file) => ({
                    id: generateUniqueId(), // You need a function to generate a unique ID
                    imgUrl: URL.createObjectURL(file),
               }));
               const updatedData = addImagesToFolder(data, newImageUrls);
               setData(updatedData);
          }
     };


     function addImagesToFolder(data, newImageUrls) {
          return data.map((folder) => {
               if (folder) {
                    if (folder.id === imgId) {
                         return {
                              ...folder,
                              images: Array.isArray(folder.images) ? [...folder.images, ...newImageUrls] : newImageUrls,
                         };
                    }
                    else if (folder.folders) {
                         return {
                              ...folder,
                              folders: addImagesToFolder(folder.folders, newImageUrls),
                         };
                    }
               }
               return folder;
          });
     };


     const handleChangeCheckBox = (folderId, val) => {
          const updatedData = [...selectedImg];
          const index = updatedData.findIndex((item) => item.folderId === folderId);

          if (index === -1) {
               updatedData.push({ folderId, values: [val] });
          }
          else {
               const valueIndex = updatedData[index].values.indexOf(val);
               if (valueIndex === -1) {
                    updatedData[index].values.push(val);
               }
               else {
                    updatedData[index].values.splice(valueIndex, 1);
               }
          }
          setSelectedImg(updatedData);
     };


     function removeImagesFromData(data, folderId, values) {
          console.log({ values });
          return data.map(item => {
               if (item.id === folderId) {
                    setSelectedImg(selectedImg.map(el => {
                         if (el.folderId === folderId) {
                              return {
                                   ...el,
                                   values: el.values.filter(item => !values.includes(item))
                              };
                         }
                         else {
                              return el;
                         }
                    }));
                    return { ...item, images: item?.images?.filter(image => !values?.includes(image.id)) };
               }
               else if (item.folders) {
                    return { ...item, folders: removeImagesFromData(item.folders, folderId, values) };
               }
               else {
                    return item;
               }
          });
     };


     function removeAllImages(data) {
          return data.map(item => {
               const newItem = { ...item };
               newItem.images = [];
               if (newItem.folders && newItem.folders.length > 0) {
                    newItem.folders = removeAllImages(newItem.folders);
               }
               return newItem;
          });
     }

     const deleteAllImages = () => {
          console.log('all images removed');
          setIsAllSelected(true);
     }

     const handleClearImg = (val) => {
          if (selectedImg.some(item => item?.folderId === val && item?.values?.length > 0)) {
               const selectedData = selectedImg.filter(item => item.folderId === val);
               console.log({ selectedData });
               const updatedData = removeImagesFromData(data, val, selectedData[0].values);
               setData(updatedData);
          }
     };

     const handleRemoveImages = () => {
          setData(removeAllImages(data));
          setIsAllSelected(false);
     };

     const addFolder = (name, parentId, onClose) => {
          const newFolder = {
               name: name,
               identity: 'newFolder',
               images: [],
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

     function removeFolderById(data, folderId) {
          // Use a recursive function to search for the folder with the given ID.
          function recursiveRemove(node) {
               if (node.id === folderId && node.identity === 'newFolder') {
                    console.log({ node });
                    return true;
               }
               if (node.folders) {
                    for (let i = 0; i < node.folders.length; i++) {
                         if (recursiveRemove(node.folders[i])) {
                              node.folders.splice(i, 1);
                              return true;
                         }
                    }
               }
               return false;
          }

          for (let i = 0; i < data.length; i++) {
               if (recursiveRemove(data[i])) {
                    data.splice(i, 1);
                    return;
               }
          }
     };


     const handleRemoveFolder = (val) => {
          console.log({ val });
          setData(removeFolderById(data, val));
     };


     const renderFolders = (folders) => {
          if (folders && folders.length > 1) {
               return folders.map((folder) => {
                    return (
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
                                                            <FaImage onClick={() => handleImageSelect(folder.id)} />
                                                            <Input
                                                                 type="file"
                                                                 accept="image/*"
                                                                 ref={fileInputRef}
                                                                 style={{ display: 'none' }}
                                                                 onChange={(e) => handleImageUpload(e, folder.id)}
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
                                                                      {
                                                                           folder.identity === 'newFolder' &&
                                                                           <MenuItem>
                                                                                <UpdateNameModal onAdd={handleUpdateName} parentId={folder.id} />
                                                                           </MenuItem>
                                                                      }
                                                                      {
                                                                           folder.identity === 'newFolder' &&
                                                                           <MenuItem>
                                                                                <Box onClick={() => handleRemoveFolder(folder.id)}>Remove Folder</Box>
                                                                           </MenuItem>
                                                                      }
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
                                   <Accordion>
                                        <Box display='flex' flexDir='column'>
                                             {
                                                  selectedImg.some(item => item.folderId === folder.id && item.values.length > 0) &&
                                                  <Button width={'fit-content'} onClick={() => handleClearImg(folder.id)} colorScheme="red" size={'sm'} isDisabled={!selectedImg.some(item => item.folderId === folder.id && item.values.length > 0)}>Remove</Button>
                                             }
                                             <Box display='flex' flexDir='row'>
                                                  {folder?.images?.map((imageUrl, index) => (
                                                       <Avatar size={'lg'} borderRadius={0} m={1} key={index} src={imageUrl.imgUrl} alt={`Image ${index}`} >
                                                            <AvatarBadge>
                                                                 <Checkbox
                                                                      onChange={() => handleChangeCheckBox(folder.id, imageUrl.id)}
                                                                      colorScheme="red"
                                                                      isChecked={selectedImg.some(item => item.folderId === folder.id && item.values.includes(imageUrl.id))}
                                                                 ></Checkbox>
                                                            </AvatarBadge>
                                                       </Avatar>
                                                  ))}
                                             </Box>
                                        </Box>
                                        {renderFolders(folder.folders)}
                                   </Accordion>
                              </AccordionPanel>
                         </AccordionItem>
                    );
               });
          }
     };

     return (
          <Box bg={'white'} w={'90%'} m={'auto'} p={3} pt={5} borderRadius='10px' mt='2%'>
               <Box p={3} textAlign={'right'} mb={5} display='flex' alignItems={'center'}>
                    <Checkbox isChecked={isAllSelected} size={'lg'} onChange={() => deleteAllImages()}></Checkbox>
                    <Button onClick={handleRemoveImages} ml={2} color="red" isDisabled={!isAllSelected} fontWeight={'bold'} size={'sm'}>Remove All</Button>
               </Box>
               <Accordion allowToggle>
                    {data?.map((elem) => (
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