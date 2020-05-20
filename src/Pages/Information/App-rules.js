import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Paper } from "@material-ui/core";

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
      <SettingsMainWindow title="Rules of app">
        <Typography className={classes.rule} style={{ marginTop: "1rem" }}>
          Please read all the rules of the application, it does not take much
          time, and it will help you to better understood how our community
          works.
        </Typography>
        <NumberRule number="1">
          Spam. Repeatly create similar publications or messages in the chat.
        </NumberRule>
        <Typography
          className={classes.rule}
          color="error"
          style={{ marginLeft: "1rem" }}
        >
          Forbidden
        </Typography>
        <Typography className={classes.rule}>
          -The user wrote "Hello" 5 times ian a row.
        </Typography>
        <Typography className={classes.rule}>
          -The user created 3 publications in a row in each of which is art on a
          game character.
        </Typography>
        <Typography
          className={classes.rule}
          style={{ marginLeft: "1rem", color: "#4caf50" }}
        >
          Allowed
        </Typography>
        <Typography className={classes.rule}>
          -The user wrote "Hello. How are you? What are you doing?" in three
          messages.
        </Typography>
        <Typography className={classes.rule}>
          -The user posted 5 different memes.
        </Typography>
        <NumberRule number="2">
          It is forbidden tu insult other users. Jokes are not prohibited, but
          don't fo too far. Joke without offending anyone.
        </NumberRule>
        <Typography
          className={classes.rule}
          color="error"
          style={{ marginLeft: "1rem" }}
        >
          Forbidden
        </Typography>
        <Typography className={classes.rule}>
          -The user directly used the rood word.
        </Typography>
        <Typography className={classes.rule}>
          -The user insults or makes fun of another (even without the rude
          words).
        </Typography>
        <Typography className={classes.rule}>
          User insults another using hidden rude words.
        </Typography>
        <Typography
          className={classes.rule}
          style={{ marginLeft: "1rem", color: "#4caf50" }}
        >
          Allowed
        </Typography>
        <Typography className={classes.rule}>
          -The user jokingly used a frivolous curse.
        </Typography>
        <Typography className={classes.rule}>
          -The user politely criticizes another.
        </Typography>
        <Typography className={classes.rule}>
          -The user used the mat, but hid part of the word.
        </Typography>
        <NumberRule number="3">
          Sabotaging is prohibited. Sabotaging includes: purposefully mocking
          other users, specifically interfere with chatting, cause problems with
          the application.
        </NumberRule>
        <Typography
          className={classes.rule}
          color="error"
          style={{ marginLeft: "1rem" }}
        >
          Forbidden
        </Typography>
        <Typography className={classes.rule}>
          -The user very often writes messages, interfering with the
          communication of others.
        </Typography>
        <Typography className={classes.rule}>
          -The user intentionally makes a large number of publications to hide
          strangers.
        </Typography>
        <Typography className={classes.rule}>
          -The user learned about a bug that leads to problems with others and
          began to actively use it.
        </Typography>
        <Typography
          className={classes.rule}
          style={{ marginLeft: "1rem", color: "#4caf50" }}
        >
          Allowed
        </Typography>
        <Typography className={classes.rule}>
          -The user accidentally reproduce a bug due to which others may have
          problems.
        </Typography>
        <Typography
          className={classes.rule}
          color="error"
          style={{ marginLeft: "1rem" }}
        >
          Forbidden
        </Typography>
        <Typography className={classes.rule}>
          -The user directly used the rood word.
        </Typography>
        <Typography className={classes.rule}>
          -The user insults or makes fun of another (even without the rude
          words).
        </Typography>
        <NumberRule number="4">
          Forbidden to publish pornography, immoral/illegal/shock content.
        </NumberRule>
        <Typography
          className={classes.rule}
          color="error"
          style={{ marginLeft: "1rem" }}
        >
          Forbidden
        </Typography>
        <Typography className={classes.rule}>
          -The publication on which the character is partially or completely
          naked.
        </Typography>
        <Typography className={classes.rule}>
          -The publication on which the character is not naked, but is in a
          defiant pose.
        </Typography>
        <Typography className={classes.rule}>
          -Pornographic story or text.
        </Typography>
        <Typography className={classes.rule}>
          -Link that leads to prohibited content.
        </Typography>
        <Typography
          className={classes.rule}
          style={{ marginLeft: "1rem", color: "#4caf50" }}
        >
          Allowed
        </Typography>
        <Typography className={classes.rule}>
          -Publication of people/characters in swimsuits, etc.
        </Typography>
        <Typography className={classes.rule}>
          -Screenshots taken on the pirated version of the program/game.
        </Typography>
        <NumberRule number="4">
          Forbidden off-topic/low quality/ meaningless publication. Publications
          are not related to fandom, meaningless polls.
        </NumberRule>
        <Typography
          className={classes.rule}
          color="error"
          style={{ marginLeft: "1rem" }}
        >
          Forbidden
        </Typography>
        <Typography className={classes.rule}>
          -Poll whether to post on a topic without a clear description.
        </Typography>
        <Typography className={classes.rule}>
          -Images of disgusting quality.
        </Typography>
        <Typography
          className={classes.rule}
          style={{ marginLeft: "1rem", color: "#4caf50" }}
        >
          Allowed
        </Typography>
        <Typography className={classes.rule}>
          -A survey with a full description of its purpose.
        </Typography>
        <Typography className={classes.rule}>
          -Publications about users of the fandom, although they are not related
          to the topic of the fandom.
        </Typography>
        <NumberRule number="6">
          Story spoilers must be placed under the spoiler card, and in the
          header of the card must be a warning.
        </NumberRule>
        <Typography
          className={classes.rule}
          color="error"
          style={{ marginLeft: "1rem" }}
        >
          Forbidden
        </Typography>
        <Typography className={classes.rule}>
          -The user revealed part of the plot without warning.
        </Typography>
        <Typography
          className={classes.rule}
          style={{ marginLeft: "1rem", color: "#4caf50" }}
        >
          Allowed
        </Typography>
        <Typography className={classes.rule}>
          -The user warned that reveals part of the plot and hid it under the
          spoiler if possible.
        </Typography>
        <NumberRule number="7">
          It is forbidden to use the app functions to the detriment. For
          example, to make a post multilingual if it may not be understood in
          other languages.
        </NumberRule>
        <Typography
          className={classes.rule}
          color="error"
          style={{ marginLeft: "1rem" }}
        >
          Forbidden
        </Typography>
        <Typography className={classes.rule}>
          -The user made a multilingual post in which an important part of the
          text is not in English.
        </Typography>
        <Typography className={classes.rule}>
          -The user marked the post with the character's art as important.
        </Typography>
        <Typography className={classes.rule}>
          -The user repeatedly complains about publications that do not violate
          the rules.
        </Typography>
        <Typography className={classes.rule}>
          -The user made a multilingual post in which there is a wall of
          English.
        </Typography>
        <Typography
          className={classes.rule}
          style={{ marginLeft: "1rem", color: "#4caf50" }}
        >
          Allowed
        </Typography>
        <Typography className={classes.rule}>
          -The user made a multilingual post in which there is an image with
          non-English text, but this text is not important for understanding the
          post.
        </Typography>
        <Typography className={classes.rule}>
          -The user made a multilingual post in which there is English text, but
          its only a couple of sentences.
        </Typography>
        <NumberRule number="8">
          It is forbidden to use additional accounts to bypass the blocking of
          the main account.
        </NumberRule>
        <Typography
          className={classes.rule}
          color="error"
          style={{ marginLeft: "1rem" }}
        >
          Forbidden
        </Typography>
        <Typography className={classes.rule}>
          -The user, after being blocked in the chat, returned to him on another
          account and continued communication.
        </Typography>
        <Typography
          className={classes.rule}
          style={{ marginLeft: "1rem", color: "#4caf50" }}
        >
          Allowed
        </Typography>
        <Typography className={classes.rule}>
          -The user uses additional accounts for his own purposes without
          violating other rules.
        </Typography>
      </SettingsMainWindow>
    </Fragment>
  );
}
