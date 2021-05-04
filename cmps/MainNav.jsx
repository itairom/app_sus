const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

export function MainNav() {

    return (
        <nav className="main-nav">
            <Link to="/mail">Mail</Link>
            <Link to="/keep">Keep</Link>
        </nav>

    )

}