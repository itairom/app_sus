
const { NavLink } = ReactRouterDOM

export class AppHeader extends React.Component {


    render() {
        return (
            <nav className="main-header space-between">

                <h2>Book Shop</h2>
                <ul className="list-header clean-list flex ">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/about">About</NavLink></li>
                    <li><NavLink exact to="/book" >Books</NavLink></li>
                </ul>
            </nav>

        )
    }
}