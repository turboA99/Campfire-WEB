import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { Styles } from "/src/theme/custom/App";

function SettingListTitle(props) {
  const classes = Styles();
  return (
    <Fragment>
      <Typography
        variant={props.variant}
        paragraph
        color="textSecondary"
        className={classes.SettingListTitle}
      >
        {props.children}
      </Typography>
      <Divider />
    </Fragment>
  );
}
function SettingsMainWindow(props) {
  const classes = Styles();
  return (
    <List
      style={{ maxHeight: "80vh", overflow: "auto" }}
      className={classes.panel}
    >
      <SettingListTitle variant="h5">{props.title}</SettingListTitle>
      {props.children}
    </List>
  );
}
function NumberRule(props) {
  return (
    <div style={{ display: "flex", marginTop: "1rem" }}>
      <Typography
        color="textSecondary"
        style={{
          marginLeft: "1rem",
          fontSize: "2.5rem"
        }}
      >
        {props.number}
      </Typography>
      <Typography
        style={{
          margin: "1rem"
        }}
      >
        {props.children}
      </Typography>
    </div>
  );
}

export default function Rules() {
  const classes = Styles();
  return (
    <Fragment>
      <SettingsMainWindow title="Rules of moderation">
        <Typography className={classes.rule} style={{ marginTop: "1rem" }}>
          Great power comes with great responsibility. Please read all the rules
          for moderators and use privileges for the benefit of the community. If
          you violate the rules of moderation, your account will be blocked for
          a long time and may be deprived of the right to moderate in the
          future. Administrators can see deleted posts and take action if a
          moderator has broken the rules.
        </Typography>
        <NumberRule number="1">
          Don't be too strict. Remember that we do not have a totalitarian
          regime. Don't delete publications and don't block users for every
          little thing.
        </NumberRule>
        <NumberRule number="2">
          You cannot use the privileges of moderation for personal likes or
          dislike. For example, you cannot delete a post because you personally
          don't like the author of the post.
        </NumberRule>
        <NumberRule number="3">
          When changing or allowing a fandom remember that the fandom exists in
          several languages. Don't use any language other than English in the
          pictures and name.
        </NumberRule>
        <NumberRule number="4">
          Write clear and detailed comments. It is important that users
          understand why the publication was blocked, tag was deleted, etc.
        </NumberRule>
        <NumberRule number="5">
          When editing and rejecting the fandom, be sure to write a comment in
          English. If you write a comment in another language many people will
          not understand.
        </NumberRule>
        <NumberRule number="6">
          Marking publications as important is possible. But do so ONLY if it is
          a really important publication and everyone interested in fandom needs
          to know. Example: news from game developers. Important publications
          are not fan art, guides, pictures, etc.
        </NumberRule>
        <NumberRule number="7">
          Add only related links to fandom. Such links are: official website,
          wiki page, tweeter, forum, discord and similar. It is forbidden to add
          links that are not common to the fandom, such as a custom channel on
          YouTube or twitch, third-party servers or similar. It is also strictly
          forbidden to add links to pirated content.
        </NumberRule>
        <NumberRule number="8">
          You can delete publications that have a lot of negative karma or
          poor-quality publications, but only in cases where it does not go
          against the first rule of moderation.
        </NumberRule>
        <NumberRule number="9">
          Real and additional names of the fandom that can be used for
          searching. Only add meaningful additional names to fandoms. Example
          for the Campfire fandom - cf, Camp, Camp fire.
        </NumberRule>
      </SettingsMainWindow>
    </Fragment>
  );
}
