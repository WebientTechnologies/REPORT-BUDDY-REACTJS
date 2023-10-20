import { createReducer } from "@reduxjs/toolkit";

export const dashboardReducer = createReducer(
     {
          dashboardProjects: [],
          dashboardProjectsLoading: false,
          dashboardProjectsError: false,
     },
     {
          getDashBoardProjectsDataRequest: (state) => {
               state.dashboardProjectsLoading = true;
          },
          getDashBoardProjectsDataSuccess: (state, action) => {
               console.log({ action });
               state.dashboardProjects = action.payload || [];
               state.dashboardProjectsError = false;
               state.dashboardProjectsLoading = false;
          },
          getDashBoardProjectsDataFail: (state, action) => {
               state.dashboardProjects = [];
               state.dashboardProjectsError = true;
               state.dashboardProjectsLoading = false;
          },
     }
);
