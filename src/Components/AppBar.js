import React, { Fragment, useEffect, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  Collapse,
  Menu,
  MenuItem
} from "@material-ui/core";

import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

import {
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChatBubble as ChatBubbleIcon,
  Star as StarIcon,
  ExpandLess,
  ExpandMore,
  Bookmark as BookmarkIcon,
  Rowing as RowingIcon,
  AccountBalance as AccountBalanceIcon,
  PeopleAlt as PeopleAltIcon,
  Edit as EditIcon,
  Settings as SettingsIcon,
  AccountCircle as AccountCircleIcon,
  AllInclusive as FeedIcon
} from "@material-ui/icons";

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
  },
  profile: {}
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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const CloseProfile = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.profile}
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
    </>
  );
}

function AppBarItem(props) {
  const classes = useStyles();
  const [name] = useState(props.children);
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
      <>
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
      </>
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
    <>
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
    </>
  );
}
