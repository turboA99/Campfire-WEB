import React, {Fragment} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BrushIcon from '@material-ui/icons/Brush';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import StarIcon from '@material-ui/icons/Star';
import { createMuiTheme } from '@material-ui/core/styles';
import RowingIcon from '@material-ui/icons/Rowing';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import RulesIcon from '@material-ui/icons/Gavel';
import SecurityIcon from '@material-ui/icons/Security';
import GaleryIcon from '@material-ui/icons/FilterHdr';
import PhotoIcon from '@material-ui/icons/InsertPhoto';
import AddIcon from '@material-ui/icons/Add';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import SendIcon from '@material-ui/icons/Send';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import WebIcon from '@material-ui/icons/Web';
import TranslateIcon from '@material-ui/icons/Translate';
import Switcher from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import { Avatar } from '@material-ui/core';
import { green, orange, purple, red, blue, yellow, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#252525',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff9100',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    warning: {
      main: '#ff0000',
    },
    background: {
      default: '#000000',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    marginLeft: theme.spacing(7),
    transition: 'all',
  },
  title: {
    flexGrow: 1,
  },
  Bell: {
    marginRight: theme.spacing(2),
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  purple: {
    color: '#fff',
    backgroundColor: purple[500],
  },
  orange: {
    color: '#fff',
    backgroundColor: orange[500],
  },
  red: {
    color: '#fff',
    backgroundColor: red[500],
  },
  blue: {
    color: '#fff',
    backgroundColor: blue[500],
  },
  yellow: {
    color: '#fff',
    backgroundColor: yellow[900],
  },
  pink: {
    color: '#fff',
    backgroundColor: pink[500],
  },
  SettingsButton: {
    
  },
  SettingListTitle: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  panel: {
    borderRadius: '20px',
    backgroundColor: '#303030',
    width: '45%',
    display: 'inline-grid',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));
