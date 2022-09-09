import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadUsers = createAsyncThunk(
	"@@users/load-users",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch("https://jsonplaceholder.typicode.com/users");
			const data = await response.json();
			return data;
		} catch (error) {
			rejectWithValue("Error 404")
		}
	}
)



const initialState = {
	status: "idle",
	list: [],
	error: null,
	currentPage: 1,
	amountUsersOnPage: 4
}

export const usersSlice = createSlice({
	name: "@@users/",
	initialState: initialState,
	reducers: {
		showNextUsers: (state) => {
			state.currentPage++;
			if (state.currentPage > 3) {
				state.currentPage = 1
			}
		},
		showPreviousUsers: (state) => {
			state.currentPage--;
			if (state.currentPage < 1) {
				state.currentPage = 3
			}
		}
	},
	extraReducers: (builder) => {
		builder.addCase(loadUsers.pending, (state, action) => {
			state.status = "loading";
			state.error = null
		})
		builder.addCase(loadUsers.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload
		})
		builder.addCase(loadUsers.fulfilled, (state, action) => {
			state.status = "received";
			state.list = action.payload;//якщо запрос пройшов , добовляемо в list массив обьектив 
		})
	}
})

//Reducer
export const usersReducer = usersSlice.reducer;
//Store
export const selectUsers = store => store.users;
export const sortedUsers = (users, search) => {
	if (users) {
		return users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));//створуємо отсортирований массив по пошуку	
	}
}
//Action
export const { showNextUsers, showPreviousUsers } = usersSlice.actions;