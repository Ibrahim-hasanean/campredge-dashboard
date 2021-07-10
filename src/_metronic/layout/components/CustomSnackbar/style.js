import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  alert: {
    "&.MuiAlert-filledError": {
      backgroundColor: "red"
    },
    "& > .MuiAlert-message": {
      padding: "11px 0"
    }
  }
}));
