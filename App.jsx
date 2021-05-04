const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { KeepApp } from './apps/Keep/KeepApp.jsx'
import { MailApp } from './apps/Mail/MailApp.jsx'
// import { Books } from './apps/Books/BookApp.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Home } from './pages/Home.jsx'
import { MainNav } from './cmps/MainNav.jsx'


export function App() {
    return (
        <Router>
            <header>
                <MainNav />
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
