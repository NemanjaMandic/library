// @Flow

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"; 
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


type PropsT = {
    title: string,
    author?: string,
    link: string
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 90,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    background: '#242e65'
  },
  title: {
    flexGrow: 1,
    fontSize: 18

  },
  author: {
    fontSize: 14
  },
  info: {
    alignSelf: 'flex-end'
  },
  icons: {
    position: 'absolute',
    right: 3
  },
  link: {
    color: '#FFF'
  }
}));
  
const BookHeader = ({title, author, link}: PropsT) => {
    const classes = useStyles();
    return ( 
      <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.info}>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
        <Typography className={classes.author} variant="h6">
          {author}
        </Typography>
        </div>
        <div className={classes.icons}>
        <Link to={link} className={classes.link}>
        <IconButton color="inherit">
          <EditIcon />
        </IconButton>
        </Link>
        <IconButton edge="end" color="inherit">
          <DeleteIcon />
        </IconButton>
        </div>
      </Toolbar>
    </AppBar>
     );
}
 
export default BookHeader;