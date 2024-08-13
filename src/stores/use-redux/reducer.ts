import { createSlice } from "@reduxjs/toolkit";

const initState = {
  value: '默认值'
};

const reducer = createSlice({
  name: 'reducer',
  initialState: initState,
  reducers: {
    changeVal(state, { payload }) {
      state.value = payload;
    }
  }
});

export const { changeVal } = reducer.actions;

export default reducer.reducer;
