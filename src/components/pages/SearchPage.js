import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as actions from '../../BooksAPI';

import Book from '../Books';

class SearchPage extends Component {



  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchResults: [],
      query: '',
      NotFounded: false

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

  updateQuery = (query) => {

    this.setState({ query: query }, this.submitSearch);

  }

  submitSearch = () => {
    if (this.state.query === '' || this.state.query === undefined) {
      this.setState({ searchResults: [] });

    }

    actions.search(this.state.query.trim())
      .then(res => {

        try {
          res.forEach(book => {
            let found = this.state.books.filter(b => b.id === book.id);
            if (found[0]) {

              book.shelf = found[0].shelf;
            }
          });
          console.log(res)
          this.setState({ searchResults: res, NotFounded: false });


        }
        catch (e) {
          this.setState({ searchResults: [], NotFounded: true });

        }

      });

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

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'
          >Close</Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event => { this.updateQuery(event.target.value) })} />
          </div>

        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {
              (this.state.searchResults.length === 0) && (this.state.NotFounded) ?
                "NOT FOUNDED!"
                :
                (this.state.searchResults.length === 0) && (!this.state.NotFounded) ?
                  ""
                  :
                  this.state.searchResults.map((item, index) => <Book book={item} index={index} updateBook={this.updateBook} key={item.id} />)

            }
          </ol>
        </div>
      </div>
    )

  }

}

export default SearchPage;