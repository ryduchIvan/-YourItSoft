import { configureStore } from "@reduxjs/toolkit";
//Reducers
import { usersReducer } from "./features/users/users-slice";
import { searchReducer } from "./features/header/header-slice";
import { postsReducer } from "./features/posts/posts-slice";
export const store = configureStore({
	reducer: {
		users: usersReducer,
		search: searchReducer,
		posts: postsReducer
	},
	devTools: true
});