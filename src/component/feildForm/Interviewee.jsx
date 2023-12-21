import React from "react";
import {
  Box,
  FormControl,
  Input,
  Button,
  Heading,
  SimpleGrid,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
} from "@chakra-ui/react";
import "react-quill/dist/quill.snow.css";
import ReactSelect from "react-select";
import { FormLabel } from "@chakra-ui/react";

const contactMethodOptions = [
  { value: "present", label: "Present at Site" },
  { value: "phone", label: "Via Phone" },
  { value: "video", label: "Via Video" },
  { value: "none", label: "No One Present" },
];

const titleOptions = [
  { value: "mr", label: "Mr." },
  { value: "mrs", label: "Mrs." },
  { value: "miss", label: "Miss" },
  // Add more title options here
];

const roofingOptions = [
  "Roofing Contract",
  "General Contract",
  "Mitigation Contract",
  "Owner Leak Detection Company",
  "Plumber",
  "Electrician",
  "Public Adjuster",
  "PA Estimator",
  "PA",
  "Intern",
  "Loss Consultant",
  "Owner Attorney",
  "Attorney Representative",
  "Paralegal",
];

const interviewSignificanceOptions = [
  { value: "provided_access", label: "Interviewee Provided Access" },
  { value: "provided_info", label: "Interviewee Provided Info" },
  { value: "access_and_info", label: "Interviewee Provided Access and Info" },
];

