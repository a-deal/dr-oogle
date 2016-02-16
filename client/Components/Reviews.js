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
<<<<<<< HEAD
			dentistReviews: []
		}
	}

	componentWillMount() {
		console.log('hello in componentDidMount')
		let self = this
=======
			dentistReviews: null,
			isLoading: false
		}
	}

	componentDidMount() {
>>>>>>> 3964680b66b2f2faf2a2eeba9d10cdeff8de9086
		getAllDentists()
			.then((results) => {
				this.setState({
					dentists: results.data
				})
<<<<<<< HEAD
				this.render();
				console.log(self)
			}.bind(this))
			.then(function() {
				console.log('state is', this.state.dentists)
			})
	}

	// init() {
	// 	getAllDentists()
	// 		.then((results) => {
	// 			this.setState({
	// 				dentists: results
	// 			})
	// 		})
	// }
=======
				this.render()
			})
			.catch((err) => {
				console.log(err)
			})
	}
>>>>>>> 3964680b66b2f2faf2a2eeba9d10cdeff8de9086

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
