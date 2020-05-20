import { makeStyles } from "@material-ui/styles";
import {
  green,
  orange,
  purple,
  red,
  blue,
  yellow,
  pink
} from "@material-ui/core/colors";

export function Styles() {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    menuButton: {
      marginRight: 36
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    nested: {
      marginLeft: theme.spacing(7),
      transition: "all"
    },
    title: {
      flexGrow: 1
    },
    Bell: {
      marginRight: theme.spacing(2)
    },
    green: {
      color: "#fff",
      backgroundColor: green[500]
    },
    purple: {
      color: "#fff",
      backgroundColor: purple[500]
    },
    orange: {
      color: "#fff",
      backgroundColor: orange[500]
    },
    red: {
      color: "#fff",
      backgroundColor: red[500]
    },
    blue: {
      color: "#fff",
      backgroundColor: blue[500]
    },
    yellow: {
      color: "#fff",
      backgroundColor: yellow[900]
    },
    pink: {
      color: "#fff",
      backgroundColor: pink[500]
    },
    SettingsButton: {},
    SettingListTitle: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2)
    },
    panel: {
      borderRadius: "5px",
      backgroundColor: "#303030",
      justifyContent: "center",
      display: "inline-grid",
      margin: theme.spacing(2),
      height: "fit-content"
    },
    SliderLabel: {
      marginLeft: theme.spacing(7),
      position: "absolute",
      top: 0
    },
    rule: {
      marginLeft: "1rem",
      marginRight: "1rem"
    },
    link: {
      color: "#ff6c02"
    }
  }));

  return useStyles();
}
