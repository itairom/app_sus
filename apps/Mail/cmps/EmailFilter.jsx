export class EmailFilter extends React.Component {

    state = {
        filterBy: ''
    }

    componentDidMount() {

    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ filterBy: value })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {

        const { filterBy } = this.state
        return (
            <form className="mail-filter flex" onSubmit={this.onFilter} >
                <input placeholder="Search mail" name="filterBy" type="text" value={filterBy} onChange={this.handleChange} />
                {/* <input  type="submit" value="Search" /> */}
                {/* <img  src="apps/Mail/asset/svg/loupe.svg" type="submit" value="Search" /> */}
            </form>
        )
    }
}