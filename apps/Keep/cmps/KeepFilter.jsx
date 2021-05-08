
export class KeepFilter extends React.Component {
    state = {
        filterBy: {
            type: 'All',
            txt: '',
            isPinned: false
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(({ filterBy }) => ({
            filterBy:
            {
                ...filterBy,
                [field]: value
            }
        }), () => this.props.onSetFilter(this.state.filterBy))
    }

    setFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { type, txt, isPinned } = this.state.filterBy

        return (
            <form className="keep-filter" onSubmit={this.setFilter}>
                <label htmlFor="note"></label>
                <img src="apps/Keep/assets/icons/search.svg" alt="" />
                <div className="filter-input">
                    <input type="text" onChange={this.handleChange}
                        id="note"
                        name="txt"
                        value={txt}
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="Search"
                    />
                </div>
                <select name="type" id="rate" value={type} onChange={this.handleChange}>
                    <option value="All">All</option>
                    <option value="NoteTxt">Text</option>
                    <option value="NoteImg">Image</option>
                    <option value="NoteTodos">todos</option>
                    <option value="NoteVideo">Video</option>
                    {/* <option value="Pinned">Pinned</option> */}
                </select>       
            </form>
        )
    }

}