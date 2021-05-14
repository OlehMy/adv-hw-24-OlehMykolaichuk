import React from 'react';
import { NavLink } from "react-router-dom";

const links = [
    {
        to: '/adv-hw-24-OlehMykolaichuk/',
        label: 'Home',
    },
    {
        to: '/adv-hw-24-OlehMykolaichuk/users',
        label: 'Users',
    },
    {
        to: '/adv-hw-24-OlehMykolaichuk/addUser',
        label: 'Add User',
    },
];

const Nav = () => {
    return (
        <nav>
            <ul className = "flex">
                {links.map(link => (
                    <li key = {link.to}>
                        <NavLink exact to = {link.to} activeClassName = "active">{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )    
};

export default Nav;