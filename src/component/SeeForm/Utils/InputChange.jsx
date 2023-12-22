import React, { useState, useRef, useEffect } from "react";
import { Box, Button, HStack, Input } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import Select from "react-select";
import { quillModules } from "../../data";
import axios from "axios";
import { API_BASE_URL } from "../../../App";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const InputChange = ({
  inputType,
  options,
  defaultValue,
  placeholder,
  height,
  setCommentFelid,
  setLogFelid,
  fieldName,
  getFormData
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [quillValue, setQuillValue] = useState(defaultValue || ""); // Set your initial value here
  const [selectedOption, setSelectedOption] = useState(defaultValue || null); // For Select input
  const quillRef = useRef(null);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleQuillChange = (value) => {
    setQuillValue(value);
  };
  const token = localStorage.getItem("token") || '';
  let { projectId } = useParams();


  const handleSave = () => {
    axios.put(`${API_BASE_URL}/edit-form/${projectId}`, {
      fieldName,
      value: inputType === 'select' ?selectedOption.value : quillValue,
    },
    {
      headers:{
        Authorization: `Bearer ${JSON.parse(token)}`,
      }
    }
    ).then(async()=>{
     await getFormData();
     toast.success('Value changed sucessfully');
     toggleEdit();

    }).catch(async (e)=>{
      toast.error(e?.data?.message || 'Something went wrong');
      await getFormData(); 
    })
    // Handle save logic here
    // You can send the updated quillValue or selectedOption to your backend or update state as needed
    toggleEdit();
  };
  return (
    <Box>
      <HStack mb={2} gap={2}>
        <Button
          colorScheme="blue"
          size={"sm"}
          onClick={() => setCommentFelid(fieldName)}
        >
          Comments
        </Button>
        <Button
          colorScheme="blue"
          size={"sm"}
          onClick={() => setLogFelid(fieldName)}
        >
          Logs
        </Button>
        <Box>
        {isEditing ? (
          <div>
            <Button size={"sm"} colorScheme="teal" mr={2} onClick={handleSave}>
              Save
            </Button>
            <Button size={"sm"} colorScheme="gray" onClick={toggleEdit}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button size={"sm"} colorScheme="teal" onClick={toggleEdit}>
            Edit
          </Button>
        )}
      </Box>
      </HStack>

      {isEditing ? (
        inputType === "quill" ? (
          <ReactQuill
            style={{ height: height || "200px" }}
            modules={quillModules}
            theme="snow"
            readOnly={!isEditing}
            value={quillValue}
            placeholder={placeholder}
            onChange={handleQuillChange}
            ref={quillRef}
          />
        ) : inputType === "select" ? (
          <Select
            value={selectedOption}
            options={options}
            onChange={(selected) => setSelectedOption(selected)}
            placeholder={placeholder}
          />
        ) : (
          <Input
            type={inputType === "number" ? "number" :inputType ===  "text" ?"text" : 'date'}
            value={quillValue} // For text and number input types
            placeholder={placeholder}
            onChange={(e) => setQuillValue(e.target.value)}
          />
        )
      ) : inputType === "quill" ? (
        <ReactQuill
          style={{ height: height || "200px" }}
          modules={quillModules}
          theme="snow"
          value={defaultValue}
          placeholder={placeholder}
          readOnly
          scrollingContainer="body"
        />
      ) : inputType === "select" ? (
        <div>{defaultValue?.label}</div>
      ) : (
        <Input
        type={inputType === "number" ? "number" :inputType ===  "text" ?"text" : 'date'}
        value={quillValue} // For text and number input types
        placeholder={defaultValue}
        // isDisabled
        readOnly
        onChange={(e) => setQuillValue(e.target.value)}
      />      )}
    
    </Box>
  );
};

export default InputChange;
