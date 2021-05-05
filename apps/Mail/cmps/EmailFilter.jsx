export class EmailFilter extends React.Component {

    state = {
        filterBy: ''
    }

    componentDidMount() {
        this.setState({ filterBy: this.props.filterBy })
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
                ...prevState,
                [field]: value
        }))
    }

    onFilter=(ev)=>{
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {

const {filterBy} = this.state
        return (
            <form className="mail-filter" onSubmit={this.onFilter} >
                <label>Search
                <input type="text" id="filterBy" name="filterBy" value={filterBy} onChange={this.handleChange} />
                </label>
                <button>Search</button>
            </form>
        )
    }
}