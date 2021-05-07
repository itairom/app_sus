
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

export class MainNav extends React.Component {

    state = {
        isAppsClicked: true
    }

    toggleApps = () => {
        this.setState({ isAppsClicked: !this.state.isAppsClicked })
    }




    render() {

        const { isAppsClicked } = this.state

        return (
            <nav className="main-nav">
                <img src="apps/Mail/asset/img/apps.png" alt="" />


                {isAppsClicked && <div className="apps-icon">
                    <Link to="/mail">
                        <img src="assets/img/envelope.svg" />
                    </Link>
                    <Link to="/keep">
                        <img src="assets/img/keep.svg" />
                    </Link>
                    <Link to="/">
                        <img src="assets/img/home.svg" />
                    </Link>
                </div>
                }
            </nav>

        )
    }
}