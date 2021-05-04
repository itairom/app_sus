import { mailService } from '../services/mail-service.js'

export class EmailApp extends React.Component {


    state ={

    }

    componentDidMount(){
        this.loadMails()
    }

    loadMails = () => {
        mailService.query()
            .then(notes => {
                console.log(notes);
            })
    }

    render() {

        return (
            <h2>mailsList</h2>

        )

    }

}
