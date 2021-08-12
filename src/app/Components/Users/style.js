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
    fontSize: "13px"
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
  deleteUser: {
    padding: "20px 0px"
  }
}));

export default useStyle;
