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

    dateToString(strTime) {
        let date = new Date(strTime);
        return date.toDateString()
    }

    render() {

        if (!this.state.mail) return <h2>loading2</h2>
        const { mail } = this.state
        const { subject, body, isRead, id, sentAt } = mail
        return (

            <div className="card-preview " >
                <img src="apps/Mail/asset/svg/star.svg" />
                <div className="sender-name flex">Benny Gantz</div>
                {!this.state.isClicked && 
                
                <div className="preview-subject flex" onClick={(ev) => { this.toggleDetails(ev) }} className={(!isRead ? 'bold' : '')}  >
                    <LongTxt className="preview-subject " text={subject} />
               


                </div>}

                <div className="msg-date flex">{this.dateToString(sentAt)}</div>




                {this.state.isClicked && <EmailDetails toggleDetails={this.toggleDetails} onDeleteMail={this.props.onDeleteMail} mail={mail} />}
            </div>
        )

    }



}