import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { MoreVert as MoreIcon } from "@material-ui/icons";
import { Avatar, Menu, IconButton, MenuItem } from "@material-ui/core";
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ListItem className={classes.SettingsButtons}>
      <ListItemIcon>
        <Avatar
          style={{ borderRadius: "1rem" }}
          alt={props.children}
          src={props.src}
        />
      </ListItemIcon>
      <ListItemText
        style={{ width: "max-content" }}
        primary={props.children}
        secondary={props.secondary}
      />
      <IconButton onClick={handleClick} style={{ marginLeft: "1rem" }}>
        <MoreIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 14 * 15,
            width: "30ch",
            borderRadius: "15px",
            paddingTop: "0px"
          }
        }}
      >
        {["Campfire", "EMail", "VKontakte"].map(option => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </ListItem>
  );
}

export default function OtherInformation() {
  const classes = Styles();
  return (
    <Fragment>
      <SettingsMainWindow title="Creators">
        <SettingsButton
          src="../DK.jpg"
          secondary="Android app and server developer."
        >
          Dmitrij Kholin
          <Link className={classes.link} to="/profile/Zeon">
            (@Zeon)
          </Link>
        </SettingsButton>
        <SettingsButton
          src="../IC.jpg"
          secondary="Android app developer (until 2018)."
        >
          Igor Chernobyl
          <Link className={classes.link} to="/profile/Saynok">
            (@Saynok)
          </Link>
        </SettingsButton>
        <SettingsButton src="../YK.jpg" secondary="Artist / Animator">
          Yegor Korolev
          <Link className={classes.link} to="/profile/GeorgePro">
            (@GeorgePro)
          </Link>
        </SettingsButton>
        <SettingsButton src="../AA.jpg" secondary="Redirect page developer.">
          Artur Aldridge
          <Link className={classes.link} to="/profile/turboA99">
            (@turboA99)
          </Link>
        </SettingsButton>
        <SettingsButton src="../MK.jpg" secondary="Content manager.">
          Maksim Kholin
          <Link className={classes.link} to="/profile/ZYMixx">
            (@ZYMixx)
          </Link>
        </SettingsButton>
      </SettingsMainWindow>
    </Fragment>
  );
}
