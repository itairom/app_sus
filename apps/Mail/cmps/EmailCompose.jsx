export class EmailCompose extends React.Component {

    state = {
        subject: null,
        body: null,
        id: null,
        subject: null,
        isRead: false
    }
    componentDidMount() {

    }

    onSaveMail = () => {

    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            car: {
                ...prevState.car,
                [field]: value
            }
        }))
    }

    render() {


        const { body, id, isRead, subject } = this.state

        return (
            <div className="compose-mail flex">
                <form className="mail-form flex" onSubmit={this.onSaveMail}>
                    <label>subject
                    <input type="text" name="subject" value={subject} onChange={this.handleChange} />
                    </label>
                    <label>body
                    <textarea type="text" name="body" value={body} onChange={this.handleChange} />
                    </label>
                    <button>Save</button>
                </form>

            </div>
        )
    }
}