import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  summaryDetailsContainer: {
    minHeight: "400px",
    marginTop: "30px",
    "& > div": {
      padding: "5px",
      width: "100%"
    }
  }
}));
