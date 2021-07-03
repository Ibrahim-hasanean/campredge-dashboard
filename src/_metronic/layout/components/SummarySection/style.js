import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  summarySectionContainer: {
    height: "400px",
    [theme.breakpoints.up("sm")]: {
      height: "300px"
    },
    [theme.breakpoints.up("lg")]: {
      height: "150px"
    }
  },
  firstCard: {
    background: "linear-gradient(135deg, #ED4886 1%, #B855A4 100%)"
  },
  secondCard: {
    background: "linear-gradient(135deg, #865FC0 0%, #5446BA 100%)"
  },
  thirdCard: {
    background: "linear-gradient(135deg, #46C5F1 0%, #6592DA 100%)"
  },
  fourthCard: {
    background: "linear-gradient(135deg, #FFB92D 1%, #F5805A 100%)"
  }
}));
