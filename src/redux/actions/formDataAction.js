// yourReduxActions.js
import { createAction } from "@reduxjs/toolkit";

// Define your Redux action using createAction from Redux Toolkit
export const updateSowData = createAction("updateSowData");
export const updatePropertyData = createAction("updatePropertyData");
export const updateIntervieweeData = createAction("updateIntervieweeData");
export const updateQnaData = createAction("updateQnaData");
export const updateIntervieweeDataForImage = createAction('updateIntervieweeDataForImage');
export const pushBackNewDataIntoInterview = createAction('pushBackNewDataIntoInterview');

// You can also create other actions if needed
// export const anotherAction = createAction("ANOTHER_ACTION");
