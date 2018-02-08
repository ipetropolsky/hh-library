import React from 'react'
import PropTypes from 'prop-types'

const Book = ({id, title, description, year, link, authors, tags, readers}) => {

    const authorItems = authors.map((author) => (
        <React.Fragment>
            <li className="author"
                key={author.id}>{author.name}</li>
        </React.Fragment>
    ));

    const tagItems = tags.map((tag) => (
        <li className="tag"
            key={tag.id}>{tag.text}</li>
    ));

    const readerItems = tags.map((reader) => (
        <li className="reader"
            key={reader.id}>{reader.name}</li>
    ));

    return (
        <div className="book">
            {!!authors.length &&
            <ul className="authors">
                {authorItems}
            </ul>
            }
            <h3 className="book-title">
                <span className="book-title__text">{title}</span>
                {' '}
                <span className="book-title__year">{year}</span>
            </h3>
            {!!tags.length &&
            <ul className="tags">
                {tagItems}
            </ul>
            }
            {!!readers.length &&
            <ul className="readers">
                {readerItems}
            </ul>
            }

        </div>
    );
};

Book.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    link: PropTypes.string,
    authors: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    readers: PropTypes.array.isRequired,
};

export default Book
