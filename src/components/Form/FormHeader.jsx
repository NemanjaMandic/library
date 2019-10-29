// @Flow

import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
   
  
    menuButton: {
      marginRight: theme.spacing(2)
    },
    toolbar: {
      minHeight: 105,
      alignItems: "flex-start",
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      alignSelf: "flex-end"
    },
    backButton: {
      color: "#FFF"
    },


  }));


  type PropsT = {
      title: string
  }
const FormHeader = ({title}: PropsT) => {
    const classes = useStyles();
    return(
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <Link to="/" className={classes.backButton}>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
        >
            
            <ArrowBackIcon />
        
            
        </IconButton>
        </Link>
        <Typography className={classes.title} variant="h5" noWrap>
            {title}
        </Typography>
        </Toolbar>
    </AppBar>
    )
}

export default FormHeader;