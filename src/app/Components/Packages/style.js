import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
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
    minWidth: 650
  },
  avatar: {
    width: "70px",
    height: "70px"
  },
  editeIcon: {
    color: "#c3c34a"
  },
  delete: {
    padding: "20px 0px"
  },
  active: {
    color: "green"
  },
  button: {
    color: "white",
    fontWeight: "600",
    fontSize: "13px"
  },
  headers: {
    padding: "0px 0px 20px 0px"
  },
  form: {
    minWidth: "650px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "flex-start",
    flexWrap: "wrap",
    padding: "30px 15px"
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
  invalid: {
    border: "solid 1px red"
  },
  alert: {
    fontSize: "14px"
  }
}));

export default useStyle;
