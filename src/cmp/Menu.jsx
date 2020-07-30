import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
  import UserIcon from '@material-ui/icons/AccountCircleRounded';

export default function Menu(props) {

    return(

        <div className="navbar navbar-dark bg-dark">
            <div className="container d-flex justify-content-beetween text-light">
                <h4>Sistema de Repertorio</h4>
            </div>
            <Router>
                <Link to="/panel"><UserIcon style={{color: "white"}} /></Link>
            </Router>
        </div>

    )

}