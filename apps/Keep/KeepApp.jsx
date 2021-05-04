import { KeepService } from './services/keep-service.js'
import { NoteAdd } from '../Keep/cmps/NoteAdd.jsx'

export class KeepApp extends React.Component {
    state = {
        notes: null,
        currView: "NoteText"
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


    // DynamicCmp = (props) => {
    //     switch (this.state.currView) {
    //         case 'NoteText':
    //             return <NoteText {...props} />
    //         case 'NoteImg':
    //             return <NoteImg {...props} />
    //         case 'NoteTodos':
    //             return <NoteTodos {...props} />
    //         default:
    //             return 
    //     }
    // }



    render() {
        const { notes,currView } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <section>
                <NoteAdd/>
                <h2>Your Notes</h2>

                {/* <this.DynamicCmp name ={currView}/> */}
            </section>
        )
    }
}