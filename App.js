import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import formulas
import NauseaVomiting from './formulas/nauseaAndVomiting'
import PulmonaryComplication from './formulas/pulmonary_complication'

export default function App() {
  return (
  	<PulmonaryComplication />
    //<NauseaVomiting />
  );
}

