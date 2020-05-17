import React, { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import StarIcon from "@material-ui/icons/Star";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import RowingIcon from "@material-ui/icons/Rowing";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EditIcon from "@material-ui/icons/Edit";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FeedIcon from "@material-ui/icons/AllInclusive";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

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
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
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
  }
}));

function Bell() {
  const classes = useStyles();
  return (
    <Fragment>
      <IconButton color="inherit" className={classes.Bell}>
        <Badge badgeContent={11} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Fragment>
  );
}
function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const CloseProfile = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={CloseProfile}
      >
        <MenuItem onClick={CloseProfile}>Profile</MenuItem>
        <MenuItem onClick={CloseProfile}>Logout</MenuItem>
      </Menu>
    </Fragment>
  );
}
function AppBarItem(props) {
  const classes = useStyles();
  const name = props.children;
  const [OpenList, SetOpenList] = useState(false);
  const [active, SetActive] = useState(name === props.selected ? true : false);
  const handleClickList = () => {
    if (props.state) {
      SetOpenList(!OpenList);
      if (active) {
        SetActive(false);
      }
      if (!active & (name === props.selected)) {
        SetActive(true);
      }
    }
  };
  useEffect(() => {
    if (!props.state) {
      SetOpenList(false);
    }
    if (!active & (name === props.selected)) {
      SetActive(true);
    }
  }, [props.state]);
  useEffect(() => {
    if (active & (name !== props.selected)) {
      SetActive(false);
    }
  }, [props.selected]);
  const onItemClick = () => {
    document.title = name;
    props.SetSelected(props.children);
    props.SetSelected2(props.children);
  };
  const handleClickListItem = Name => () => {
    props.SetSelected2(Name);
    props.SetSelected(name);
    props.SetTitle(Name);
  };
  if (props.expandable) {
    return (
      <Fragment>
        <ListItem selected={active} button onClick={handleClickList}>
          <ListItemIcon>{props.Icon}</ListItemIcon>
          <ListItemText primary={props.children} />
          {OpenList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={OpenList} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.inList.map(text => (
              <Fragment key={text}>
                <ListItem
                  component={Link}
                  to={"/" + text}
                  selected={text === props.selected2 ? true : false}
                  onClick={handleClickListItem(text)}
                  button
                >
                  <ListItemText className={classes.nested} primary={text} />
                </ListItem>
              </Fragment>
            ))}
          </List>
        </Collapse>
      </Fragment>
    );
  } else if (!props.expandable) {
    return (
      <ListItem
        component={Link}
        to={"/" + props.children}
        selected={name === props.selected ? true : false}
        button
        onClick={onItemClick}
      >
        <ListItemIcon>{props.Icon}</ListItemIcon>
        <ListItemText primary={props.children} />
      </ListItem>
    );
  }
}
export default function AppBarMain(props) {
  const classes = useStyles();
  const [drawerOpen, setOpen] = useState(false);
  const [selected, SetSelected] = useState(props.Selected);
  const [selected2, SetSelected2] = useState(props.Selected2);
  const [title, SetTitle] = useState(props.Selected2);
  const OpenDrawer = () => {
    setOpen(true);
  };
  const CloseDrawer = () => {
    setOpen(false);
  };
  useEffect(() => {
    props.SetSelected(selected2);
  }, [props.selected]);
  return (
    <Fragment>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={OpenDrawer}
            edge="start"
            className={clsx(classes.menuButton, { [classes.hide]: drawerOpen })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            {"Testing Campfire web: " + title}
          </Typography>
          <div>
            <Bell />
            <Profile />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={CloseDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <AppBarItem
            SetTitle={SetTitle}
            SetSelected={SetSelected}
            SetSelected2={SetSelected2}
            selected={selected}
            selected2={selected2}
            state={drawerOpen}
            Icon={<FeedIcon />}
            inList={["Subscriptions", "All"]}
            expandable
          >
            Feed
          </AppBarItem>
          <AppBarItem
            SetTitle={SetTitle}
            SetSelected={SetSelected}
            SetSelected2={SetSelected2}
            selected={selected}
            selected2={selected2}
            state={drawerOpen}
            Icon={<StarIcon />}
            inList={["Achievements", "Privileges"]}
            expandable
          >
            Level
          </AppBarItem>
          <AppBarItem
            SetTitle={SetTitle}
            SetSelected={SetSelected}
            SetSelected2={SetSelected2}
            selected={selected}
            selected2={selected2}
            Icon={<ChatBubbleIcon />}
          >
            Chats
          </AppBarItem>
        </List>
        <Divider />
        <List>
          <AppBarItem
            SetTitle={SetTitle}
            SetSelected={SetSelected}
            SetSelected2={SetSelected2}
            selected={selected}
            selected2={selected2}
            Icon={<AccountBalanceIcon />}
          >
            Fandoms
          </AppBarItem>
          <AppBarItem
            SetTitle={SetTitle}
            SetSelected={SetSelected}
            SetSelected2={SetSelected2}
            selected={selected}
            selected2={selected2}
            Icon={<RowingIcon />}
          >
            Activities
          </AppBarItem>
          <AppBarItem
            SetTitle={SetTitle}
            SetSelected={SetSelected}
            SetSelected2={SetSelected2}
            selected={selected}
            selected2={selected2}
            Icon={<PeopleAltIcon />}
          >
            Users
          </AppBarItem>
          <AppBarItem
            SetTitle={SetTitle}
            SetSelected={SetSelected}
            SetSelected2={SetSelected2}
            selected={selected}
            selected2={selected2}
            Icon={<EditIcon />}
          >
            Drafts
          </AppBarItem>
          <AppBarItem
            SetTitle={SetTitle}
            SetSelected={SetSelected}
            SetSelected2={SetSelected2}
            selected={selected}
            selected2={selected2}
            Icon={<BookmarkIcon />}
          >
            Bookmarks
          </AppBarItem>
          <AppBarItem
            SetTitle={SetTitle}
            SetSelected={SetSelected}
            SetSelected2={SetSelected2}
            selected={selected}
            selected2={selected2}
            state={drawerOpen}
            Icon={<SettingsIcon />}
            inList={["Notifications", "Settings", "Information"]}
            expandable
          >
            Other
          </AppBarItem>
        </List>
      </Drawer>
    </Fragment>
  );
}
