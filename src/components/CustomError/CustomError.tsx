import React from "react";
import { Typography } from "@mui/material";
import { styles } from "./styles";
interface IProps {
  children: React.ReactNode;
}
const CustomError = (props: IProps) => {
  return <Typography sx={styles.err}>{props.children}</Typography>;
};

export default CustomError;
