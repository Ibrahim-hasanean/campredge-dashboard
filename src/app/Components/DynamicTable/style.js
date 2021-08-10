import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  tableHeader: {
    fontWeight: "600"
  },
  tableCells: {
    fontSize: "13px"
  },
  table: {
    minWidth: 650
  }
}));

export default useStyle;
