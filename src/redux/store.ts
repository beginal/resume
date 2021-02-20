import { configureStore, combineReducers } from "@reduxjs/toolkit";
import resumeReducer from "redux/reducer/resumeReducer";

const rootReducer = combineReducers({
	resumeReducer,
});

const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
