import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
	project: [],
};

interface project {
	title: string;
	image?: string;
	intro: string;
	description: string;
	stack: string;
}

export const getProjectList = createAction<project>("GET_PROJECT_LIST");

const ResumeReducer = createReducer(initialState, {
	[getProjectList.type]: (state, { payload }) => {
		state.project = payload;
	},
});

export const actionCreator = {
	getProjectList,
};

export default ResumeReducer;
