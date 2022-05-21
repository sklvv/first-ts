import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { database } from "../lib/firebase";
import { ILogin } from "../types/loginTypes";
import { IRegister } from "../types/registerTypes";
import { IUser } from "../types/userTypes";

export const UserLogIn = createAsyncThunk<
  IUser,
  ILogin,
  { rejectValue: string }
>("user/UserLogIn", async ({ email, password }, { rejectWithValue }) => {
  const req = await signInWithEmailAndPassword(auth, email, password);
  const response: IUser = {
    auth: true,
    email: req.user.email,
    uid: req.user.uid,
    error: "",
  };

  return response;
});

export const UserRegister = createAsyncThunk<
  IUser,
  IRegister,
  { rejectValue: string }
>("user/UserRegister", async ({ email, password }, { rejectWithValue }) => {
  const req = await createUserWithEmailAndPassword(auth, email, password);
  const response: IUser = {
    auth: true,
    email: req.user.email,
    uid: req.user.uid,
    error: "",
  };
  set(ref(database, "users/" + req.user.uid), {
    email: req.user.email,
    uid: req.user.uid,
  });
  return response;
});

// export const UserLogIn = createAsyncThunk<Promise<void>, ILogin>(
//   "user/UserLogIn",
//   async ({ email, password, error }) => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//         console.log(userCredential.user);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }
// );

const initialState: IUser = {
  auth: false,
  email: "",

  uid: "",
  error: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state: IUser) => {
      state.auth = false;
      state.email = "";
      state.uid = "";
      localStorage.removeItem("user");
    },
    setError: (state: IUser, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    userPersistence: (state: IUser, action: PayloadAction<IUser>) => {
      console.log("init");
      state.auth = action.payload.auth;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UserLogIn.rejected, (state, action) => {
      state.error = action.error.message!;
    });
    builder.addCase(UserLogIn.fulfilled, (state, action) => {
      state.auth = true;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    });
    builder.addCase(UserRegister.rejected, (state, action) => {
      state.error = action.error.message!;
    });
    builder.addCase(UserRegister.fulfilled, (state, action) => {
      state.error = "";
      state.auth = true;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    });
  },
});
export const { logOut, setError, userPersistence } = userSlice.actions;
export default userSlice.reducer;
