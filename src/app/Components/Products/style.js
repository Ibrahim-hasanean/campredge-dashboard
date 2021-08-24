import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  tableContainer: {
    width: "100%"
  },
  tableRow: {
    // "&:hover": {
    //   background: "#d8d4d4"
    // }
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
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: "30px 0px",
    width: "600px"
  },
  avatar: {
    width: "50px",
    height: "50px"
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

  formControl: {
    margin: "0px 10px",
    minWidth: 120
  },
  searchButton: {
    margin: "0px 10px"
  },
  header: {
    paddingBottom: "20px"
  },
  inputs: {
    width: "90%",
    textAlign: "right",
    margin: "10px 0px"
  },
  select: {
    width: "100%",
    textAlign: "right"
  },
  options: {
    width: "100%",
    padding: "5px"
  },
  maxMin: {
    width: "40%",
    margin: "0px 5px"
  },
  buttonsContainer: {
    width: "90%",
    margin: "5px 0px"
  },
  buttons: {
    fontSize: "14px",
    width: "30%",
    margin: "10px 0px"
  }
}));

export default useStyle;
