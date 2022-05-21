import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin } from "../types/loginTypes";
const initialState: ILogin = {
  email: "",
  password: "",
  error: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state: ILogin, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state: ILogin, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});
export default loginSlice.reducer;
export const { setEmail, setPassword } = loginSlice.actions;
