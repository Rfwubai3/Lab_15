import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

function Head(){
    return(
        <div className="head">
            <NavLink to="/news"> Новости </NavLink> &nbsp;
            <NavLink to="/contacts"> Контакты </NavLink> &nbsp;
            <NavLink to="/about"> О проекте </NavLink> 
        </div>
);
}

export default Head;
