import { Circle } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  InputLabel,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setNoteCategory, setNoteText } from "../../store/notesSlice";
import { styles } from "./styles";
const DescCreateNote = () => {
  const { body, category } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNoteText(e.target.value));
  };
  const handleCategory = (e: string) => {
    dispatch(setNoteCategory(e));
  };
  return (
    <Box sx={styles.create_container}>
      <TextField
        multiline
        sx={styles.input}
        maxRows={4}
        label="Note"
        value={body}
        onChange={handleText}
      />
      <Box>
        <FormControl>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            sx={styles.select}
            value={category}
            onChange={(e) => handleCategory(e.target.value)}
          >
            <MenuItem value={"1"} sx={styles.select_item}>
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
      <Button variant="contained" sx={styles.btn}>
        Add note!
      </Button>
    </Box>
  );
};

export default DescCreateNote;
