
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

export class MainNav extends React.Component {

    state = {
        isAppsClicked: false
    }

    toggleApps =()=>{

    }




    render() {

        const { isAppsClicked } = this.state

        return (
            <nav className="main-nav">
                <img src="apps/Mail/asset/img/apps.png" alt="" />
                {isAppsClicked && <div className="apps-icon">
                    <Link to="/mail">Mail</Link>
                    <Link to="/keep">Keep</Link>
                    <Link to="/">Home</Link>
                </div>
                }
            </nav>

        )
    }
}