import React, { useEffect } from "react";
import { styles } from "./styles";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setEmail, setPass, setConfPass } from "../../store/registerSlice";
import { IHandleChange } from "../../types/registerTypes";
import CustomError from "../../components/CustomError/CustomError";
import { UserRegister, setError } from "../../store/userSlice";

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { email, ConfPassword, password } = useAppSelector(
    (state) => state.register
  );
  const { error, auth } = useAppSelector((state) => state.user);
  let navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/profile");
    }
  }, [auth, navigate]);
  const handleEmail: IHandleChange = (str) => {
    dispatch(setEmail(str));
  };
  const handlePass: IHandleChange = (str) => {
    dispatch(setPass(str));
  };
  const handleConfPass: IHandleChange = (str) => {
    dispatch(setConfPass(str));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== ConfPassword) {
      dispatch(setError("Password isnt compare"));
    } else if (password === ConfPassword) {
      await dispatch(
        UserRegister({
          email,
          password,
          ConfPassword,
          error,
        })
      );
    }
  };

  return (
    <Box sx={styles.loginContainer}>
      <Box sx={styles.titleContainer}>
        <Typography>Register!</Typography>
      </Box>
      {error.length !== 0 ? <CustomError>{error}</CustomError> : <></>}
      <Box sx={styles.formContainer}>
        <form
          style={styles.formItems}
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
            required={true}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required={true}
            onChange={(e) => handlePass(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={ConfPassword}
            required={true}
            onChange={(e) => handleConfPass(e.target.value)}
          />
          <button style={styles.btn}>
            <Button component="span" variant="outlined" sx={styles.muiBtn}>
              Create an account
            </Button>
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterPage;
