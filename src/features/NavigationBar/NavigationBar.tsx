import React from 'react';
import { NavLink } from 'react-router-dom';
import {PATH} from "../../Utils/path/Path";

const NavigationBar = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <NavLink to={PATH.PEOPLES}>PEOPLES</NavLink>
            <NavLink to={PATH.FILMS}>FILMS</NavLink>
            <NavLink to={PATH.STARSHIPS}>STARSHIPS</NavLink>
            <NavLink to={PATH.VEHICLES}>VEHICLES</NavLink>
            <NavLink to={PATH.SPECIES}>SPECIES</NavLink>
            <NavLink to={PATH.PLANETS}>PLANETS</NavLink>
            <NavLink to={PATH.MAIN}>HOME</NavLink>
        </div>
    );
};

export default NavigationBar;