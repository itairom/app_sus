import { KeepService } from './services/keep-service.js'
import { KeepAdd } from './cmps/KeepAdd.jsx'
import { KeepList } from './cmps/KeepList.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: []
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes() {
        KeepService.query()
            .then(notes => {
                console.log(notes);        
                this.setState({ notes })
            })
    } 

    render() {
        const { notes } = this.state
        if (!notes || !notes.length) return <div>Loading...</div>
        return (
            <section className="keep-app">
                <KeepAdd/>
                <h2>Your Notes</h2>
                <KeepList notes={notes}/>

            </section>
        )
    }
}