import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import formulas
import NauseaVomiting from './formulas/nauseaAndVomiting'
import PulmonaryComplication from './formulas/pulmonary_complication'
import ASAPhysical from './formulas/asa_physical'
import DifficultAirway from './formulas/difficult_airway'

export default function App() {
  return (
    <DifficultAirway />
    //<ASAPhysical />
  	//<PulmonaryComplication />
    //<NauseaVomiting />
  );
}
