import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { getAllDentists, getDentistReviews } from '../utils/helpers'
import Review from './Review'

class Reviews extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dentists: null,
			//		[
			//	{ name: 'dr deal',
			//		id: 12 },
			//	{ name: 'dr vinyoo',
			//		id: 10 },
			//	{ name: 'dr wilson',
			//		id: 32 },
			//	{ name: 'dr bothman',
			//		id: 4}
			//],
			dentistReviews: null
		}
	}

	componentWillMount() {
		//fetch all dentist names
		// this.init()
		console.log('hello in componentDidMount')
		let self = this
		getAllDentists()
			.then(function (results) {
				console.log('hello called get all dentists!', this)
				this.setState({
					dentists: results.data
				})

				console.log(self)
			}.bind(this))
			.then(function() {
				console.log('state is', this.state.dentists)

			})
	}

	init() {
		getAllDentists()
			.then((results) => {
				this.setState({
					dentists: results
				})
			})
	}

	handleRequest(id) {
		//if(id === 12) {
		//
		//this.setState({
		//	dentistReviews: {
		//		dentist: 'ANDREW DEAL',
		//		reviews: [
		//			{
		//				rating: 'five',
		//				author: 'jira',
		//				comment: 'some lorem ipsum stuff here',
		//				date: '022616'
		//			},
		//			{
		//				rating: 'four',
		//				author: 'hannaha',
		//				comment: 'some lorem ipsum stuff here',
		//				date: '112616'
		//			},
		//			{
		//				rating: 'three',
		//				author: 'adam',
		//				comment: 'some lorem ipsum stuff here',
		//				date: '021615'
		//			}
		//		]}
		//})
		//} else {
		//	this.setState({
		//		dentistReviews: {
		//			dentist: 'Jira Vinyoo',
		//			reviews: [
		//				{
		//					rating: '10',
		//					author: 'jira',
		//					comment: 'blahhhhh blahhh',
		//					date: '022616'
		//				},
		//				{
		//					rating: '20',
		//					author: 'hannaha',
		//					comment: 'some lorem ipsum stuff here',
		//					date: '112616'
		//				},
		//				{
		//					rating: 'three',
		//					author: 'adam',
		//					comment: 'some lorem ipsum stuff here',
		//					date: '021615'
		//				}
		//			]}
		//	})
		//}
		console.log('before getDentistReviews')
		getDentistReviews(id)
			.then((res) => {
				console.log('called get dentist reviews', res.data)
				this.setState({
					dentistReviews: res.data
				})
			})
	}

	render() {
		console.log('rendering Reviews:', this.state.dentists)
		let { dentists } = this.state
		let listOfDentists = dentists.map((dentist) => {
			var request = () => this.handleRequest(dentist.id);
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
					{this.state.dentistReviews ? <Review review={this.state.dentistReviews}/> : null}
				</Col>
			</Row>
		);
	}
}

export default Reviews
