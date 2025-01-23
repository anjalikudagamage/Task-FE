export const useNavbarStyles = () => ({
  appBar: {
    backgroundColor: "#333",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 20px",
  },
  button: {
    color: "white",
    backgroundColor: "#555",
    "&:hover": {
      backgroundColor: "#777",
    },
    padding: "10px 20px",
    textTransform: "none",
    fontSize: "16px",
    borderRadius: "4px",
  },
});
