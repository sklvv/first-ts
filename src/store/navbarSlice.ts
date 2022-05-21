import { createSlice } from "@reduxjs/toolkit";
import { INavbar } from "../types/navbarTypes";

const initialState: INavbar = {
  openDrawer: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setOpenDrawer: (state: INavbar) => {
      state.openDrawer = !state.openDrawer;
    },
  },
});
export default navbarSlice.reducer;
export const { setOpenDrawer } = navbarSlice.actions;
