import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

let city = "";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/temp" component={Temp}></Route>
      	</Switch>
	</div>
	</Router>
  );
}

function Home() {
	return(
		<View style={styles.container}>
			<Text style={styles.title}>Entrez le nom de la ville :</Text>
			<TextInput style={styles.input} textContentType="addressCityAndState"/>
			<Button title="Press me" onPress={() => window.alert('Saved')}/>
	  	</View>
	)
	
}

function Temp() {
	return(
		<h2> Il fait cette température :</h2>
		
	)
}



const styles = StyleSheet.create({
  	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 16,
  	},
  	title: {
		textAlign: 'center',
		marginVertical: 8,
	},
	input: {
		height: 40,
		margin: 12,
		padding: 12,
		borderWidth: 1,
		borderRadius: 5,
	},
});


