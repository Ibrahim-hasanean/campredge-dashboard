import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  cardContainer: {
    width: "100%",
    height: "100%",
    color: "#fff",
    position: "relative"
  },
  cardTitle: {
    fontWeight: "bold"
  },
  cardIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    opacity: 0.2,
    width: "50%",
    height: "100%"
  }
}));
