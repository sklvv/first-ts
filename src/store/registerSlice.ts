import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegister } from "../types/registerTypes";

const initialState: IRegister = {
  email: "",
  password: "",
  ConfPassword: "",
  error: "",
};
const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setEmail: (state: IRegister, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPass: (state: IRegister, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setConfPass: (state: IRegister, action: PayloadAction<string>) => {
      state.ConfPassword = action.payload;
    },
  },
  extraReducers: {},
});
export default registerSlice.reducer;
export const { setEmail, setPass, setConfPass } = registerSlice.actions;
