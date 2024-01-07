import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Box,
  Image
} from '@chakra-ui/react';

const ImageEditor = () => {
  const editorRef = useRef(null);
  const inputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);
      openModal();
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImageSrc(null);
    setRotation(0);
    setZoom(1);
  };

  const handleSave = () => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImage();
      console.log(canvas.toDataURL());
      setImageSrc(canvas.toDataURL());
      closeModal();
    }
  };

  const handleEdit = () => {
    openModal();
  };

  return (
    <Box bg={'white'}>
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={inputRef}
      />
      {imageSrc && <Image src ={imageSrc} w={300} h={400}/>}

      <Button colorScheme="blue" onClick={handleEdit} disabled={!imageSrc}>
        Edit
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {imageSrc && (
              <div>
                <AvatarEditor
                  ref={editorRef}
                  image={imageSrc}
                  width={300} // Adjusted width to maintain 3:4 aspect ratio
                  height={400} // Adjusted height to maintain 3:4 aspect ratio
                  border={50}
                  color={[255, 255, 255, 0.6]} // RGBA
                  scale={zoom}
                  rotate={rotation}
                />
                <Text>Rotate</Text>
                <Slider
                  aria-label="image-rotation-slider"
                  defaultValue={rotation}
                  onChange={(value) => setRotation(value)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>

                <Text>Zoom</Text>
                <Slider
                  aria-label="image-zoom-slider"
                  defaultValue={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={(value) => setZoom(value)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </Box>
  );
};

export default ImageEditor;
