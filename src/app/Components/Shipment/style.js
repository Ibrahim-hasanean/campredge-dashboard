import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  header: {
    paddingBottom: "20px"
  },
  tableContainer: {
    width: "100%"
  },
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
  avatar: {
    width: "70px",
    height: "70px"
  },
  editeIcon: {
    color: "#c3c34a"
  },
  deleteUser: {
    padding: "20px 0px"
  },
  activateIcon: {
    color: "green"
  },
  select: {
    width: "100%"
  },
  formControl: {
    margin: "0px 10px",
    minWidth: 120
  },
  options: {
    width: "100%",
    padding: "5px"
  },
  searchButton: {
    margin: "0px 10px"
  }
}));

export default useStyle;
