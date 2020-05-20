import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import RowingIcon from "@material-ui/icons/Rowing";
import RulesIcon from "@material-ui/icons/Gavel";
import SecurityIcon from "@material-ui/icons/Security";
import GaleryIcon from "@material-ui/icons/FilterHdr";
import MailIcon from "@material-ui/icons/Mail";
import { Link as Links } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import { Styles } from "/src/theme/custom/App";

function SettingsMainWindow(props) {
  const classes = Styles();
  return (
    <List className={classes.panel}>
      <SettingListTitle variant="h5">{props.title}</SettingListTitle>
      {props.children}
    </List>
  );
}
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
function SettingsButton(props) {
  const classes = Styles();
  const [Selected] = React.useState(props.state);
  const handleClick = () => {};
  if (props.url) {
    return (
      <ListItem
        selected={Selected}
        onClick={handleClick}
        component={Links}
        href={props.link}
        className={classes.SettingsButtons}
        button
      >
        <ListItemIcon>
          <Avatar className={props.color}>{props.Icon}</Avatar>
        </ListItemIcon>
        <ListItemText
          style={{ width: "max-content", color: "#ffffff" }}
          primary={props.children}
          secondary={props.secondary}
        />
        <ListItemIcon style={{ marginLeft: "1rem" }}>
          <ChevronRightIcon />
        </ListItemIcon>
      </ListItem>
    );
  } else {
    return (
      <ListItem
        selected={Selected}
        onClick={handleClick}
        component={Link}
        to={props.link}
        className={classes.SettingsButtons}
        button
      >
        <ListItemIcon>
          <Avatar className={props.color}>{props.Icon}</Avatar>
        </ListItemIcon>
        <ListItemText
          style={{ width: "max-content" }}
          primary={props.children}
          secondary={props.secondary}
        />
        <ListItemIcon style={{ marginLeft: "1rem" }}>
          <ChevronRightIcon />
        </ListItemIcon>
      </ListItem>
    );
  }
}

export default function OtherInformation() {
  const classes = Styles();
  return (
    <Fragment>
      <SettingsMainWindow title="About">
        <SettingsButton
          link="/Information/Wiki"
          Icon={"?"}
          color={classes.blue}
        >
          Wiki
        </SettingsButton>
        <SettingsButton
          Icon={<RulesIcon />}
          color={classes.green}
          link="/Information/App-rules"
        >
          Rules of app
        </SettingsButton>
        <SettingsButton
          Icon={<RulesIcon />}
          color={classes.blue}
          link="/Information/App-rules-moderator"
        >
          Rules of moderation
        </SettingsButton>
        <SettingsButton
          link="/Information/Admin-events"
          Icon={<SecurityIcon />}
          color={classes.orange}
        >
          Admins events
        </SettingsButton>
        <SettingsButton
          link="/Information/Prison"
          Icon={<SecurityIcon />}
          color={classes.blue}
        >
          Prison
        </SettingsButton>
        <SettingsButton
          link="/Information/Statistic"
          Icon={<StarIcon />}
          color={classes.orange}
        >
          Statitic
        </SettingsButton>
        <SettingsButton
          Icon={<RowingIcon />}
          color={classes.purple}
          link="/Information/App-creators"
        >
          Creators
        </SettingsButton>
        <SettingsButton Icon={<GaleryIcon />} color={classes.blue} SimpleButton>
          Galery
        </SettingsButton>
        <SettingsButton
          link="mailto:zeoooon@ya.ru"
          Icon={<MailIcon />}
          color={classes.pink}
          secondary="zeoooon@ya.ru"
          url
        >
          Mail to developer
        </SettingsButton>
        <SettingsButton
          link="http://sayzen.ru/eng.html"
          Icon={<SecurityIcon />}
          color={classes.blue}
          url
        >
          Privancy policy
        </SettingsButton>
      </SettingsMainWindow>
    </Fragment>
  );
}
