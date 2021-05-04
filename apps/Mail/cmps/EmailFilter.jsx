export class EmailFilter extends React.Component {

    state = {
        filterBy: ''
    }

    componentDidMount() {
        console.log('props');
        this.setState({ filterBy: this.props.filterBy })
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            mail: {
                ...prevState.mail,
                [field]: value
            }
        }))
    }
    render() {


        return (

            <form className="mail-form flex" >
                <label>subject
    <input type="text" name="subject" value={this.state.filterBy} onChange={this.handleChange} />
                </label>
                <button>Save</button>
            </form>
        )
    }
}