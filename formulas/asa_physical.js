import React, {useState} from 'react'
import {View, Text, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard} from 'react-native'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'

export default function ASAPhysical(){
	const [description, setDescription] = useState(0)
	const [emergency, setEmergency] = useState('')

	var point = description + emergency

	return(
		<View  style={styles.container}>
			<ScrollView>
			<KeyboardAvoidingView style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.inner}>
			{/*This is header*/}
			<View style={styles.headerContain}>
				<Text style={styles.headerSubTitle}>PHÂN LOẠI BỆNH NHÂN THEO TIÊU CHUẨN CỦA HIỆP HỘI GÂY MÊ HỒI SỨC MỸ</Text>
			</View>
			{/*End header*/}

			{/*This is form container*/}
			<View style={styles.formContain}>

				{/*This is input contain*/}
				<View style={styles.inputContain}>
					<View style={styles.titleInput}>
					<Text style={styles.titleInputText}>Mô tả</Text>
				</View>

				<View style={styles.buttonContainVertical}>
					<TouchableOpacity
					style= {description == 1 ? styles.buttonSelect : styles.buttonNonSelect}
					onPress={() => setDescription(1)}>
					<Text style={description == 1? styles.buttonTextSelect : styles.buttonTextNonSelect}>Bệnh nhân khỏe mạnh bình thường</Text>
					</TouchableOpacity>

					<TouchableOpacity
					style= {description == 2 ? styles.buttonSelect : styles.buttonNonSelect}
					onPress={() => setDescription(2)}>
					<Text style={description == 2? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có kèm theo bệnh ở một cơ quan ở mức độ trung bình</Text>
					</TouchableOpacity>

					<TouchableOpacity
					style= {description == 3 ? styles.buttonSelect : styles.buttonNonSelect}
					onPress={() => setDescription(3)}>
					<Text style={description == 3? styles.buttonTextSelect : styles.buttonTextNonSelect}>Bị tổn thương trầm trọng một cơ quan quan trọng, nhưng chưa làm mất chức năng của cơ quan đó</Text>
					</TouchableOpacity>

					<TouchableOpacity
					style= {description == 4 ? styles.buttonSelect : styles.buttonNonSelect}
					onPress={() => setDescription(4)}>
					<Text style={description == 4? styles.buttonTextSelect : styles.buttonTextNonSelect}>Bị tổn thương trầm trọng một cơ quan quan trọng, ảnh hưởng đến tiên lượng sống của bệnh nhân</Text>
					</TouchableOpacity>

					<TouchableOpacity
					style= {description == 5 ? styles.buttonSelect : styles.buttonNonSelect}
					onPress={() => setDescription(5)}>
					<Text style={description == 5? styles.buttonTextSelect : styles.buttonTextNonSelect}>Bệnh nhân có thể chết trên bàn mổ, cuộc sống không thể kéo dài hơn 24 giờ nếu không phẫu thuật</Text>
					</TouchableOpacity>

					<TouchableOpacity
					style= {description == 6 ? styles.buttonSelect : styles.buttonNonSelect}
					onPress={() => setDescription(6)}>
					<Text style={description == 6? styles.buttonTextSelect : styles.buttonTextNonSelect}>Bệnh nhân chết não, chờ hiến tạng</Text>
					</TouchableOpacity>

				</View>

			</View>
			{/*end input contain*/}

			</View>
			{/*end from contain*/}

			{/*This is form container*/}
			<View style={styles.formContain}>
				{/*This is input contain*/}
				<View style={styles.inputContain}>
				<View style={styles.titleInput}>
				<Text style={styles.titleInputText}>Cấp cứu</Text>
				</View>

				<View style={styles.buttonContainHorizontal}>
					<TouchableOpacity
					style= {emergency == 'E' ? styles.buttonSelect : styles.buttonNonSelect}
					onPress={() => setEmergency('E')}>
					<Text style={emergency == 'E'? styles.buttonTextSelect : styles.buttonTextNonSelect}>Có</Text>
					</TouchableOpacity>

					<TouchableOpacity
					style={emergency == '' ? styles.buttonSelect : styles.buttonNonSelect}
					onPress={() => setEmergency('')}>
					<Text style={emergency == ''? styles.buttonTextSelect : styles.buttonTextNonSelect}>Không</Text>
					</TouchableOpacity>
				</View>
			</View>
				{/*end input contain*/}
			<View style={styles.formInfo}>
				<Text style={styles.infoText}>Với bệnh nhân cấp cứu, thêm hậu tố E phía sau. Nếu trì hoãn có thể “gia tăng đáng kể mối đe dọa đến tính mạng hoặc các cơ quan cơ thể”. ASA 2014</Text>
			</View>
			</View>
			{/*end from contain*/}

			{/*This is result contain*/}
			<View style={styles.resultContain}>
				<View style={styles.resultTitle}>
					<Text style={styles.resultTitleText}>ASA: </Text>
					<Text style={styles.result}>{point}</Text>
				</View>
			</View>
				{/*End result contain*/}

				<View style={styles.formInfo}>
					<Text style={styles.infoText}>Người tạo: Dr. Meyer Saklad</Text>
					<Text style={styles.infoText}>bản dịch: badt.vn/phacdo</Text>
				</View>
			</View>
			</TouchableWithoutFeedback>
			</KeyboardAvoidingView>

			</ScrollView>
		<View style={styles.bottomBanner}>
			<AdMob />
		</View>
	</View>
	)
}
