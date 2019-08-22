import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input'
import { bindActionCreators } from 'redux';
import { fetchRestaurant } from '../actions'

class RestaurantDetailView extends Component {

	componentDidMount() {
		this.props.fetchRestaurant(this.props.match.params.id)
	}

	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<AppBar position="relative" style={{background: '#3C5165',color: '#E4F2FC'}}>
					<Toolbar>
						<AccessibilityNewIcon />
						<Link to={'/'} style={{textDecoration: 'none'}}>
						<Typography variant="h6" style={{color: 'white', marginLeft:'15px'}} noWrap>
							AccessiBull.City
						</Typography>
						</Link>
					</Toolbar>
				</AppBar>
				<Container maxWidth="sm">
						<div style={{padding: '1.5em 0 1.5em 0'}}>
							<Grid container spacing={2} justify="left">
								<Grid item>
									<Link to="/" style={{textDecoration: 'none'}}>
										<Button variant="contained" style={{background: '#3C5165', color: '#E4F2FC'}}>
										Back To Restaurants
										</Button>
									</Link>
								</Grid>
							</Grid>
						</div>
				</Container>
			</React.Fragment>
		)
	}
};

function mapStateToProps(state) {
	return {
		restaurant: state.current_restaurant
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{fetchRestaurant}, dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RestaurantDetailView);