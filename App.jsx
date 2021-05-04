const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { KeepApp } from './apps/Keep/KeepApp'
import { MailApp } from './apps/Mail/MailApp.jsx'
// import { Books } from './apps/Books/BookApp.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Home } from './pages/Home.jsx'



export function App() {
    return (
        <Router>
            <header>
                <h1>hhh</h1>
                <h2>ttt</h2>
                <h2>hh</h2>
            </header>

            <main>
                <Switch>
                    {/* <Route component={Books} path="/books" /> */}
                    <Route component={KeepApp} path="/keep" />
                    <Route component={MailApp} path="/mail" />
                    <Route component={AboutUs} path="/about" />
                    <Route component={Home} path="/" />
                </Switch>

            </main>

            <footer>
                <h3>All rights reserved ©</h3>
            </footer>

        </Router>
    )
}
