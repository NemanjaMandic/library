import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  form: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "80%",
    padding: "20px 0 15px 44px"
  },
  margin: {
    margin: theme.spacing(1)
  },

  input: {
    display: "none"
  },
  uploadWrapper: {
    display: "flex",
    alignItems: "baseline"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 105,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end"
  },
  backButton: {
    color: "#FFF"
  },
  dateBirth: {
    width: "155px"
  },
  numberInput: {
    width: "155px"
  },
  saveBtn: {
    marginTop: "20px",
    width: "165px"
  },
  fileInput: {
    width: 263
  }
}));

export default useStyles;
