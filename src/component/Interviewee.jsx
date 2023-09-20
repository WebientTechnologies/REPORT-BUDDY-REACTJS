import React, { Fragment, useState } from "react";
import {
  Box,
  FormControl,
  Select,
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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactSelect from "react-select";

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

function Interviewee() {
  const [interviews, setInterviews] = useState([
    {
      id: "Interviewee 1",
      contactMethod: "",
      message: "",
      title: "",
      firstName: "",
      lastName: "",
      roofingContract: "",
      companyName: "",
      interviewSignificance: "",
      frontBusinessCard: null,
      backBusinessCard: null,
      documentImage: null,
    },
  ]);

  const handleAddInterview = () => {
    const nextInterviewId = `Interviewee ${interviews.length + 1}`;
    setInterviews([
      ...interviews,
      {
        id: nextInterviewId,
        contactMethod: "",
        message: "",
        title: "",
        firstName: "",
        lastName: "",
        roofingContract: "",
        companyName: "",
        interviewSignificance: "",
        frontBusinessCard: null,
        backBusinessCard: null,
        documentImage: null,
      },
    ]);
  };

  const handleContactMethodChange = (selectedOption, interviewId) => {
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].contactMethod = selectedOption.value;
    setInterviews(updatedInterviews);
  };

  const handleTitleChange = (selectedOption, interviewId) => {
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].title = selectedOption.value;
    setInterviews(updatedInterviews);
  };

  const handleFirstNameChange = (event, interviewId) => {
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].firstName = event.target.value;
    setInterviews(updatedInterviews);
  };

  const handleLastNameChange = (event, interviewId) => {
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].lastName = event.target.value;
    setInterviews(updatedInterviews);
  };

  const handleRoofingContractChange = (selectedOption, interviewId) => {
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].roofingContract = selectedOption.value;
    setInterviews(updatedInterviews);
  };

  const handleCompanyNameChange = (event, interviewId) => {
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].companyName = event.target.value;
    setInterviews(updatedInterviews);
  };

  const handleInterviewSignificanceChange = (selectedOption, interviewId) => {
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].interviewSignificance =
      selectedOption.value;
    setInterviews(updatedInterviews);
  };

  const handleFrontBusinessCardUpload = (event, interviewId) => {
    const file = event.target.files[0];
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].frontBusinessCard = file;
    setInterviews(updatedInterviews);
  };

  const handleBackBusinessCardUpload = (event, interviewId) => {
    const file = event.target.files[0];
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].backBusinessCard = file;
    setInterviews(updatedInterviews);
  };

  const handleDocumentImageUpload = (event, interviewId) => {
    const file = event.target.files[0];
    const updatedInterviews = [...interviews];
    const interviewIndex = updatedInterviews.findIndex(
      (interview) => interview.id === interviewId
    );
    updatedInterviews[interviewIndex].documentImage = file;
    setInterviews(updatedInterviews);
  };

  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Interviewee
      </Heading>

      <Accordion allowToggle>
        {interviews.map((interview) => (
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
              <SimpleGrid columns={[1, 2]} columnGap={4} rowGap={2}>
                {/* Contact Method */}
                <FormControl>
                  <label>Contact Method</label>
                  <ReactSelect
                    placeholder="Select Contact Method"
                    options={contactMethodOptions}
                    onChange={(selectedOption) =>
                      handleContactMethodChange(selectedOption, interview.id)
                    }
                    value={contactMethodOptions.find(
                      (option) => option.value === interview.contactMethod
                    )}
                  />
                </FormControl>

                {/* Personal Information */}
                <FormControl>
                  <label>Title</label>
                  <ReactSelect
                    placeholder="Select Mr. / Ms."
                    options={titleOptions}
                    onChange={(selectedOption) =>
                      handleTitleChange(selectedOption, interview.id)
                    }
                    value={titleOptions.find(
                      (option) => option.value === interview.title
                    )}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <label>First Name</label>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    value={interview.firstName}
                    onChange={(event) =>
                      handleFirstNameChange(event, interview.id)
                    }
                  />
                </FormControl>

                <FormControl mt={4}>
                  <label>Last Name</label>
                  <Input
                    type="text"
                    placeholder="Enter Last Name"
                    value={interview.lastName}
                    onChange={(event) =>
                      handleLastNameChange(event, interview.id)
                    }
                  />
                </FormControl>

                {/* Roofing Contract */}
                <FormControl mt={4}>
                  <label>Roofing Contract</label>
                  <Select
                    options={roofingOptions.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                    onChange={(selectedOption) =>
                      handleRoofingContractChange(selectedOption, interview.id)
                    }
                    placeholder="Select Roofing Contract"
                    value={roofingOptions.find(
                      (option) => option === interview.roofingContract
                    )}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <label>Company Name</label>
                  <Input
                    placeholder="Enter Company Name"
                    type="text"
                    value={interview.companyName}
                    onChange={(event) =>
                      handleCompanyNameChange(event, interview.id)
                    }
                  />
                </FormControl>

                {/* Interview Significance */}
                <FormControl mt={4}>
                  <label>Interviewee Significance</label>
                  <ReactSelect
                    placeholder="Select Interviewee Significance"
                    options={interviewSignificanceOptions}
                    onChange={(selectedOption) =>
                      handleInterviewSignificanceChange(
                        selectedOption,
                        interview.id
                      )
                    }
                    value={interviewSignificanceOptions.find(
                      (option) =>
                        option.value === interview.interviewSignificance
                    )}
                  />
                </FormControl>

                {/* Document Uploads */}
                <FormControl mt={4}>
                  <label>Business Card Front</label>
                  <Input
                    placeholder="Upload Business Card Front"
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      handleFrontBusinessCardUpload(event, interview.id)
                    }
                  />
                </FormControl>

                <FormControl mt={4}>
                  <label>Business Card Back</label>
                  <Input
                    placeholder="Upload Business Card Back"
                    type="file"
                    accept="image/*"
                    onChange={(event) =>
                      handleBackBusinessCardUpload(event, interview.id)
                    }
                  />
                </FormControl>

                <FormControl mt={4}>
                  <label>Other Document</label>
                  <Input
                    placeholder="Upload Other Document"
                    type="file"
                    accept="image/*"
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
