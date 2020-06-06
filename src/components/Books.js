/* eslint-disable no-mixed-operators */
import React, {Component} from 'react';


class Book extends Component {
 
    render() {
        const {book, updateBook} = this.props;
        return ( 
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, background: `url("${book.imageLinks && book.imageLinks.thumbnail || ''}")`}}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf || 'none'} onChange={ (e => {updateBook(book, e.target.value)}) }>

                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title || 'No Title Found...'}</div>
                    <div className="book-authors">{book.authors && book.authors.join(', ') || "No Author Found.."}</div>
                </div>
            </li>

        )
    }

}

export default Book;

