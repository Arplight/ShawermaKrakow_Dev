import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../../Languages/i18n";

const languageSlice = createSlice({
  name: "language",
  initialState: {},
  reducers: {
    languageHandler: {
      reducer(state, action) {
        if (action.payload === "pl") {
          i18n.changeLanguage("pl");
        } else {
          i18n.changeLanguage("en");
        }
      },
    },
  },
});

export default languageSlice.reducer;
export const { languageHandler } = languageSlice.actions;
