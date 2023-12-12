// yourReduxActions.js
import { createReducer } from "@reduxjs/toolkit";

const formSlice = createReducer(
 {
    sowData: {
      descriptionOfLoss: "",
      additionalDetails: "",
      scopeFromReceivedDocuments: "",
      scopeFromInterview: "",
      sowStatement: "",
      selectedStandardScope: null,
    },
    propertyData: {
      structures: [{}], // Initial structure with one element
      appraisersRecord: {
        expertNote: "",
        topographicMapNote: "",
      },
    },
    interviewee: [
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
      }
    ],
    qna: {
      questions: [
        {
          label: "When was the property purchased?",
          type: "text",
          answer: "",
        },
        {
          label: "When was the structure built?",
          type: "text",
          answer: "",
        },
        {
          label: "When was the roof last replaced?",
          type: "file",
          answer: "",
        },
      ],
      structures: [
        {
          name: "",
          rooms: [
            {
              name: "",
              damages: [
                {
                  type: "",
                  description: "",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    updateSowData: (state, action) => {
      state.sowData = { ...state.sowData, ...action.payload };
    },
    updatePropertyData: (state, action) => {
      const { field, subfield, value, index } = action.payload;

      if (field === "structures" && typeof index !== "undefined") {
        // Update a specific structure at the given index
        state.propertyData.structures[index][subfield] = value;
      } else {
        // Update other fields or new structures
        state.propertyData[field][subfield] = value;
      }
    },
    updateIntervieweeData: (state, action) => {
      const { field, value, interviewId } = action.payload;
      
      const interviewIndex = state.interviewee.findIndex(
        (interview) => interview.id === interviewId
      );

      if (interviewIndex !== -1) {
        state.interviewee[interviewIndex][field] = value;
      }
      if(field === 'interviewee') {
        state.interviewee = value;
      }
    },
    pushBackNewDataIntoInterview: (state, action) => {
      const { interviewId, newInterviewData } = action.payload;

        // If interviewId doesn't exist, push a new interview
        state.interviewee.push({
          id: interviewId,
          ...newInterviewData,
        });
      
    },
    updateQnaData: (state, action) => {
      const { field, value } = action.payload;
      state.qna[field] = value;
    }
  },
);

export default formSlice;
