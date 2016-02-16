import React, { Component } from 'react'
import { scrapeLink } from '../utils/helpers'
import Review from './Review'
import { ButtonInput, Input } from 'react-bootstrap'
import Loader from 'react-loader'

class UrlInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			scraped: false,
			reviews: null,
			isLoading: false
		}
	}

	handleSubmit() {
		this.setState({
			scraped: false,
			reviews: null,
			isLoading: true
		})

		let oogleUrl = this.url.getValue()
		this.url.value = ''

		scrapeLink(oogleUrl)
			.then((scrapedReviews) => {
				this.setState({
					scraped: true,
					reviews: scrapedReviews.data,
					isLoading: false
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
						<form className="col-md-9">
							<Input type="text"
										 placeholder="Enter a Dr. Oogle URL i.e. https://www.doctor-oogle.com/650-san-francisco-dentist-dr-melissa-maus"
										 ref={(ref) => this.setRef(ref)}/>
						</form>
							<ButtonInput onClick={() => this.handleSubmit()} bsStyle="primary">Find Reviews!</ButtonInput>
					</div>
					{ this.state.isLoading && <div className="col-md-6 col-md-offset-3 text-center" style={{marginTop: '40px'}}><Loader color="#337ab7" /></div> }
					{ this.state.scraped ? <Review scrapedQuery={ this.state.reviews } /> : null }
				</div>
		)
	}
}

export default UrlInput
