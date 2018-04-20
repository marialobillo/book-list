import React, { Component } from 'react';

class BookList extends Component{
	renderList(){
		return this.props.books.map((book) => {
			return (
				<li key={book.title}
					className0"list-group-item">
					{book.title}
				</li>
			)
		})
	}
	render(){
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}


export default BookList;
