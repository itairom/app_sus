import { KeepService } from './services/keep-service.js'
import { KeepAdd } from './cmps/KeepAdd.jsx'
import { KeepList } from './cmps/KeepList.jsx'
import { KeepFilter } from './cmps/KeepFilter.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: [],
        filterBy: {
            type: 'All',
            txt: '',
            isPinned: null
        }
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        KeepService.query(this.state.filterBy)
            .then(notes => {
                this.setState({ notes })
            })
    }

    addNote = (note) => {
        KeepService.addNote(note)
        this.loadNotes()
    }

    onUpdateNote = (note) => {
        KeepService.updateNote(note)
        this.loadNotes()
    }

    onDeleteNote = (noteId) => {
        KeepService.deleteNote(noteId)
        this.loadNotes()
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy: {...filterBy } },this.loadNotes)
    }


    render() {
        const { notes } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <section className="keep-app">
                <KeepFilter onSetFilter={this.onSetFilter} />
                <h2>Your Notes</h2>
                <KeepAdd addNote={this.addNote} />
                <KeepList notes={notes} deleteNote={this.onDeleteNote} updateNote={this.onUpdateNote} />
            </section>
        )
    }
}