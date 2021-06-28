import Style from './src/Style';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App(){
	const [text, setText] = useState("");
	const [city, setCity] = useState("");
	const [cityTemp, setCityTemp] = useState(250);

	return(
		<Router>
				<div>
					<View style={Style.nav_container}>
						<Link Style={"margin: 0 20px; font-size: 25px;"} to="/">Home</Link>
						<Link Style={"margin: 0 20px; font-size: 25px;"} to="/temp">Temp</Link>
					</View>	
					<View>
						<Text style={Style.title}>Ville séléctionner : {city}</Text>
					</View>
					<hr/>
					<Switch>
						<Route exact path="/">
							<View style={Style.container}>
								<Text style={Style.title}>Entrez le nom de la ville :</Text>
								<Text style={Style.text}>example: "London, GB"</Text>
								<TextInput 
								style={Style.input}
								placeholder='e.g. Paris, FR'
								onChangeText={(val) => setText(val)} 
								/>
								<Button
								title='Confirmer' 
								onPress={() => {
									let error = false
									fetch('http://api.openweathermap.org/data/2.5/weather?q=' + text + '&appid=98b7465353d383f3d0f3bc4a284a48ae')
										.then((response) => {
											let data = response.json()
											return data
										})
										.then((data) => {
											console.log(data)
											let temp = Math.floor((data.main.temp - 273.15) * 10) / 10
											setCityTemp(temp)
										})
										.catch(err => {
											error = true
										})
										.then(() => {
											switch (error) {
												case false:
													window.alert("Ville trouvé")
													setCity(text)
													break;

												case true:
													window.alert("Ville introuvable")
													break;
											}
										})
								}}
								/>
							</View>
						</Route>
						<Route exact path="/temp">
							{temp()}
						</Route>
					</Switch>
				</div>
			</Router>
	);
	function temp(){
		if(cityTemp == 250){
			return(
			<View style={Style.none}>
				<Text style={Style.title}> Vous n'avez pas encore séléctionner de ville </Text>
			</View>
			)
		}
		else{
			return(
				<View style={ cityTemp < 15 ? Style.blue_container : Style.red_container}>
					<Text style={cityTemp < 15 ? Style.title : Style.white_title}> {cityTemp}°C ! {cityTemp < 15 ? "Il fait froid" : "Il fait chaud"} </Text>
				</View>
			)
		}
	
	}
}

export default App;


// N'utilise pas les hooks comme dans la contrainte posé ↓↓↓
//👎


// export default class ReactExercice extends Component {
	
// 	constructor(props?: any){
// 		super(props)
// 		this.state = {
// 			text: "",
// 			cityName: "",
// 			cityTemp: 250,
// 		}
// 	}
	


// 	render(){
// 		return (
// 			<Router>
// 				<div>
// 					<View style={Style.nav_container}>
// 						<Link Style={"margin: 0 20px; font-size: 25px;"} to="/">Home</Link>
// 						<Link Style={"margin: 0 20px; font-size: 25px;"} to="/temp">Temp</Link>
// 					</View>	
// 					<View>
// 						<Text style={Style.title}>Ville séléctionner : {this.state.cityName}</Text>
// 					</View>
// 					<hr/>
// 					<Switch>
// 						<Route exact path="/">
// 							<View style={Style.container}>
// 								<Text style={Style.title}>Entrez le nom de la ville :</Text>
// 								<Text style={Style.text}>example: "London, GB"</Text>
// 								<TextInput 
// 								style={Style.input}
// 								placeholder='e.g. Paris, FR'
// 								onChangeText={(val) => this.setState({text: val})} 
// 								/>
// 								<Button
// 								title='Confirmer' 
// 								onPress={() => {
// 									let error = false
// 									fetch('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.text + '&appid=98b7465353d383f3d0f3bc4a284a48ae')
// 										.then((response) => {
// 											let data = response.json()
// 											return data
// 										})
// 										.then((data) => {
// 											console.log(data)
// 											let temp = Math.floor((data.main.temp - 273.15) * 10) / 10
// 											this.setState({cityTemp: temp})
// 										})
// 										.catch(err => {
// 											error = true
// 										})
// 										.then(() => {
// 											switch (error) {
// 												case false:
// 													window.alert("Ville trouvé")
// 													this.setState({cityName: this.state.text})
// 													break;

// 												case true:
// 													window.alert("Ville introuvable")
// 													break;
// 											}
// 										})
// 								}}
// 								/>
// 							</View>
// 						</Route>
// 						<Route exact path="/temp">
// 							{this.temp()}
// 						</Route>
// 					</Switch>
// 				</div>
// 			</Router>
// 		)
// 	}

// 	temp(){
// 		if(this.state.cityTemp == 250){
// 			return(
// 			<View style={Style.none}>
// 				<Text style={Style.title}> Vous n'avez pas encore séléctionner de ville </Text>
// 			</View>
// 			)
// 		}
// 		else{
// 			return(
// 				<View style={ this.state.cityTemp < 15 ? Style.blue_container : Style.red_container}>
// 					<Text style={this.state.cityTemp < 15 ? Style.title : Style.white_title}> {this.state.cityTemp}°C ! {this.state.cityTemp < 15 ? "Il fait froid" : "Il fait chaud"} </Text>
// 				</View>
// 			)
// 		}

// 	}



// }