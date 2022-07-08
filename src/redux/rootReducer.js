import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({

    likeReducer,
    inputReducer,
    commentsReducer,
    appReducer
})