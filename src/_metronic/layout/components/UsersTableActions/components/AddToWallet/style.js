import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    "& > div": {
      margin: "0 5px"
    }
  }
}));
