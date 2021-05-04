const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

export function MainNav() {

    return (
        <nav>
            <p>Check our ! <Link to="/mail">Mail</Link> </p>
            <p>Check our ! <Link to="/keep">Keep</Link> </p>

        </nav>

    )

}