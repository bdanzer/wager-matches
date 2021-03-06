import React, { useEffect } from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/home.component'
import Category from './pages/category/category.component'
import Platform from './pages/platform/platform.component'
import Payment from './pages/payment/payment.component'
import Profile from './pages/profile/profile.component'
import Match from './pages/match/match.component'

import Header from './components/header/header.component'

import useReduxUser from './hooks/user.hook'

import './App.scss'

function App() {
    const { currentUser, setUser } = useReduxUser()

    //Setting test data for user
    const testUserData = { name: 'TakeDown', accountBalance: 3 }

    useEffect(() => {
        setUser(testUserData)
    }, [])

    return (
        <div className="App">
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/category/:categoryid/:platform"
                    component={Platform}
                />
                <Route path="/category/:categoryid" component={Category} />
                <Route path="/payment" component={Payment} />
                <Route path="/profile" component={Profile} />
                <Route path="/match/:id" component={Match} />
                <Route path="*" component={() => <h1>404 not found</h1>} />
            </Switch>
        </div>
    )
}

export default App
