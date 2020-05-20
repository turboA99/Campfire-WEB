import React, { Fragment } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronLeft";
import TranslateIcon from "@material-ui/icons/Translate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import BrushIcon from "@material-ui/icons/Brush";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhotoIcon from "@material-ui/icons/Photo";
import AddIcon from "@material-ui/icons/Add";
import LockIcon from "@material-ui/icons/Lock";
import SendIcon from "@material-ui/icons/Send";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import WebIcon from "@material-ui/icons/Web";
import Slider from "@material-ui/core/Slider";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import Switcher from "@material-ui/core/Switch";

import { Styles } from "../theme/custom/App";

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
  const Selected = React.useState(props.state);
  const [anchorEl, setAnchorEl] = React.useState(null);
  if (props.SimpleButton) {
    const handleClick = () => {};
    return (
      <ListItem
        selected={Selected}
        button
        onClick={handleClick}
        className={classes.SettingsButtons}
      >
        <ListItemIcon>
          <Avatar className={props.color}>{props.Icon}</Avatar>
        </ListItemIcon>
        <ListItemText primary={props.children} secondary={props.secondary} />
        <ListItemIcon>
          <ChevronRightIcon />
        </ListItemIcon>
      </ListItem>
    );
  }
  if (props.PopUpButton) {
    const open = Boolean(anchorEl);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <Fragment>
        <ListItem
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
          button
          primary={props.children}
        >
          <ListItemIcon>
            <Avatar className={props.color}>{props.Icon}</Avatar>
          </ListItemIcon>
          <ListItemText primary={props.children} secondary={props.selected} />
          <ListItemIcon>
            <ExpandMoreIcon />
          </ListItemIcon>
        </ListItem>
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
          {props.list.map(option => (
            <MenuItem
              key={option}
              selected={option === props.selected}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Fragment>
    );
  }
  if (props.SwitcherButton) {
    const handleClick = () => {};
    return (
      <ListItem>
        <ListItemIcon>
          <Avatar className={props.color} src={props.src}>
            {props.Icon}
          </Avatar>
        </ListItemIcon>
        <ListItemText primary={props.children} secondary={props.secondary} />
        <Switcher onClick={handleClick} />
      </ListItem>
    );
  }
}
function SettingsSlider(props) {
  const classes = Styles();
  const SliderOnChange = Value => {};
  return (
    <ListItem>
      <ListItemIcon>
        <Avatar className={props.color}>{props.Icon}</Avatar>
      </ListItemIcon>
      <Typography
        className={classes.SliderLabel}
        color="textSecondary"
        display="inline"
        id={props.children}
        gutterBottom
      >
        {props.children}
      </Typography>
      <Slider
        aria-labelledby={props.children}
        step={1}
        defaultValue={28}
        max={28}
        color="secondary"
        onChange={SliderOnChange()}
      />
    </ListItem>
  );
}
export default function OtherSettings() {
  const classes = Styles();
  return (
    <Fragment>
      <SettingsMainWindow title="Aplications">
        <SettingsButton
          color={classes.blue}
          Icon={<TranslateIcon />}
          selected="English"
          list={[
            "English",
            "Deutsch",
            "Français",
            "Italiano",
            "Polski",
            "Portugues",
            "Русский",
            "Український"
          ]}
          PopUpButton
        >
          Language
        </SettingsButton>
        <SettingsButton
          color={classes.green}
          src="../Anonymus.png"
          secondary="Available from level 5"
          SwitcherButton
        >
          Rate anonymously
        </SettingsButton>
        <SettingListTitle>Actions</SettingListTitle>
        <SettingsButton
          color={classes.blue}
          Icon={<AddIcon />}
          selected="Campfire"
          list={["Campfire"]}
          PopUpButton
        >
          Fast post creation
        </SettingsButton>
        <SettingListTitle>Voice messages</SettingListTitle>
        <SettingsButton
          color={classes.green}
          Icon={<LockIcon />}
          SwitcherButton
        >
          Automatically block sound recording
        </SettingsButton>
        <SettingsButton
          color={classes.green}
          Icon={<SendIcon />}
          SwitcherButton
        >
          Automatically send message aafter recording
        </SettingsButton>
        <SettingsButton
          color={classes.green}
          Icon={<VolumeOffIcon />}
          SwitcherButton
        >
          Do not receive voise messages in private chats
        </SettingsButton>
      </SettingsMainWindow>
      <SettingsMainWindow title="Style">
        <SettingsButton
          color={classes.purple}
          Icon={<BrushIcon />}
          selected="Black"
          list={[
            "Black",
            "Dark grey",
            "White",
            "Black: Red",
            "Black: Pink",
            "Black: Purple",
            "Black: Deep-Purple",
            "Black: Indigo",
            "Black: Blue",
            "Black: Light-Blue",
            "Black: Cyan",
            "Black: Teal",
            "Black: Green",
            "Black: Light-Green",
            "Black: Lime",
            "Black: DeepOrange",
            "Black: Brown",
            "Black: Blue-Grey",
            "White: Red",
            "White: Pink",
            "White: Purple",
            "White: Deep-Purple",
            "White: Indigo",
            "White: Blue",
            "White: Light-Blue",
            "White: Cyan",
            "White: Teal",
            "White: Green",
            "White: Light-Green",
            "White: Lime",
            "White: DeepOrange",
            "White: Brown",
            "White: Blue-Grey"
          ]}
          PopUpButton
        >
          Change theme
        </SettingsButton>
        <Divider />
        <SettingsButton
          color={classes.orange}
          Icon={<WebIcon />}
          selected="Hided menu"
          list={["Navigation panel", "Hided menu"]}
          PopUpButton
        >
          Interface
        </SettingsButton>
        <Divider />
        <SettingListTitle>Graphics</SettingListTitle>
        <SettingsButton
          color={classes.green}
          Icon={<AccountCircleIcon />}
          SwitcherButton
        >
          Round avatars
        </SettingsButton>
        <SettingsSlider Icon={<AccountBoxIcon />} color={classes.orange}>
          Rounding
        </SettingsSlider>
        <SettingsSlider Icon={<ChatBubbleIcon />} color={classes.blue}>
          Rounding chat messages
        </SettingsSlider>
        <SettingsButton
          color={classes.green}
          Icon={<PhotoIcon />}
          SwitcherButton
        >
          Show background in chats
        </SettingsButton>
        <SettingListTitle>Other</SettingListTitle>
        <ListItem button>Drop to default</ListItem>
      </SettingsMainWindow>
    </Fragment>
  );
}
