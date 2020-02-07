import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'

import Home from './pages/home/home.component'
import Category from './pages/category/category.component'
import Platform from './pages/platform/platform.component'

import Header from './components/header/header.component'

import { Route, Switch } from 'react-router-dom'

import './App.scss'

function App() {
    const dispatch = useDispatch()

    //Setting test data for user
    const testUserData = { name: 'Current User', accountBalance: 3 }

    useEffect(() => {
        dispatch(setCurrentUser(testUserData))
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
                <Route path="*" component={() => <h1>404 not found</h1>} />
            </Switch>
        </div>
    )
}

export default App
