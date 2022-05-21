import React from "react";
import { styles } from "./styles";
import { Drawer, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { logOut } from "../../store/userSlice";
import { setOpenDrawer } from "../../store/navbarSlice";
const MobileDrawer = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const { openDrawer } = useAppSelector((state) => state.navbar);
  const handleLogOut = async () => {
    dispatch(logOut());
    await signOut(auth);
    dispatch(setOpenDrawer());
  };
  const handleClose = () => {
    dispatch(setOpenDrawer());
  };

  return (
    <Drawer anchor="right" open={openDrawer} onClose={handleClose}>
      <Box sx={styles.drawerBox}>
        {user.auth === true ? (
          <>
            <Button color="inherit" onClick={handleClose}>
              <NavLink style={styles.link} to="/profile">
                {user.email}
              </NavLink>
            </Button>
            <Button color="inherit" onClick={handleLogOut}>
              <NavLink style={styles.link} to="/">
                Log Out
              </NavLink>
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={handleClose}>
              <NavLink style={styles.link} to="login">
                Login
              </NavLink>
            </Button>
            <Button color="inherit" onClick={handleClose}>
              <NavLink style={styles.link} to="register">
                Register
              </NavLink>
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
