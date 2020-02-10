import React from 'react'

import { Route, Link } from 'react-router-dom'

import useReduxUser from '../../hooks/user.hook'

import './profile.styles.scss'

export default function Profile() {
    const { currentUser } = useReduxUser()

    return (
        <div>
            <h2>Hello! {currentUser.name}</h2>
            <div className="profile-wrap">
                <div className="left">
                    <Link to={'/profile/settings'}>Settings</Link>
                    <Link to={'/payment'}>Add to Wallet</Link>
                </div>
                <div className="right">
                    <Route
                        path={'/profile/settings'}
                        component={() => <div>Settings Page</div>}
                    ></Route>
                </div>
            </div>
        </div>
    )
}
