const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

import { BookApp } from './pages/BookApp.jsx'
import { Home } from './pages/home.jsx'
import { About } from './pages/About.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { BookDetails } from './pages/BookDetails.jsx'


export function MainBook() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    <Route component={BookDetails} path="/book/:bookId" />
                    <Route component={BookApp} path="/book" />
                    <Route component={About} path="/about" />
                    <Route component={Home} path="/" />
                </Switch>
            </main>

            <footer>
                coffeerights &copy;
            </footer>
        </Router>
    )
}
