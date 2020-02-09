import React from 'react'

import { Link } from 'react-router-dom'
import ActiveMatch from '../active-match/active-match.component'

import useReduxUser from '../../hooks/user.hook'

import './header.styles.scss'

export default function Header() {
    const { currentUser } = useReduxUser()

    return (
        <nav id="main-nav">
            <div className="wrap">
                <Link to="/">Home</Link>
                <div className="user-info">
                    <ActiveMatch />
                    <span>${currentUser.accountBalance}</span>
                    <Link to="/profile">
                        <span>{currentUser.name}</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
