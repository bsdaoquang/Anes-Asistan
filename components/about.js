import React from 'react'
import {Text, View, StyleSheet, SafeAreaView } from 'react-native'

import app from '../app.json'

export default function About({navigation}){
	return(
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>TRỢ LÝ GÂY MÊ</Text>
			<Text style={styles.desc}>Phiên bản: {app["expo"]["version"]}</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		marginTop: 40,
		paddingVertical:10
	},
	title:{
		color: '#777',
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold',
		fontFamily: 'sans-serif',
		textTransform: 'uppercase'
	},
	desc:{
		color: '#777',
		textAlign: 'center',
		fontSize: 16,
		fontFamily: 'sans-serif',
	},
	titleInfo:{
		color: '#777',
		fontSize: 18,
		fontWeight: 'bold',
		fontFamily: 'sans-serif',
		marginVertical: 8
	},
	textInfo:{
		color: '#777',
		fontSize: 16,
		fontFamily: 'sans-serif',
		marginVertical: 5
	}
})
