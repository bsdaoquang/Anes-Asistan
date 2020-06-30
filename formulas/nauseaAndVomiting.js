import React, {useState} from 'react'
import {View, Text, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard} from 'react-native'

import {styles} from '../components/styles'
import {t} from '../locales/index'

export default function NauseaVomiting(){
	return(
	<View>
	    <ScrollView>
	    <KeyboardAvoidingView style={styles.container}>
	      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
	      	<View style={styles.inner}>
	      		{/*This is header*/}
		        <View style={styles.headerContain}>
			        <Text style={styles.headerTitle}>{t('nausea_voimiting')}</Text>
			        <Text style={styles.headerSubTitle}>Predicts risk of Postoperative Nausea and Vomiting (PONV)</Text>
			        </View>
		        {/*End header*/}

				<View style={styles.infoContain}>
              		<Text style={styles.infoText}>Use in patients undergoing general anesthesia.</Text>
            	</View>

            	
	      	</View>	
	      </TouchableWithoutFeedback>
	    </KeyboardAvoidingView>

	    </ScrollView>
	</View>
	)
}