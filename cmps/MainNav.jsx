
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

export class MainNav extends React.Component {

    state = {
        isAppsClicked: false
    }

    toggleApps = () => {
        this.setState({ isAppsClicked: !this.state.isAppsClicked })
    }




    render() {

        const { isAppsClicked } = this.state

        return (
            <nav className="main-navbar ">

                <div className="nav-icon flex">
                    <img className="profile-icon" src="assets/img/profile_icon.png" />
                    <img className="burger-icon" onClick={() => this.toggleApps()} src="apps/Mail/asset/img/apps.png" />
                    {/* <div className="app-logo">AppSus.</div> */}
                    <img className="info-icon" src="apps/Mail/asset/img/info.png" />
                    <img className="settings-icon" src="apps/Mail/asset/img/settings.png" />
                    <img className="app-logo" src="assets/img/appsus_logo.png"  />
                </div>


                {isAppsClicked && <div className="apps-icon flex">
                    <Link to="/mail">
                        <img onClick={() => this.toggleApps()} src="assets/img/envelope.svg" />
                    </Link>
                    <Link to="/keep">
                        <img onClick={() => this.toggleApps()} src="assets/img/keep.svg" />
                    </Link>
                    <Link to="/">
                        <img onClick={() => this.toggleApps()} src="assets/img/home.svg" />
                    </Link>
                </div>
                }
            </nav>

        )
    }
}