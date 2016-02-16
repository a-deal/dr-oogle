import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import ReviewDetails from './ReviewDetails'

class Review extends Component {
	render() {
		let { scrapedQuery } = this.props
		let review = scrapedQuery.reviews.map((rev, index) => {
			return (
					<ReviewDetails details={rev} id={index} />
			)
		})
		return (
				<div>
					<h2 style={{borderBottom: '3px #337ab7 solid', paddingBottom: '10px', margin: '0 0 15px 0'}}>
						{this.props.scrapedQuery.name}
					</h2>
					<Table bordered hover striped>
						<tbody>
								{review}
						</tbody>
					</Table>
				</div>
			)
	}
}

 Review.propTypes = {
 	scrapedQuery: React.PropTypes.object.isRequired
 }

export default Review
