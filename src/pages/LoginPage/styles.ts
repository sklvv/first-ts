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
  form_container: {
    height: { xs: "60%", md: "60%", lg: "40%" },
    "& input": {
      outline: "none",
      padding: "8px",
      borderRadius: "10px",
      border: "1px solid",
      borderColor: "primary.main",
    },
  },
  form_items: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
  },
  redirect: {
    color: "inherit",
    fontSize: { xs: "12px", md: "16px" },
    "& a": { color: "inherit" },
  },
  btn: {
    padding: "0",
    backgroundColor: "inherit",
    outline: "none",
    border: "none",
  },
};
