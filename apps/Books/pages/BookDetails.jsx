// const { Link, Route } = ReactRouterDOM
import { LongTxt } from '../cmps/LongTxt.jsx'
import { bookService } from '../services/book-service.js'
import { ReviewAdd } from '../cmps/ReviewAdd.jsx'

export class BookDetails extends React.Component {
    state = {
        book: null,
        isLongTxtShown: false
    }

    componentDidMount() {
        this.loadBook()
    }

    loadBook() {
        const id = this.props.match.params.bookId
        bookService.getBookById(id)
            .then((book) => {
                if (!book) return this.props.history.push('/')
                this.setState({ book })
            })
    }

    onAddReview=()=>{
        this.loadBook()
    }

    pageCount = () => {
        const { book } = this.state
        if (book.pageCount > 500) return `${book.pageCount} – Long reading`
        if (book.pageCount > 200) return `${book.pageCount} – Decent Reading`
        if (book.pageCount < 100) return `${book.pageCount} – Light Reading`
        else return book.pageCount
    }

    publishedDate = () => {
        const { book } = this.state
        const year = new Date().getFullYear()
        const deff = year - book.publishedDate
        if (deff > 10) return `${deff} years ago – Veteran Book`
        if (deff < 1) return `1 Year – New!`
        else return `${deff} years ago`
    }

    price = () => {
        const { book } = this.state
        let price = book.listPrice.amount
        if (price > 150) return "red"
        if (price < 20) return "green"
        return "black"
    }

    toggleTxtShown = () => {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    }



    render() {
        const { book } = this.state
        if (!book) return <div>Loading...</div>
        return (
            <section className="book-details">
                <div className="img-details-container">
                    <img className="img-details" src={book.thumbnail} alt="" />
                    {book.listPrice.isOnSale && <div className="sale"><span>SALE</span></div>}
                </div>
                <div className="text-details">
                    <h2>{book.title}</h2>
                    <p>{book.subtitle}</p>
                    <p>authors: {book.authors.join(', ')}</p>
                    <p>publishedDate: {book.publishedDate, this.publishedDate()}</p>
                    <p>categories: {book.categories.join(', ')}</p>
                    <p>language: {book.language}</p>
                    <p>pageCount: {this.pageCount()}</p>
                    <p>price: <span className={this.price()}> {book.listPrice.amount}</span></p>

                    <LongTxt text={book.description} isLongTxtShown={this.state.isLongTxtShown} toggleTxtShown={this.toggleTxtShown} />
                    <button className="btn-go-back" onClick={() => this.props.history.push('/book')}>Go Back</button>
                </div>

                <div>
                    <ReviewAdd bookId={this.props.match.params.bookId} loadBook={this.onAddReview} 
                    book={book}/>
                </div>
            </section>
        )
    }

}