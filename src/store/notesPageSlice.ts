import { createSlice } from "@reduxjs/toolkit";
import { INotesPage } from "../types/notesTypes";
const initialState: INotesPage = {
  modalIsOpen: false,
};
export const notesPageSlice = createSlice({
  name: "notesPage",
  initialState,
  reducers: {
    toggleModal: (state: INotesPage) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
  },
  extraReducers: (builder) => {},
});
export default notesPageSlice.reducer;
export const { toggleModal } = notesPageSlice.actions;
