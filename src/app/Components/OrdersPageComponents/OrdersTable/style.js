import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  tableRow: {
    "&:hover": {
      background: "#d8d4d4"
    }
  },
  tableHeader: {
    fontWeight: "600"
  },
  tableCells: {
    fontSize: "13px",
    fontWeight: "700"
  },
  table: {
    width: "100%"
  },
  productsContainer: {
    // width: "max-content"
  },
  avatar: {
    width: "70px",
    height: "70px"
  },
  formControl: {
    margin: "0px 10px",
    minWidth: 120
  },
  options: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  header: {
    padding: "0px 0px 30px 30px"
  },
  headerItems: {
    margin: "0px 10px"
  },
  select: {
    width: "100px"
  },
  searchButton: {
    margin: "0px 10px"
  },
  inputs: {
    margin: "0px 10px"
  },
  form: {
    minWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 15px"
  }
  // inputs: {
  //   width: "90%",
  //   textAlign: "right",
  //   margin: "10px 0px"
  // }
}));

export default useStyle;