function Interviewee({ form, setForm }) {

    const interviewees = form.interviewee;
  
    const handleAddInterview = () => {
      const nextInterviewId = `Interviewee ${interviewees.length + 1}`;
      const newInterviewData = {
        id: nextInterviewId,
        contactMethod: "",
        buildingType: "",
        title: "",
        firstName: "",
        lastName: "",
        roofingContract: "",
        companyName: "",
        interviewSignificance: "",
        frontBusinessCard: null,
        backBusinessCard: null,
        documentImage: null,
      };
  
      // Use setForm to update the form in the parent component
      setForm((prevForm) => {
        const newForm = { ...prevForm };
        newForm.interviewee.push(newInterviewData);
        return newForm;
      });
    };
  
    const handleContactMethodChange = (selectedOption, interviewId) => {
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, contactMethod: selectedOption.value }
          : interview
      );
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    
    const handleTitleChange = (selectedOption, interviewId) => {
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, title: selectedOption.value }
          : interview
      );
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    
    const handleFirstNameChange = (value, interviewId) => {
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, firstName: value }
          : interview
      );
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    
    const handleLastNameChange = (event, interviewId) => {
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, lastName: event.target.value }
          : interview
      );
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    
    const handleRoofingContractChange = (selectedOption, interviewId) => {
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, roofingContract: selectedOption.value }
          : interview
      );
 
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    

    const handleBuildingTypeChange = (selectedOption, interviewId) => {
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, buildingType: selectedOption.value }
          : interview
      );
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    
    const handleCompanyNameChange = (event, interviewId) => {
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, companyName: event.target.value }
          : interview
      );
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    
    const handleInterviewSignificanceChange = (selectedOption, interviewId) => {
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, interviewSignificance: selectedOption.value }
          : interview
      );
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    
    const handleFrontBusinessCardUpload = (event, interviewId) => {
      const file = event.target.files[0];
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, frontBusinessCard: file }
          : interview
      );
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    
    const handleBackBusinessCardUpload = (event, interviewId) => {
      const file = event.target.files[0];
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, backBusinessCard: file }
          : interview
      );
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };
    
    const handleDocumentImageUpload = (event, interviewId) => {
      const file = event.target.files[0];
      const updatedInterviews = interviewees.map((interview) =>
        interview.id === interviewId
          ? { ...interview, documentImage: file }
          : interview
      );
    
      setForm((prevForm) => ({
        ...prevForm,
        interviewee: updatedInterviews,
      }));
    };

    
  return (
    <Box>
      <Heading as="h2" fontWeight={500} textAlign='center' size="xl" mb={4}>
        Interviewee
      </Heading>

      <Accordion allowToggle>
        {interviewees.map((interview) => (
          <AccordionItem key={interview.id}>
            <h2>
            <AccordionButton bgColor={'blackAlpha.50'} _expanded={{ bg: 'blackAlpha.600', color: 'white' }}>
                <Box flex="1" textAlign="left" fontWeight={'bold'}>
                  {interview.id}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <SimpleGrid columns={[1, 2]} columnGap={4} rowGap={2} borderRadius={'10px'} boxShadow="0px 18px 40px 0px #7090B01F" p={3}>

              <FormControl isRequired>
                  <FormLabel>Building Type</FormLabel>
                  <ReactSelect
                    placeholder="Select Contact Method"
                    options={contactMethodOptions}
                  required
                  onChange={(selectedOption) =>
                    handleBuildingTypeChange(selectedOption, interview.id)
                  }
                  name="buildingType"
                    value={contactMethodOptions.find(
                      (option) => option.value === interview.buildingType
                    )}
                  />
                </FormControl>

                {/* Contact Method */}
                <FormControl isRequired>
                  <FormLabel>Contact Method</FormLabel>
                  <ReactSelect
                    placeholder="Select Contact Method"
                    options={contactMethodOptions}
                    required
                    isRequired
                    name="contactMethod"
                    onChange={(selectedOption) =>
                      handleContactMethodChange(selectedOption, interview.id)
                    }
                    value={contactMethodOptions.find(
                      (option) => option.value === interview.contactMethod
                    )}
                  />
                </FormControl>

                {/* Personal Information */}
                <FormControl isRequired mt={4}>
                  <label>Title</label>
                  <ReactSelect
                    placeholder="Select Mr. / Ms."
                    options={titleOptions}
                    required
                    isRequired
                    name="title"
                    onChange={(selectedOption) =>
                      handleTitleChange(selectedOption, interview.id)
                    }
                    value={titleOptions.find(
                      (option) => option.value === interview.title
                    )}
                  />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    value={interview.firstName}
                    required
                    name="firstName"
                    isRequired
                    onChange={(event) =>
                      handleFirstNameChange(event.target.value, interview.id)
                    }
                  />
                </FormControl>

                <FormControl isRequired mt={4}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    required
                    isRequired
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={interview.lastName}
                    onChange={(event) =>
                      handleLastNameChange(event, interview.id)
                    }
                  />
                </FormControl>

                {/* Roofing Contract */}
                <FormControl isRequired mt={4}>
                  <FormLabel>Roofing Contract</FormLabel>
                  <ReactSelect
                    options={roofingOptions.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    name="roofingContract"

                    required
                    isRequired
                    onChange={(selectedOption) =>
                      handleRoofingContractChange(selectedOption, interview.id)
                    }
                    placeholder="Select Roofing Contract"
                    value={{
                       label: roofingOptions.find((option) => {return (option == interview.roofingContract ? {value: option, label: option}: false)}),
                       value : roofingOptions.find((option) => {return (option == interview.roofingContract ? {value: option, label: option}: false)})}
                      }
                  />
                </FormControl>

                <FormControl isRequired mt={4} >
                  <FormLabel for="companyName">Company Name</FormLabel>
                  <Input
                    placeholder="Enter Company Name"
                    type="text"
                    required
                    name="companyName"
                    id="companyName"
                    isRequired
                    value={interview.companyName}
                    onChange={(event) =>
                      handleCompanyNameChange(event, interview.id)
                    }
                  />
                </FormControl>

                {/* Interview Significance */}
                <FormControl mt={4} isRequired>
                  <FormLabel>Interviewee Significance</FormLabel>
                  <ReactSelect
                    placeholder="Select Interviewee Significance"
                    options={interviewSignificanceOptions}
                    onChange={(selectedOption) =>
                      handleInterviewSignificanceChange(
                        selectedOption,
                        interview.id
                      )
                    }
                    required
                    isRequired
                    value={interviewSignificanceOptions.find(
                      (option) =>
                        option.value === interview.interviewSignificance
                    )}
                  />
                </FormControl>

                {/* Document Uploads */}
                <FormControl mt={4} isRequired>
                  <FormLabel>Business Card Front</FormLabel>
                  <Input
                    placeholder="Upload Business Card Front"
                    type="file"
                    accept="image/*"
                    required
                    isRequired
                    
                    onChange={(event) =>
                      handleFrontBusinessCardUpload(event, interview.id)
                    }
                  />
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel>Business Card Back</FormLabel>
                  <Input
                    placeholder="Upload Business Card Back"
                    type="file"
                    accept="image/*"
                    required
                    isRequired
                    onChange={(event) =>
                      handleBackBusinessCardUpload(event, interview.id)
                    }
                  />
                </FormControl>

                <FormControl mt={4} isRequired>
                  <FormLabel>Other Document</FormLabel>
                  <Input
                    placeholder="Upload Other Document"
                    type="file"
                    accept="image/*"
                    required
                    isRequired
                    onChange={(event) =>
                      handleDocumentImageUpload(event, interview.id)
                    }
                  />
                </FormControl>
              </SimpleGrid>
              <Divider my={4} />
              <Divider my={4} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <HStack alignItems="end" justifyContent="end">
        <Button
          onClick={handleAddInterview}
          bg="black"
          _hover={{ bg: "gray.700" }}
          color="white"
          rounded="md"
          ml={"auto"}
          my={4}
        
        >
          Add Interview
        </Button>
      </HStack>
    </Box>
  );
}

export default Interviewee;
