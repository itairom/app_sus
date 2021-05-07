import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'


export class BookApp extends React.Component {
    state = {
        books: null,
        filter: null
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query(this.state.filter)
            .then((books) => {
                this.setState({ books })
            })
    }

    onSetFilter = (filter) => {
        this.setState({ filter }, this.loadBooks)
    }

    render() {
        const { books} = this.state
        if (!books) return <div>Loading...</div>
        return (
            <section>
                    <BookFilter onSetFilter={this.onSetFilter} />
                    <BookList books={books} onSelectBook={this.onSelectBook} />
            </section>
        )
    }
}