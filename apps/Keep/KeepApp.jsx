import { KeepService } from './services/keep-service.js'

export class KeepApp extends React.Component {
    state = {
        notes: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes(){
        KeepService.query()
        .then(notes=>{
            console.log(notes);
            this.setState({notes})
        })
    }



    render() {
        const { notes } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <section>
                <p>{notes}</p>
            </section>
        )
    }
}