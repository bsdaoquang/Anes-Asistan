import React, {useState} from 'react'
import {
	View, Text, TextInput, ScrollView,
	TouchableOpacity, TouchableWithoutFeedback,
	KeyboardAvoidingView, Keyboard, RefreshControl
} from 'react-native'
import AdMob from '../components/AdMob'
import {styles} from '../components/styles'

export default function ItraoperativeFluidAdults(){
	const [weight, setWeight] = useState(weight)
	const [timeNPO, setTimeNPO] = useState(timeNPO)
	const [traumaTissue, setTraumaTissue] = useState(0)

	var mainFluid, npoFluid, fluid1st, fluid2nd, fluid4th, fluidLoss

	if (weight != null && timeNPO != null) {
		fluidLoss = weight * traumaTissue

		mainFluid = parseInt(weight) + 40
		npoFluid = mainFluid * parseInt(timeNPO)
		fluid1st = ((0.5*npoFluid) + mainFluid).toFixed(0)
		fluid2nd = ((0.25*npoFluid) + mainFluid + fluidLoss).toFixed(0)
		fluid4th = mainFluid + fluidLoss
	}

	return(
		<View  style={styles.container}>
			<ScrollView>
				<KeyboardAvoidingView>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={styles.inner}>
							{/*This is header*/}
							<View style={styles.headerContain}>
								<Text style={styles.headerSubTitle}>Lượng dịch cần truyền trong phẫu thuật ở bệnh nhân người lớn</Text>
							</View>
							{/*End header*/}
							<View style={styles.formImportant}>
								<Text style={styles.titleInfo, {color: '#fafafa', fontSize: 18, fontWeight: 'bold'}}>LƯU Ý</Text>
								<Text style={styles.importantText}>Đây chỉ là công cụ hỗ trợ tính toán, không cung cấp thông tin thuốc toàn diện về thuốc. Luôn luôn kiểm tra liều dùng của thuốc và tham khảo ý kiến dược sĩ nếu cần</Text>
							</View>

							<View style={styles.formIntructions}>
							<Text style={styles.titleInfo, {color: '#fafafa', fontSize: 18, fontWeight: 'bold'}}>HƯỚNG DẪN</Text>
								<Text style={styles.importantText}>"Sử dụng ở những trường hợp phẫu thuật lớn, bệnh nhân > 20Kg và không trong tình trạng quá tải dịch như: suy tim, COPD, suy thận đang chạy thận..."</Text>
							</View>

							{/*This is form container*/}
		          <View style={styles.formContain}>
		            {/*This is input contain*/}
		            <View style={styles.inputContain}>
		              <View style={styles.titleInput}>
		                <Text style={styles.titleInputText}>Cân nặng</Text>
		              </View>

		              <View style={styles.inputContent}>
		                <TextInput
		                  style={styles.input}
		                  placeholder = '0'
		                  keyboardType = 'number-pad'
		                  onChangeText = {weight => setWeight(weight)}
		                  clearTextOnFocus
		                />
		              </View>

		              <View style={styles.unitContainInput}>
		                <Text style={styles.unitTitle}>Kg</Text>
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
		                <Text style={styles.titleInputText}>Thời gian phẫu thuật</Text>
		              </View>

		              <View style={styles.inputContent}>
		                <TextInput
		                  style={styles.input}
		                  placeholder = '0'
		                  keyboardType = 'number-pad'
		                  onChangeText = {timeNPO => setTimeNPO(timeNPO)}
		                  clearTextOnFocus
		                />
		              </View>

		              <View style={styles.unitContainInput}>
		                <Text style={styles.unitTitle}>giờ</Text>
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
										 <Text style={styles.titleInputText}>Mức độ tổn thương mô</Text>
										 <Text style={styles.titleInputDesc}>Dự tính lượng dịch mất do tổn thương trong phẫu thuật</Text>
									 </View>

									 <View style={styles.buttonContainVertical}>
											 <TouchableOpacity
												 style= {traumaTissue == 3 ? styles.buttonSelect : styles.buttonNonSelect}
												 onPress={() => setTraumaTissue(3)}>
												 <Text style={traumaTissue == 3? styles.buttonTextSelect : styles.buttonTextNonSelect}>Tối thiểu</Text>
											 </TouchableOpacity>

											 <TouchableOpacity
												 style={traumaTissue == 5 ? styles.buttonSelect : styles.buttonNonSelect}
												 onPress={() => setTraumaTissue(5)}>
												 <Text style={traumaTissue == 5? styles.buttonTextSelect : styles.buttonTextNonSelect}>Trung bình</Text>
											 </TouchableOpacity>

											 <TouchableOpacity
												 style={traumaTissue == 7 ? styles.buttonSelect : styles.buttonNonSelect}
												 onPress={() => setTraumaTissue(7)}>
												 <Text style={traumaTissue == 7? styles.buttonTextSelect : styles.buttonTextNonSelect}>Nghiêm trọng</Text>
											 </TouchableOpacity>
									 </View>
								 </View>
								 {/*end input contain*/}
							 </View>
							{/*end from contain*/}

							{/*this is result, show in result != 0*/}
							<View style={styles.resultContain}>
								{
									mainFluid > 0 ?
										<View>
											<View style={styles.resultContent}>
												<Text style={styles.resultTitleText}>Dịch mất trong mổ: </Text>
												<Text style={styles.result}>{npoFluid}</Text>
												<Text style={styles.resultTitleText}>mL</Text>
											</View>

											<View style={styles.resultContent}>
												<Text style={styles.resultTitleText}>Duy trì: </Text>
												<Text style={styles.result}>{mainFluid}</Text>
												<Text style={styles.resultTitleText}>mL/giờ (~{((mainFluid*20)/60).toFixed()} g/p)</Text>
											</View>

											<View style={styles.resultContent}>
												<Text style={styles.resultTitleText}>Giờ thứ nhất:</Text>
												<Text style={styles.result}>{fluid1st}</Text>
												<Text style={styles.resultTitleText}>mL/giờ (~{((fluid1st*20)/60).toFixed()} g/p)</Text>
											</View>
											<Text style={styles.rateContent}>Giờ thứ 2: {fluid2nd} mL/giờ (~{((fluid2nd*20)/60).toFixed()} g/p)</Text>
											<Text style={styles.rateContent}>Giờ thứ 3: {fluid2nd} mL/giờ (~{((fluid2nd*20)/60).toFixed()} g/p)</Text>
											<Text style={styles.rateContent}>Giờ thứ 4 và sau đó: {fluid4th} mL/giờ (~{((fluid4th*20)/60).toFixed()} g/p)</Text>
										</View>

									: <Text style={styles.unit}>Nhập đầy đủ thông tin để tính</Text>
								}
							</View>
							{/*end result*/}

						<View style={styles.formInfo}>
							<Text style={styles.titleInfo}>Công thức</Text>
							<Text style={styles.infoText}>- Dịch cơ bản mỗi giờ, mL/giờ = cân nặng, kg + 40 mL</Text>
							<Text style={styles.infoText}>- Dịch mất trong mổ, mL = Dịch cơ bản mỗi giờ, mL/giờ × thời gian phẫu thuật, giờ</Text>
							<Text style={styles.infoText}>- Giờ thứ 1: ½ Dịch mất trong mổ + Dịch cơ bản mỗi giờ</Text>
							<Text style={styles.infoText}>- Giờ thứ 2: ¼ Dịch mất trong mổ + Dịch cơ bản mỗi giờ + dịch mất do tổn thương*</Text>
							<Text style={styles.infoText}>- Giờ thứ 3: ¼ Dịch mất trong mổ + Dịch cơ bản mỗi giờ + dịch mất do tổn thương*</Text>
							<Text style={styles.infoText}>- Giờ thứ 4 và hơn: Dịch cơ bản mỗi giờ + dịch mất do tổn thương*</Text>
							<Text style={styles.infoText}>*Ước lượng lượng dịch mất do tổn thương:</Text>

								<View style={styles.formInfo2col}>
					        <View style={styles.infoCol2}>
						        <Text style={styles.infoText}>Tối thiểu</Text>
					         </View>
					         <View style={styles.infoCol1}>
						        <Text style={styles.infoText}>vd: nội soi, thoát vị</Text>
					      	</View>
									<View style={styles.infoCol1}>
									 <Text style={styles.infoText}>"2-4mL/kg/giờ, sử dụng: 3mL/kg/giờ"</Text>
								 	</View>
								</View>

								<View style={styles.formInfo2col}>
					        <View style={styles.infoCol2}>
						        <Text style={styles.infoText}>Trung bình</Text>
					         </View>
					         <View style={styles.infoCol1}>
						        <Text style={styles.infoText}>vd: cắt túi mật...</Text>
					      	</View>
									<View style={styles.infoCol1}>
									 <Text style={styles.infoText}>4-6mL/kg/giờ, sử dụng: 5mL/kg/giờ</Text>
								 	</View>
								</View>

								<View style={styles.formInfo2col}>
					        <View style={styles.infoCol2}>
						        <Text style={styles.infoText}>Nghiêm trọng</Text>
					         </View>
					         <View style={styles.infoCol1}>
						        <Text style={styles.infoText}>vd: Cắt đoạn ruột</Text>
					      	</View>
									<View style={styles.infoCol1}>
									 <Text style={styles.infoText}>4-6mL/kg/giờ, sử dụng 5mL/kg/giờ</Text>
								 	</View>
								</View>
						</View>

							<View style={styles.formInfo}>
								<Text style={styles.infoText}>"Tác giả: Dr. Tomas Corcoran"</Text>
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
