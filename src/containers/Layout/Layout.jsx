// @Flow

import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Drawer from '@material-ui/core/Drawer';
import { Link } from "react-router-dom";
import Book from '../Book/Book';
import BooksTable from '../Table/BooksTable';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Dropdown from '../../components/Dropdown/Dropdown';
import useStyles from './style';


const Layout = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };



  return(
      

      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h3" noWrap className={classes.title}>
            Books
          </Typography>
         
          <Link to="/add-book" className={classes.fabLink}>
            <Fab color="default" className={classes.fab} aria-label="add" >
              <AddIcon />
            </Fab>
          </Link>

          <Dropdown />
          
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        
       <BooksTable openSidebar={handleDrawerOpen} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        
        <Book />
      </Drawer>
    </div>
  );
}

export default Layout;