import { styles } from "./styles";
import React from "react";
import { useAppSelector } from "../../hooks";
import { Box, Button, Divider, Typography } from "@mui/material";
import DescCreateNote from "../../components/DecsCreateNote/DescCreateNote";
import MobileCreateNote from "../../components/MobileCreateNote/MobileCreateNote";

const ProfilePage = () => {
  const { email, uid } = useAppSelector((state) => state.user);
  return (
    <Box>
      <DescCreateNote />
      <MobileCreateNote />
      <Typography variant="h5" sx={{ textAlign: "start" }}>
        Notes
      </Typography>
      <Divider />
    </Box>
  );
};

export default ProfilePage;
