import { combineReducers } from "@reduxjs/toolkit";
import routineReducer from "./routineReducer";
import settingsReducer from "./settingsReducer";

const contentReducer = combineReducers({
  routines: routineReducer,
});

const rootReducer = combineReducers({
  content: contentReducer,
  settings: settingsReducer,
});

export default rootReducer;
