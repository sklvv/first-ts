import { styles } from "./styles";
import React from "react";
import { useAppSelector } from "../../hooks";
import { Box } from "@mui/material";

const ProfilePage = () => {
  const { email, uid } = useAppSelector((state) => state.user);
  return (
    <>
      <Box>ProfilePage</Box>
      <Box> {email}</Box>
      <Box>{uid}</Box>
    </>
  );
};

export default ProfilePage;
