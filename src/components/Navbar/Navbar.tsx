import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { auth } from "../../lib/firebase";
import { setOpenDrawer } from "../../store/navbarSlice";
import { logOut } from "../../store/userSlice";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import { styles } from "./styles";
const Navbar: React.FC = () => {
  const user = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const handleClick = async () => {
    dispatch(logOut());
    await signOut(auth);
  };
  const handleOpen = () => {
    dispatch(setOpenDrawer());
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={styles.toolbar}>
          <Box>
            <Typography variant="h6" component="div">
              <NavLink style={styles.link} to="/">
                MyNotes
              </NavLink>
            </Typography>
          </Box>
          <Box sx={styles.descButtons}>
            {user.auth === true ? (
              <>
                <Button color="inherit">
                  <NavLink style={styles.link} to="/profile">
                    {user.email}
                  </NavLink>
                </Button>
                <Button color="inherit" onClick={handleClick}>
                  <NavLink style={styles.link} to="/">
                    Log Out
                  </NavLink>
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit">
                  <NavLink style={styles.link} to="login">
                    Login
                  </NavLink>
                </Button>
                <Button color="inherit">
                  <NavLink style={styles.link} to="register">
                    Register
                  </NavLink>
                </Button>
              </>
            )}
          </Box>
          <Box sx={styles.mobileButtons}>
            <IconButton color="inherit" onClick={handleOpen}>
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileDrawer />
      <Container sx={styles.wrapper}>
        <Outlet />
      </Container>
    </>
  );
};

export default Navbar;
