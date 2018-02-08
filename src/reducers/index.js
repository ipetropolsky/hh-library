import { combineReducers } from 'redux'
import books from './books'
import visibilityFilter from './visibilityFilter'

const libraryApp = combineReducers({
    books,
    visibilityFilter
});

export default libraryApp;
