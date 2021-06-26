import Style from './src/Style';
import React, { Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default class ReactExercice extends Component {

	constructor(props?: any){
		super(props)
		this.state = {
			cityName: ""
		}
	}

	render(){
		return (
			<Router>
				<div>	
					<nav>
						<ul>
							<li>
							<Link to="/">Home</Link>
							</li>
							<li>
							<Link to="/temp">Temp</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route exact path="/">
							<View style={Style.container}>
								<Text style={Style.title}>Entrez le nom de la ville :</Text>
								<TextInput 
								style={Style.input}
								placeholder='Enter city name...' 
								onChangeText={(val) => this.setState({cityName: val})} 
								/>
								<Text style={Style.title}>Le text est le suivant : {this.state.cityName}</Text>
							</View>
						</Route>
						<Route exact path="/temp">
							<h2> Il fait cette température :</h2>
						</Route>
					</Switch>
				</div>
			</Router>
		)
	}
}