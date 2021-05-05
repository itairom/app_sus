const { Link, Route } = ReactRouterDOM

import { EmailDetails } from './EmailDetails.jsx'
import { LongTxt } from '../cmps/util/LongTxt.jsx'

export class EmailPreview extends React.Component {

    state = {
        mail: null,
        visibility: null,
        isClicked: false
    }

    componentDidMount() {
        this.setState({ mail: this.props.mail })
    }

    toggleDetails = (ev) => {
        ev.stopPropagation()
        this.setState({ isClicked: !this.state.isClicked })
        this.toggleRead(ev)
    }


    toggleRead = (ev) => {
        ev.preventDefault()
        this.props.onSetRead(this.state.mail.id)

    }

    render() {

        if (!this.state.mail) return <h2>loading2</h2>
        const { mail } = this.state
        const { subject, body, isRead, id } = mail
        return (

            <div className="card-preview" >

                {/* <Route component={EmailDetails} path='/mail/:mailId' /> */}

                <li onClick={(ev) => { this.toggleDetails(ev) }} className={(!isRead ? 'bold' : '')}  >
                    {/* <Link to={`/mail/${id}`}> */}
                    <LongTxt text={subject} />
                    {/* </Link> */}
                </li>

                {this.state.isClicked && <EmailDetails onSaveReplay={this.props.onSaveReplay} onDeleteMail={this.props.onDeleteMail} mail={mail} />}
            </div>
        )

    }



}