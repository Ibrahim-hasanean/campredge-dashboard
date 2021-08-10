import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
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
  }
}));

export default useStyle;
