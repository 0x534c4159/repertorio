import React from 'react';
import {
    Link,
    useRouteMatch
  } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import '../css/Menu.css';

export default function Menu() {

    let { path, url } = useRouteMatch();

    return(

        
        <header className="App-header">
        <div className="navbar navbar-dark bg-secondary">
            <div className="container d-flex justify-content-beetween text-light">
                <h4>Sistema de Repertorio</h4>
            <div className="nav">

                <IconButton aria-label="show 4 new mails" color="inherit" component={Link} to="/" className="noLink">
                <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                </Badge>
                </IconButton>

                <IconButton className="noLink" aria-label="show 11 new notifications" color="inherit" component={Link} to="/notify">
                <Badge badgeContent={11} color="secondary">
                    <NotificationsIcon />
                </Badge>
                </IconButton>

                <IconButton className="noLink" aria-label="account of current user" color="inherit" component={Link} to="/user">
                <AccountCircle />
                </IconButton>
            </div>
            </div>
        </div>
        </header>

    )

}

