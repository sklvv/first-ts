import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../types/notesTypes";

const initialState: INote = {
  body: "",
  category: "",
  id: "",
};
export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNoteText: (state: INote, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
    setNoteCategory: (state: INote, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
  extraReducers: {},
});
export const { setNoteText, setNoteCategory } = notesSlice.actions;

export default notesSlice.reducer;
