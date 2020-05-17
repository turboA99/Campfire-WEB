import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  useRouteMatch
} from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "./Components/AppBar.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import {
  green,
  orange,
  purple,
  red,
  blue,
  yellow,
  pink
} from "@material-ui/core/colors";

import Settings from "./Pages/Settings";
import Information from "./Pages/Information/Information";
import App_rules from "./Pages/Information/App-rules";

const history = useHistory;
const location = useLocation;

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#252525"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: "#ff9100"
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    warning: {
      main: "#ff0000"
    },
    background: {
      default: "#000000"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

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
    // necessary for content to be below app bar
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
    borderRadius: "20px",
    backgroundColor: "#303030",
    width: "45%",
    display: "inline-grid",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

export default function App() {
  const classes = useStyles();
  const [NowOpened, SetNowOpened] = useState("Settings");
  useEffect(() => {
    document.title = NowOpened;
  }, [NowOpened]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Router>
          <AppBar
            SetSelected={SetNowOpened}
            Selected2={NowOpened}
            Selected={"Other"}
          />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route path="/Settings">
                <Settings />
              </Route>
              <Route path="/Information">
                <Information />
                <App_rules />
              </Route>
              <Route path="/Information/App-rules">
                <Information />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}
