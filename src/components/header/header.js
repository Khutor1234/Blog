import React from 'react';
import {AppBar, Container, Toolbar, Link} from '@material-ui/core';
import useStyles from './style';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position = 'fixed' className={classes.header}>
      <Container fixed>
          <Toolbar>
            <Link className={classes.link} color="inherit" href="/" >
                News
            </Link>
            <Link className={classes.link} color="inherit" href="/admin" >
                Admin
            </Link>
          </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;;
