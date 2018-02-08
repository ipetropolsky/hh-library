import { connect } from 'react-redux'
import BookList from '../components/BookList'

const getVisibleBooks = (books, filter) => {
    switch (filter) {
        case 'SHOW_AVAILABLE':
            return books.filter(book => !book.readers.length)
        case 'SHOW_BUSY':
            return books.filter(book => book.readers.length)
        case 'SHOW_ALL':
        default:
            return books
    }
};

const mapStateToProps = state => {
    return {
        books: getVisibleBooks(state.books, state.visibilityFilter)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onTodoClick: id => {
        //     dispatch(toggleTodo(id))
        // }
    }
};

const BookListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);

export default BookListContainer;
