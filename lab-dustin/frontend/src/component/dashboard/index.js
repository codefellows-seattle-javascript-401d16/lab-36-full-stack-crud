import React from 'react';
import {connect} from 'react-redux';
import BookshelfForm from '../bookshelf-form';
import * as util from '../../lib/util';
import * as bookshelfActions from '../../action/bookshelf-actions.js';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.bookshelvesFetch();
  }

  render() {
    return (
      <div className='dashboard'>
        <h2>The board of the Dash</h2>
        <BookshelfForm
          buttonText="create shelf"
          onComplete={this.props.bookshelfCreate}
        />

        {this.props.bookshelves.map(bookshelf =>
          <div key={bookshelf._id} >
            {bookshelf.title}
            <button onClick={() => this.props.bookshelfDelete(bookshelf)}>
          DELETE
            </button>
          </div>
        )}
      </div>

    );
  }
}

let mapStateToProps = (state) => ({bookshelves: state.bookshelves});
let mapDispatchToProps = (dispatch) => ({
  bookshelfCreate: (bookshelf) => dispatch(bookshelfActions.bookshelfCreateRequest(bookshelf)),
  bookshelfDelete: (bookshelf) => dispatch(bookshelfActions.bookshelfDeleteRequest(bookshelf)),
  bookshelvesFetch: () => dispatch(bookshelfActions.bookshelfFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
