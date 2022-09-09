import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
	"@@users/load-posts",
	async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();
		return data
	}
)

export const postsSlice = createSlice({
	name: "@@posts",
	initialState: {
		status: "idle",
		posts: [],
		error: null,
		currentPosts: "",
		amountPotsOnPage: 5
	},
	reducers: {
		setCurrentPosts: (state, action) => {
			state.currentPosts = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(loadPosts.pending, (state, action) => {
			state.status = "loading";
			state.error = null
		})
		builder.addCase(loadPosts.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload
		})
		builder.addCase(loadPosts.fulfilled, (state, action) => {
			state.status = "received";
			state.posts = action.payload;
		})
	}
})

//Reducer 
export const postsReducer = postsSlice.reducer;
//Select
export const selectPosts = store => store.posts;
//Actions
export const { setCurrentPosts } = postsSlice.actions;