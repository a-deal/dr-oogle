import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, PageHeader, Nav, NavItem, Button, Navbar } from 'react-bootstrap'

export default class App extends Component {

	render() {
		return (
				<Grid>
					<Row>
						<Col xs={15} md={12}>
							<Row style={{paddingBottom: '15px', marginBottom: '25px', borderBottom: '1px lightgray solid'}}>
								<Col md={12}>
									<h1>
										Oogle Companion
										<span style={{ float: 'right' }}>

											<Button bsSize="large" bsStyle="success" style={{marginRight: '10px'}}>
												<Link style={{textDecoration: 'none', color: 'white'}} to="/findDentist">Find a New Dentist</Link>
											</Button>
											<Button bsSize="large" bsStyle="success">
												<Link style={{textDecoration: 'none', color: 'white'}} to="/viewDentists">View Dentists</Link>
											</Button>

										</span>
									</h1>
								</Col>
							</Row>
							<br/>
							{this.props.children}
							</Col>
					</Row>
				</Grid>
		);
	}
}