import React, {Fragment, useEffect, useState} from 'react';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme } from '@material-ui/core/styles';
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
function SettingListTitle(props) {
  const classes = useStyles();
  return(
    <Fragment>
      <Typography variant={props.variant} paragraph color="textSecondary" className={classes.SettingListTitle}>{props.children}</Typography>
      <Divider />
    </Fragment>
  )
}
function SettingsMainWindow(props) {
  const classes = useStyles();
  return <List className={classes.panel}><SettingListTitle variant='h5'>{props.title}</SettingListTitle>{props.children}</List>
}

export default function OtherInformation() {
    const classes = useStyles();
    return(
      <Fragment>
        <SettingsMainWindow title='Rules of app'>
          <Typography marginLeft='2pt' paragraph>Please read all the rules of the application, it does not take much time, and it will help you to better understood how our community works.</Typography>
        </SettingsMainWindow>
      </Fragment>
    )
}