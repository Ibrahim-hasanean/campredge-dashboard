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
  formControl: {
    margin: "0px 10px",
    minWidth: 120
  },
  options: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  header: {
    padding: "20px 0px"
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
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px 0px",
    width: "100%"
  },
  editeIcon: {
    color: "#c3c34a"
  },
  alert: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "15px 0px",
    height: "50px"
  },
  deleteContainer: {
    padding: "30px"
  },
  vilage: {
    color: "green"
  },
  editeForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "30px",
    width: 400
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
    border: "1px solid red"
  },
  village: {
    width: 700,
    padding: "20px"
  }
}));

export default useStyle;
