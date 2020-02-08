import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from '../button/button.component'

import './header.styles.scss'

export default function Header() {
    const currentUser = useSelector(state => state.user.currentUser)

    return (
        <nav id="main-nav">
            <div class="wrap">
                <Link
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        cursor: 'pointer',
                    }}
                    to="/"
                >
                    Home
                </Link>
                <div className="user-info">
                    <Button>No Active Matches</Button>
                    <span>${currentUser.accountBalance}</span>
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </nav>
    )
}
