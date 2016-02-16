import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { getAllDentists, getDentistReviews } from '../utils/helpers'
import Review from './Review'
import Loader from 'react-loader'

class Reviews extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dentists: [],
			dentistReviews: null,
			isLoading: false
		}
	}

	componentDidMount() {
		getAllDentists()
			.then((results) => {
				this.setState({
					dentists: results.data
				})
				this.render()
			})
			.catch((err) => {
				console.log(err)
			})
	}

	handleRequest(id, name) {
		this.setState({
			isLoading: true
		})

		let dentist = name
		getDentistReviews(id)
			.then((res) => {
				res.data.name = dentist
				this.setState({
					dentistReviews: res.data,
					isLoading: false
				})
			})
	}

	render() {
		let { dentists } = this.state
		let listOfDentists = dentists.map((dentist) => {
			var request = () => this.handleRequest(dentist.id, dentist.name);
			return (
					<ListGroupItem onClick={request}>{dentist.name}</ListGroupItem>
			)
		})

		return (
			<Row>
				<Col xs={4} md={2}>
					<ListGroup>
						{listOfDentists}
					</ListGroup>
				</Col>
				<Col xs={12} md={10}>
					{ this.state.isLoading &&
						<div className="col-md-6 col-md-offset-3 text-center" style={{marginTop: '40px'}}>
							<Loader color="#337ab7" />
						</div> }
					{ this.state.dentistReviews && !this.state.isLoading ? <Review scrapedQuery={this.state.dentistReviews}/> : null }
				</Col>
			</Row>
		);
	}
}

export default Reviews
