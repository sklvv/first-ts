import { Button, Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomError from "../../components/CustomError/CustomError";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setEmail, setPassword } from "../../store/loginSlice";
import { UserLogIn } from "../../store/userSlice";
import { styles } from "./styles";
const LoginPage = () => {
  let navigate = useNavigate();
  const { email, password } = useAppSelector((state) => state.login);
  const { error, auth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (auth) {
      navigate("/profile");
    }
  }, [auth, navigate]);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setEmail(e.target.value));
  };
  const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setPassword(e.target.value));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(UserLogIn({ email, password, error }));
  };
  return (
    <Box sx={styles.loginContainer}>
      <Box sx={styles.titleContainer}>
        <Typography>Welcome back!</Typography>
      </Box>
      {error.length !== 0 ? <CustomError>{error}</CustomError> : <></>}
      <Box sx={styles.form_container}>
        <form onSubmit={(e) => handleSubmit(e)} style={styles.form_items}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleEmail(e)}
            required={true}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handlePass(e)}
            required={true}
          />
          <button style={styles.btn}>
            <Button variant="outlined" sx={{ width: "100%" }}>
              Log in
            </Button>
          </button>
        </form>
      </Box>
      <Box sx={styles.redirect}>
        Or create an <Link to="/register"> account</Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
