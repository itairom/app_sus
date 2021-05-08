
export class BookFilter extends React.Component {

    state = {
        filterBy: {
            name: '',
            price: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = (ev.target.type === "number") ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }
            //תוך כדי הקלדה
            // , () => {
            //     this.props.onSetFilter(this.state.filterBy)}
        )
    }

    setFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { name, price } = this.state.filterBy
        return (
            <form className="book-filter" onSubmit={this.setFilter}>
                <label htmlFor="byBook">Book Name</label>
                <input type="text" id="byBook" name="name" value={name} onChange={this.handleChange} />

                <label htmlFor="byBook">Price</label>
                <input type="number" id="byBook" name="price" value={price} onChange={this.handleChange}
                    min="1" max="200" />

                <input
                    type="range"
                    ref={this.slider}
                    defaultValue={this.state.priceInputValue}
                    name="price"
                    value={price}
                    min="1" max="200"
                    onChange={this.handleChange} />
                <button className="btn-filter">Filter</button>
            </form>
        )
    }
}