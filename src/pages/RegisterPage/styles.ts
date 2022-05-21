export const styles = {
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: "auto",
    width: { xs: "200px", md: "262px", lg: "400px" },
    height: { xs: "250px", md: "250px", lg: "350px" },
    padding: "20px",
    border: "1px solid",
    borderColor: "primary.main",
    borderRadius: "20px",
    paddingTop: "20px",
  },
  titleContainer: {
    height: "10%",
  },
  formContainer: {
    height: { xs: "80%", md: "80%", lg: "65%" },
    "& input": {
      outline: "none",
      padding: "8px",
      borderRadius: "10px",
      border: "1px solid",
      borderColor: "primary.main",
    },
  },
  formItems: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
  },

  btn: {
    padding: "0",
    backgroundColor: "inherit",
    outline: "none",
    border: "none",
  },
  muiBtn: { width: "100%", fontSize: { xs: "10px", md: "12px", lg: "16px" } },
};
