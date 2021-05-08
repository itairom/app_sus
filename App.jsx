const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { KeepApp } from './apps/Keep/KeepApp.jsx'
import { MailApp } from './apps/Mail/MailApp.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Home } from './pages/Home.jsx'
import { MainNav } from './cmps/MainNav.jsx'
import { EmailDetails } from './apps/Mail/cmps/EmailDetails.jsx'
import { EmailCompose } from './apps/Mail/cmps/EmailCompose.jsx'
import { EmailReplySubmit } from './apps/Mail/cmps/EmailReplySubmit.jsx'


export function App() {
    return (
        <Router>
            <header>
                <MainNav />
            </header>

            <main>
                <Switch>
                    {/* <Route component={Books} path="/books" /> */}
                    <Route component={EmailReplySubmit} path="/mail/reply/:id" />
                    <Route component={EmailDetails} path="/mail/:id" />
                    <Route component={EmailCompose} path="/mail/compose" />
                    <Route component={MailApp} path="/mail" />
                    <Route component={KeepApp} path="/keep" />
                    <Route component={AboutUs} path="/about" />
                    <Route component={Home} path="/" />
                </Switch>

            </main>

            {/* <footer className="footer">
                <h3>All rights reserved ©</h3>
            </footer> */}

        </Router>
    )
}
