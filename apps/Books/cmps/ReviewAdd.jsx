import { bookService } from '../services/book-service.js'

export class ReviewAdd extends React.Component {
    state = {
        review: {
            name: 'Books Reader',
            rate: 1,
            readAt: "2021-05-02",
            text: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = (ev.target.type === "number") ? +ev.target.value : ev.target.value
        this.setState(prevState => ({
            review: {
                ...prevState.review,
                [field]: value
            }
        }))
    }


    onSaveReview = (ev) => {
        ev.preventDefault()
        const bookId = this.props.bookId;
        bookService.addReview(bookId, this.state.review)
            .then(() => {
                this.props.loadBook()
            })
            .catch('We got error..')
    }

    // onRemoveReview=()=>{
    //     const bookId = this.props.bookId
    //     bookService.removeReviewById(book,bookId)
    //     .then(() => this.props.loadBook())
    // }


    render() {
        const { name, readAt, text, rate } = this.state.review
        const { reviews } = this.props.book

        return (
            <section>

                <form className="review" onSubmit={this.onSaveReview}>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="userName" name="name" value={name} onChange={this.handleChange} />

                    <label htmlFor="date">Read at</label>
                    <input type="date" id="date" name="readAt" value={readAt} onChange={this.handleChange} />

                    <label htmlFor="rate">Rate:</label>
                    <select name="rate" id="rate" value={rate} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label htmlFor="text">Your Review</label>
                    <textarea id="text" name="text" onChange={this.handleChange} value={text}></textarea>
                    <button className="btn-submit">Save</button>
                </form>
                <div>
                    {reviews && <div>{reviews.map(review => {
                        return (
                            <div key={review.id}>
                                <p>{review.name}</p>
                                <p>{review.rate}</p>
                                <p>{review.readAt}</p>
                                <p>{review.text}</p>
                                <button onClick={this.onRemoveReview}>X</button>
                            </div>
                        )
                    })}</div>}
                </div>


            </section >
        )
    }
}
