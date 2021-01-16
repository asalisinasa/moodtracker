import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import MainPage from './pages/MainPage'
import ListPage from './pages/ListPage'
import NotePage from './pages/NotePage'

export const useRoutes = isAutentificated => {
    if (isAutentificated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/note/list" exact>
                    <ListPage />
                </Route>
                <Route path="/note/:id" exact>
                    <NotePage />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Redirect to="/auth" />
        </Switch>
    )
}
