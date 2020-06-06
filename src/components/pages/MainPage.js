import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../../BooksAPI';

import Shelf from '../Shelf';

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }


    
  async componentDidMount() {

    try {
      const books = await BooksAPI.getAll();
      console.log(books);
      this.setState( { books } );
    } catch(e) {}

  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response => {
      book.shelf= shelf;
      this.setState(state => ({
        books: state.books.filter(book => book.shelf !== book.id).concat({book})
      }))
    });

  }
    
  render() {
    // const { books } = this.state
    if(!this.state.books.length) {
      return 'loading!';
    }
    return (
         
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <Shelf updateBook={this.updateBook} name='Currently Reading' books={this.state.books.filter(book => book.shelf === "currentlyReading")}/>
            <Shelf updateBook={this.updateBook} name='Want To Read' books={this.state.books.filter(book => book.shelf === "wantToRead")}/>
            <Shelf updateBook={this.updateBook} name='Read' books={this.state.books.filter(book => book.shelf === "read")}/>
           
          </div>
        </div>
        <div className="open-search">
          <Link className='btn' to='/search'>Add a book</Link>
        </div>
      </div>

    )

  }
  
}

export default MainPage;