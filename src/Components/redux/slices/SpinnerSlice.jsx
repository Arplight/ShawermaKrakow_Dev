import { createSlice } from "@reduxjs/toolkit";

const SpinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState: {
    isLoading: true,
  },
  reducers: {
    loadingHandler(state, action) {
      state.isLoading = action.payload;
    },
  },
});
export const { loadingHandler } = SpinnerSlice.actions;
export default SpinnerSlice.reducer;
