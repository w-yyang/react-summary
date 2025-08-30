import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
	name: 'test',
	initialState: {
		count: 0
	},
	reducers: {
		addAction: (state) => {
			state.count++;
		},
		subAction: (state) => {
			state.count--;
		}
	}
});

export const { addAction, subAction } = testSlice.actions;

export default testSlice.reducer;

