import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link,
    useRouteMatch
  } from 'react-router-dom';

export default function AddButton(){

    const useStyles = makeStyles((theme) => ({
        fabButton: {
          position: 'fixed',
          zIndex: 1,
          bottom: 20,
          right: 20,
          margin: '0',
        },
    }));

    const classes = useStyles();
    let { path, url } = useRouteMatch();

    return(
        <React.Fragment>
        <Fab color="primary" aria-label="add" className={classes.fabButton} component={Link} to="/new">
            <AddIcon />
        </Fab>
        </React.Fragment>
    )
}