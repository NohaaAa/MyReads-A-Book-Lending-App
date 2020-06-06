import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../../BooksAPI';

import Book from '../Books';

class SearchPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchResults: [],
      query: ''
    };
  }

  async componentDidMount() {

    try {
      const books = await BooksAPI.getAll();
      console.log(books);
      this.setState( { books } );
    } catch(e) {}

  }

  updateQuery = (query) => {
    
    this.setState({query: query}, this.submitSearch);

  }

  submitSearch = () => {
    if(this.state.query === '' || this.state.query === undefined) {
      return this.setState({ searchResults: [] });
    }

    BooksAPI.search(this.state.query.trim())
    .then(response => {
      console.log(response);

      if(response.error)  {
        return this.setState({ searchResults: [] });
      } else {

        response.forEach( book => {
          let found = this.state.books.filter(b => b.id === book.id);
          if(found[0]) {
            console.log('same!');
            book.shelf = found[0].shelf;
          }
        });
        return this.setState({ searchResults: response });
      }
    });
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
              onChange={(event => {this.updateQuery(event.target.value)})}/>
          </div>
          
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchResults.map( (item, key) => <Book book={item} key={key} updateBook={this.updateBook}/> )
            }
          </ol>
        </div>
      </div>
    )
    
  }

}

export default SearchPage;