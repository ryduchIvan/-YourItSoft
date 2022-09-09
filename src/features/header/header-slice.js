import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
	name: "@@search",
	initialState: {
		search: ""
	},
	reducers: {
		addToSearch: (state, action) => {
			state.search = action.payload;
		}
	}
})
//Action
export const { addToSearch } = searchSlice.actions;
//Select
export const selectSearch = store => store.search;
//Reducer 
export const searchReducer = searchSlice.reducer;