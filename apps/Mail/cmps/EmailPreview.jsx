const { Link } = ReactRouterDOM

import { EmailDetails } from './EmailDetails.jsx'

export class EmailPreview extends React.Component {

    state = {
        mail: null,
        visibility: null,
        isClicked: false

    }

    componentDidMount() {
        this.setState({ mail: this.props.mail })
    }

    toggleDetails = () => {
        this.setState({ isClicked: !this.state.isClicked })
    }

    render() {

        if (!this.state.mail) return <h2>loading2</h2>
        const { mail } = this.state
        const { subject, body, isRead } = mail

        return (
            <div className="card-preview" onClick={() => { this.toggleDetails() }}>
                <h4 >{subject}</h4>
                {this.state.isClicked && <EmailDetails mail={mail} />}
                {/* <Link to={`/mail/${mail.id}`}>Details</Link> */}
            </div>
        )

    }



}