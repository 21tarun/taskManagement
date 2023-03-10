import React from "react";
import {  NavLink } from "react-router-dom";

function Nav(){
    return(
        <div className="nav">
            <li><h4><NavLink className="navLink" to='/'>Tasks</NavLink></h4></li>
            <li><h4><NavLink className="navLink" to='/add'>Add task</NavLink></h4></li>


        </div>
    )
}

export default Nav;