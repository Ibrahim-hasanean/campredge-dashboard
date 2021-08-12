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
    fontSize: "13px"
  },
  table: {
    minWidth: 650
  },
  productsContainer: {
    // width: "max-content"
  },
  avatar: {
    width: "70px",
    height: "70px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  options: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  header: {
    padding: "0px 30px 30px 0px;"
  },
  headerItems: {
    margin: "0px 10px"
  }
}));

export default useStyle;
