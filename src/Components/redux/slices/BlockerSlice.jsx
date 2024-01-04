import { createSlice } from "@reduxjs/toolkit";

const BlockerSlice = createSlice({
  name: "Blocker",
  initialState: { currentBlock: null },
  reducers: {
    blockerSetter(state, action) {
      state.currentBlock = action.payload;
    },
  },
});

export default BlockerSlice.reducer;
export const { blockerSetter } = BlockerSlice.actions;