function SettingsMainWindow(props) {
  const classes = useStyles();
  return <List className={classes.panel}><SettingListTitle variant='h5'>{props.title}</SettingListTitle>{props.children}</List>
}
function SettingListTitle(props) {
  const classes = useStyles();
  return(
    <Fragment>
      <Typography variant={props.variant} paragraph color="textSecondary" className={classes.SettingListTitle}>{props.children}</Typography>
      <Divider />
    </Fragment>
  )
}
function SettingsButton(props) {
  const classes = useStyles();
  const [Selected, SetSelected] = React.useState(props.state);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const HaveAvatar = React.useState(props.HaveAvatar);
  if(props.SimpleButton){
    const handleClick = () => {
    
    }
    return( 
    <ListItem selected={Selected} button onClick={handleClick} className={classes.SettingsButtons}>
      <ListItemIcon>
        <Avatar className={props.color}>
          {props.Icon}
        </Avatar>
      </ListItemIcon>
      <ListItemText primary={props.children} secondary={props.secondary}/>
      <ListItemIcon>
        <ChevronRightIcon />
      </ListItemIcon>
    </ListItem>
    );
  }
  if(props.PopUpButton)
  {
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClickItem = (Option) => {
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
            <Avatar className={props.color}>
              {props.Icon}
            </Avatar>
          </ListItemIcon>
          <ListItemText primary={props.children} secondary={props.selected}></ListItemText>
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
              width: '30ch',
              borderRadius: '15px',
              paddingTop: '0px',
            },
          }}
        >
          {props.list.map((option) => (
            <MenuItem key={option} selected={option === props.selected} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        </Fragment>
    );
  }
  if(props.SwitcherButton)
  {
    const handleClick = () => {
  
    }
    return( 
      <ListItem>
        <ListItemIcon>
          <Avatar className={props.color}>
            {props.Icon}
          </Avatar>
        </ListItemIcon>
        <ListItemText primary={props.children} />
        <Switcher onClick={handleClick}></Switcher>
      </ListItem>
    );
  }
  
}
function SettingsSlider(props){
  const classes = useStyles();
  const handleClick = () => {
  
  }
  return( 
    <ListItem>
      <ListItemIcon>
        <Avatar className={props.color}>
          {props.Icon}
        </Avatar>
      </ListItemIcon>
      <Typography 
        color='textSecondary'
        display='inline'
        id={props.children}
        gutterBottom
        >
        {props.children}
      </Typography>
      <Slider aria-labelledby={props.children} step={1} defaultValue={28} max={28} color='secondary' ></Slider>
    </ListItem>
  );
}
function OtherInformation() {
  const classes = useStyles();
  return(
    <Fragment>
      <SettingsMainWindow>
        <SettingListTitle>About</SettingListTitle>
        <SettingsButton Icon={'?'} color={classes.blue} SimpleButton>Wiki</SettingsButton>
        <SettingsButton Icon={<RulesIcon />} color={classes.green} SimpleButton>Rules of app</SettingsButton>
        <SettingsButton Icon={<RulesIcon />} color={classes.blue} SimpleButton>Rules of moderation</SettingsButton>
        <SettingsButton Icon={<SecurityIcon />} color={classes.orange} SimpleButton>Admins events</SettingsButton>
        <SettingsButton Icon={<SecurityIcon />} color={classes.blue} SimpleButton>Prison</SettingsButton>
        <SettingsButton Icon={<StarIcon />} color={classes.orange} SimpleButton>Statitic</SettingsButton>
        <SettingsButton Icon={<RowingIcon />} color={classes.purple} SimpleButton>Creators</SettingsButton>
        <SettingsButton Icon={<GaleryIcon />} color={classes.blue} SimpleButton>Galery</SettingsButton>
        <SettingsButton Icon={<MailIcon />} color={classes.pink} secondary='zeoooon@ya.ru' SimpleButton>Mail to developer</SettingsButton>
        <SettingsButton Icon={<SecurityIcon />} color={classes.blue} SimpleButton>Privancy policy</SettingsButton>
      </SettingsMainWindow>
    </Fragment>
  )
}
export default function OtherSettings() {
  const classes = useStyles();
  return (
    <Fragment>
      <SettingsMainWindow title='Aplications'>
        <SettingsButton color={classes.blue} Icon={<TranslateIcon />} selected='English' list={['English', 'Deutsch', 'FranÃ§ais', 'Italiano', 'Polski', 'Portugues', 'Ð ÑÑÑÐºÐ¸Ð¹', 'Ð£ÐºÑÐ°ÑÐ½ÑÑÐºÐ¸Ð¹']} PopUpButton>Language</SettingsButton>
        <SettingsButton color={classes.green} src='%PUBLIC_URL%/f_1589637494902.png'  SwitcherButton>Rate anonymously</SettingsButton>
        <SettingListTitle>Actions</SettingListTitle>
        <SettingsButton color={classes.blue} Icon={<AddIcon />} selected='Campfire' list={['Campfire']} PopUpButton>Fast post creation</SettingsButton>
        <SettingListTitle>Voice messages</SettingListTitle>
        <SettingsButton color={classes.green} Icon={<LockIcon />}  SwitcherButton>Show background in chats</SettingsButton>
        <SettingsButton color={classes.green} Icon={<SendIcon />}  SwitcherButton>Show background in chats</SettingsButton>
        <SettingsButton color={classes.green} Icon={<VolumeOffIcon />}  SwitcherButton>Show background in chats</SettingsButton>
      </SettingsMainWindow>
      <SettingsMainWindow title='Style'>
        <SettingsButton color={classes.purple} Icon={<BrushIcon />} selected='Black' list={['Black', 'Dark grey', 'White', 'Black: Red', 'Black: Pink', 'Black: Purple', 'Black: Deep-Purple', 'Black: Indigo', 'Black: Blue', 'Black: Light-Blue', 'Black: Cyan', 'Black: Teal', 'Black: Green', 'Black: Light-Green', 'Black: Lime', 'Black: DeepOrange', 'Black: Brown', 'Black: Blue-Grey', 'White: Red', 'White: Pink', 'White: Purple', 'White: Deep-Purple', 'White: Indigo', 'White: Blue', 'White: Light-Blue', 'White: Cyan', 'White: Teal', 'White: Green', 'White: Light-Green', 'White: Lime', 'White: DeepOrange', 'White: Brown', 'White: Blue-Grey']} PopUpButton>Change theme</SettingsButton>
        <Divider />
        <SettingsButton color={classes.orange} Icon={<WebIcon />} selected='Hided menu' list={['Navigation panel', 'Hided menu']} PopUpButton>Interface</SettingsButton>
        <Divider />
        <SettingListTitle>Graphics</SettingListTitle>
        <SettingsButton color={classes.green} Icon={<AccountCircleIcon />} SwitcherButton>Round avatars</SettingsButton>
        <SettingsSlider Icon={<AccountBoxIcon />} color={classes.orange}>Rounding</SettingsSlider>
        <SettingsSlider Icon={<ChatBubbleIcon />} color={classes.blue}>Rounding chat messages</SettingsSlider>
        <SettingsButton color={classes.green} Icon={<PhotoIcon />} SwitcherButton>Show background in chats</SettingsButton>
        <SettingListTitle>Other</SettingListTitle>
        <ListItem button>Drop to default</ListItem>
      </SettingsMainWindow>
    </Fragment>
  )
}