import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css";

export const NavBar = ({logo}) => {
    return (
        <header>
            <a href="#">
            <>{logo}</>
            </a>
            <nav className="nav">
                <a href="#">Menu 1</a>
                <a href="#">Menu 2</a>
                <a href="#">Menu 3</a>
                <a href="#">Menu 4</a>
                <CartWidget/>
            </nav>  
        </header>
    )
}
