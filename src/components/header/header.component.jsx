import React from 'react';

import { Link } from 'react-router-dom';

import './header.styles.scss';

export default function Header() {
    return (
        <nav id="main-nav">
            <Link style={{color: 'white', textDecoration: 'none', cursor: 'pointer'}} to="/">Home</Link>
        </nav>
    );
}