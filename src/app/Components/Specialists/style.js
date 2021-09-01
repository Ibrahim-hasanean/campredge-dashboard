import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
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
    width: "100px"
  },
  formControl: {
    margin: "0px 10px",
    minWidth: 120
  },
  options: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  searchButton: {
    margin: "0px 10px"
  },
  header: {
    paddingBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px",
    width: 600
  },
  inputs: {
    width: "90%",
    textAlign: "right",
    margin: "10px 0px"
  },
  buttonsContainer: {
    width: "90%"
  },

  buttons: {
    fontSize: "14px",
    width: "30%",
    margin: "10px 0px"
  },
  message: {
    padding: "30px"
  },
  leftRightMargin: {
    margin: "0px 10px"
  }
}));

export default useStyle;
