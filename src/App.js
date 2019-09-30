import React from 'react';
import './App.css';
import MainNavigation from './MainNavigation';
import Posts from './Posts';
import Footer from './Footer';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    flexGrow:1,
    padding:25,
    background: "tomato"
  },
  list: {
    background:"green",

  },
  title: {
    flexGrow:1
  }
})

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Material UI DemoSite
          </Typography>
          <MainNavigation />
        </Toolbar>
      </AppBar>
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
