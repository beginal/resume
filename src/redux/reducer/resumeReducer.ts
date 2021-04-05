import { createAction, createReducer } from "@reduxjs/toolkit";
import { projectType, skillsType, postsType } from "types";

const initialState = {
	project: [],
	skills: [],
	posts: [],
};

export const getProjectList = createAction<projectType>("GET_PROJECT_LIST");
export const getSkillsList = createAction<skillsType>("GET_SKILLS_LIST");
export const getPostsList = createAction<postsType>("GET_POSTS_LIST");

const ResumeReducer = createReducer(initialState, {
	[getProjectList.type]: (state, { payload }) => {
		state.project = payload;
	},
	[getSkillsList.type]: (state, { payload }) => {
		state.skills = payload;
	},
	[getPostsList.type]: (state, { payload }) => {
		state.posts = payload;
	},
});

export const actionCreator = {
	getProjectList,
	getPostsList,
};

export default ResumeReducer;
