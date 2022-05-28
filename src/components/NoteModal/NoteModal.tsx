import {
  Box,
  Dialog,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemIcon,
  Button,
} from "@mui/material";
import { Circle } from "@mui/icons-material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setNoteCategory, setNoteText } from "../../store/notesSlice";
import { styles } from "./styles";
import { toggleModal } from "../../store/notesPageSlice";

const NoteModal = () => {
  const { modalIsOpen } = useAppSelector((state) => state.notesPage);
  const { body, category } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNoteText(e.target.value));
  };
  const handleCategory = (e: string) => {
    dispatch(setNoteCategory(e));
  };
  const handleClose = () => {
    dispatch(toggleModal());
  };
  return (
    <Dialog open={modalIsOpen} onClose={handleClose} fullWidth>
      <Box sx={styles.modal_items}>
        <Box sx={styles.input_container}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            minRows={4}
            label="Note"
            value={body}
            onChange={handleText}
          />
          <Box sx={styles.select_container}>
            <FormControl>
              <InputLabel>Category</InputLabel>
              <Select
                label="Category"
                sx={styles.select}
                value={category}
                onChange={(e) => handleCategory(e.target.value)}
                fullWidth
              >
                <MenuItem value={"1"}>
                  <ListItemIcon>
                    <Circle sx={{ color: "error.light" }} />
                  </ListItemIcon>
                </MenuItem>
                <MenuItem value={"2"}>
                  <ListItemIcon>
                    <Circle sx={{ color: "warning.light" }} />
                  </ListItemIcon>
                </MenuItem>
                <MenuItem value={"3"}>
                  <ListItemIcon>
                    <Circle sx={{ color: "info.light" }} />
                  </ListItemIcon>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={styles.btn}>
          <Button sx={styles.btn} variant="contained">
            Add note!
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default NoteModal;
