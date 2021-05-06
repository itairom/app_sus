export class EmailFilter extends React.Component {

    state = {
        filterBy: ''
    }

    componentDidMount() {
        
    }


    handleChange = ({ target }) => {
        // console.log(target.name,target.value);
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ filterBy: value }, () => { console.log(this.state); })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {

        const { filterBy } = this.state
        return (
            <form className="mail-filter" onSubmit={this.onFilter} >
                <input name="filterBy" type="text" value={filterBy} onChange={this.handleChange} />
                <input  type="submit" value="Search" />
            </form>
        )
    }
}