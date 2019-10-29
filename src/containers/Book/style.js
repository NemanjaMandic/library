import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  imgWrapper: {
    width: "235px",
    margin: "0 auto"
  },
  img: {
    maxWidth: "100%",
    height: "auto"
  },
  content: {
    paddingLeft: 21
  }
}));

export default useStyles;
