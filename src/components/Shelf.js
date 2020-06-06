import React, {Component} from 'react';

import Book from './Books'

class Shelf extends Component {



  render() {

    const {books, name, updateBook} = this.props;

    return(

      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map( 
                
                ((book, index) => <Book updateBook={updateBook} book={book} index={index} />))
            }
              
          </ol>
        </div>
      </div>

    )
 

  }

}    


export default Shelf;