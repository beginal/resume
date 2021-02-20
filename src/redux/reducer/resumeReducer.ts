import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
	project: [],
	skills: [],
};

interface project {
	title: string;
	image?: string;
	intro: string;
	description: string;
	stack: string;
}

export const getProjectList = createAction<project>("GET_PROJECT_LIST");
export const getSkillsList = createAction<any[]>("GET_SKILLS_LIST");

const ResumeReducer = createReducer(initialState, {
	[getProjectList.type]: (state, { payload }) => {
		state.project = payload;
	},
	[getSkillsList.type]: (state, { payload }) => {
		state.skills = payload;
	},
});

export const actionCreator = {
	getProjectList,
};

export default ResumeReducer;
