import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./hoc/PrivateRoute";
import AppTheme from "./lib/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useAppDispatch } from "./hooks";
import { userPersistence } from "./store/userSlice";
const RegisterPage = React.lazy(
  () => import("./pages/RegisterPage/RegisterPage")
);
const ProfilePage = React.lazy(() => import("./pages/ProfilePage/ProfilePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (response) => {
      if (response) {
        dispatch(
          userPersistence({
            email: response.email,
            auth: true,
            error: "",
            uid: response.uid,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<RegisterPage />}></Route>
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <ProfilePage />
                  </PrivateRoute>
                }
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
