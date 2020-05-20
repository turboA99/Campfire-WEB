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
  if (props.SimpleButton) {
    const handleClick = () => {};
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
        <SettingsButton Icon={"?"} color={classes.blue} SimpleButton>
          Wiki
        </SettingsButton>
        <SettingsButton
          Icon={<RulesIcon />}
          color={classes.green}
          link="/Information/App-rules"
          SimpleButton
        >
          Rules of app
        </SettingsButton>
        <SettingsButton
          Icon={<RulesIcon />}
          color={classes.blue}
          link="/Information/App-rules-moderator"
          SimpleButton
        >
          Rules of moderation
        </SettingsButton>
        <SettingsButton
          Icon={<SecurityIcon />}
          color={classes.orange}
          SimpleButton
        >
          Admins events
        </SettingsButton>
        <SettingsButton
          Icon={<SecurityIcon />}
          color={classes.blue}
          SimpleButton
        >
          Prison
        </SettingsButton>
        <SettingsButton Icon={<StarIcon />} color={classes.orange} SimpleButton>
          Statitic
        </SettingsButton>
        <SettingsButton
          Icon={<RowingIcon />}
          color={classes.purple}
          link="/Information/App-creators"
          SimpleButton
        >
          Creators
        </SettingsButton>
        <SettingsButton Icon={<GaleryIcon />} color={classes.blue} SimpleButton>
          Galery
        </SettingsButton>
        <SettingsButton
          link="zeoooon@ya.ru"
          Icon={<MailIcon />}
          color={classes.pink}
          secondary="zeoooon@ya.ru"
          SimpleButton
        >
          Mail to developer
        </SettingsButton>
        <SettingsButton
          Icon={<SecurityIcon />}
          color={classes.blue}
          SimpleButton
        >
          Privancy policy
        </SettingsButton>
      </SettingsMainWindow>
    </Fragment>
  );
}
