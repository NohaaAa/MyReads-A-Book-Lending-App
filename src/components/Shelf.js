import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import Book from './Books'

class Shelf extends Component {

/*
  componentDidMount() {
    console.log(this);
  }
*/

  render() {

    const {books, name, updateBook} = this.props;

    return(

      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {

              books.map( 
                (book, key) => <Book updateBook={updateBook} book={book} key={key} />
              )
            }
          </ol>
        </div>
      </div>

    )
  }
}

export default Shelf;