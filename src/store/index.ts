import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import navbarSlice from "./navbarSlice";
import notesPageSlice from "./notesPageSlice";
import notesSlice from "./notesSlice";
import registerSlice from "./registerSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
    user: userSlice,
    navbar: navbarSlice,
    notes: notesSlice,
    notesPage: notesPageSlice,
  },
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
