import { Button, Box } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../hooks";
import { toggleModal } from "../../store/notesPageSlice";
import NoteModal from "../NoteModal/NoteModal";
import { styles } from "./styles";
const MobileCreateNote = () => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleModal());
  };
  return (
    <>
      <Box sx={styles.mob_create_container}>
        <Button variant="contained" onClick={handleClick}>
          Create new note!
        </Button>
      </Box>
      <NoteModal />
    </>
  );
};

export default MobileCreateNote;
