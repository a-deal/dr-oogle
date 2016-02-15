import React, { Component } from 'react'

class ReviewDetails extends Component {
	render() {
		let review = this.props.details
		return (
			<tr key={this.props.id}>
				<td className="col-md-3">
					<ul style={{listStyle: 'none'}}>
						<li><b>Author</b>: {review.author}</li>
						<li><b>Rating</b>: {review.rating}</li>
						<li><b>Date</b>: {review.date}</li>
					</ul>
				</td>
				<td>{review.comment}</td>
			</tr>

		)
	}
}

export default ReviewDetails