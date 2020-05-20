import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppBar from "./Components/AppBar.js";

import { CssBaseline } from "@material-ui/core";

import Settings from "./Pages/Settings";
import Information from "./Pages/Information/Information";
import AppRules from "./Pages/Information/App-rules";
import AppRulesModerator from "./Pages/Information/App-rules-moderator";
import AppCreators from "./Pages/Information/App-creators";

/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
import { Styles } from "./theme/custom/App";
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

export default function App() {
  const classes = Styles(); /* !!!!!!!!!!!!!!!!!!!!!!!!! */
  const [NowOpened, SetNowOpened] = useState("Settings");

  useEffect(() => {
    document.title = NowOpened;
  }, [NowOpened]);

  return (
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
              <div style={{ display: "inline-flex" }}>
                <Information />
                <Switch>
                  <Route path="/Information/App-rules">
                    <AppRules />
                  </Route>
                  <Route path="/Information/App-rules-moderator">
                    <AppRulesModerator />
                  </Route>
                  <Route path="/Information/App-creators">
                    <AppCreators />
                  </Route>
                </Switch>
              </div>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
