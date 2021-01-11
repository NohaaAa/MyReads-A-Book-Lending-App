import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../BooksAPI';
import Shelf from '../Shelf';
import ReactLoading from 'react-loading';

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }



  async componentDidMount() {

    try {
      const books = await actions.getAll();

      this.setState({ books });
    } catch (e) {
      console.log('ERROR:', e.message)
    }

  }

  updateBook = (book, shelf) => {
    actions.update(book, shelf)
      .then(res => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(book => book.shelf !== book.id).concat({ book })
        }))
      });

  }

  render() {

    if (this.state.books.length) {

      return (

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>

              <Shelf updateBook={this.updateBook} name='Currently Reading' books={this.state.books.filter(book => book.shelf === "currentlyReading")} />
              <Shelf updateBook={this.updateBook} name='Want To Read' books={this.state.books.filter(book => book.shelf === "wantToRead")} />
              <Shelf updateBook={this.updateBook} name='Read' books={this.state.books.filter(book => book.shelf === "read")} />

            </div>
          </div>
          <div className="open-search">
            <Link className='btn' to='/search'>Add a book</Link>
          </div>
        </div>

      )
    } else {
      return <ReactLoading type='spin' height={667} width={375} />;

    }

  }

}

export default MainPage;