import React, {useState} from 'react'
import {
	View, Text, TextInput, ScrollView,
	TouchableOpacity, TouchableWithoutFeedback,
	KeyboardAvoidingView, Keyboard, SectionList,
	StyleSheet
} from 'react-native'
import DropDownPicker  from 'react-native-dropdown-picker'

import Constants from "expo-constants";

import AdMob from '../components/AdMob'

import {styles} from '../components/styles'
import {t} from '../locales/index'

export default function SectionListExample(){

//có thể sử dụng trong phần mềm tính các thuốc thường dùng, nhóm thuốc, tên thuốc
const focus = false
const setStyle = () => {
	focus = true
	console.log(focus)
}

	return(

								 <View style={{flex: 1, justifyContent: 'center'}}>
								 <DropDownPicker
									 items={[
											{label: t('anorectal'), value: -0.8470},
											{label: t('aortic'), value: 0.7178},
											{label: t('bariatric'), value: -0.6282},
											{label: t('brain'), value: 0.6841},
											{label: t('breast'), value: -2.3318},
											{label: t('cardiac'), value: 0.1382},
											{label: t('ent'), value: -0.3665},
											{label: t('foregut'), value: 1.0660},
											{label: t('gallbladder'), value: -0.3951},
											{label: t('hernia'),  value: 0},
											{label: t('intestinal'),  value: 0.6169},
											{label: t('neck'), value: -0.0872},
											{label: t('gynecologic'), value: -0.4101},
											{label: t('orthopedic'), value: -0.5415},
											{label: t('abdomen'), value: 0.4021},
											{label: t('peripheral'), value: -0.4519},
											{label: t('skin'), value: -0.5075},
											{label: t('spine'), value: -0.5672},
											{label: t('non-esophageal'), value: 0.8901},
											{label: t('vein'), value: -1.4760},
											{label: t('urology'), value: 0.1076}
										]}
									 defaultNull
									 placeholder="Select procedure"
									 containerStyle={{height: 40, marginBottom: 150}}
									 onChangeItem={item => setProcedure(item.value)}
								 />
									 <View>
									 <Text style={{backgroundColor: 'coral'}}>
									 	alo
									 </Text>
									 </View>
								 </View>
	)
}

const local_styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
