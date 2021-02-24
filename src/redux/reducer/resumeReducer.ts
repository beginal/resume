import { createAction, createReducer } from "@reduxjs/toolkit";
import { projectType, skillsType } from "types";

const initialState = {
	project: [],
	skills: [],
};

export const getProjectList = createAction<projectType>("GET_PROJECT_LIST");
export const getSkillsList = createAction<skillsType>("GET_SKILLS_LIST");

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
