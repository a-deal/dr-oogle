import React, { Component } from 'react'
import { scrapeLink } from '../utils/helpers'
import Review from './Review'
import { ButtonInput, Input } from 'react-bootstrap'

class UrlInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			scraped: true,
			scrapedReviews: null
			//{
			//	dentist: 'ANDREW DEAL',
			//	reviews: [
			//		{
			//			rating: 'five',
			//			author: 'jira',
			//			comment: 'some lorem ipsum stuff here',
			//			date: '022616'
			//		},
			//		{
			//			rating: 'four',
			//			author: 'hannaha',
			//			comment: 'some lorem ipsum stuff here',
			//			date: '112616'
			//		},
			//		{
			//			rating: 'three',
			//			author: 'adam',
			//			comment: 'some lorem ipsum stuff here',
			//			date: '021615'
			//		}
			//]}
		}
	}

	handleSubmit() {
		this.setState({
			scraped: false,
			scrapedReviews: null
		})

		let oogleUrl = this.url.getValue()
		this.url.value = ''

		scrapeLink(oogleUrl)
			.then((scrapedReviews) => {
				console.log(scrapedReviews)
				this.setState({
					scraped: true,
					scrapedReviews: scrapedReviews
				})
			})
	}

	setRef(ref) {
		this.url = ref
	}

	render() {
		return (
				<div>
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<form className="col-md-9" onSubmit={() => this.handleSubmit()}>
							<Input type="text"
										 placeholder="Enter a Dr. Oogle URL i.e. https://www.doctor-oogle.com/650-san-francisco-dentist-dr-melissa-maus"
										 ref={(ref) => this.setRef(ref)}/>
						</form>
							<ButtonInput type="submit" bsStyle="primary">Find Reviews!</ButtonInput>
					</div>
					{ this.state.scraped ? <Review review={ this.state.scrapedReviews }/> : null }
				</div>
		)
	}
}

export default UrlInput